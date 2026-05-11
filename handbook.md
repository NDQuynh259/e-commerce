# Cẩm Nang Kiến Trúc Microservices: Xác Thực & Bảo Mật (Authentication & Security)

Tài liệu này tổng hợp các best-practices và kiến thức nền tảng về việc thiết kế luồng xác thực, quản lý người dùng và bảo mật nội bộ trong kiến trúc Microservices.

---

## 1. Anti-pattern: Tách biệt hoàn toàn `user-service` và `auth-service`

Trong nhiều thiết kế ban đầu, lập trình viên thường tách `user-service` (quản lý profile) và `auth-service` (đăng nhập/xác thực). Đây thường là một sai lầm (Anti-pattern).

### 1.1. Tại sao lại là "sai lầm"?
* **Khớp nối quá chặt chẽ (Tight Coupling):** `auth-service` luôn cần gọi `user-service` để kiểm tra password hash hoặc trạng thái user. Nếu `user-service` sập, hệ thống xác thực cũng sập.
* **Phá vỡ tính gắn kết dữ liệu (Data Cohesion):** Username, password, email là một khối dữ liệu thống nhất (Aggregate Root). Việc lưu ở 2 database khác nhau gây ra bài toán phức tạp về Distributed Transaction.
* **Vấn đề hiệu năng:** Tăng độ trễ mạng (latency) do các service phải call chéo nhau liên tục.

### 1.2. Giải pháp chuẩn (Best Practices)
* **Gộp chung thành Identity Service (IAM):** Xử lý trọn gói Đăng ký, Đăng nhập, JWT và Profile cơ bản.
* **Chỉ tách khi thật sự cần thiết:** Khi dùng Identity Provider (IdP) bên thứ 3 (Keycloak, Auth0) hoặc khi hệ thống có quy mô cực lớn cần scale nghiệp vụ Auth độc lập.

---

## 2. Xác minh Token (Verify Token): API Gateway hay Auth Service?

Trong Microservices, việc mỗi request đều gọi về Auth Service để xác minh token sẽ tạo ra "nút thắt cổ chai" (Bottleneck). 

### 2.1. Đưa việc Verify Token lên API Gateway (Khuyên dùng)
* **Cơ chế:** Chuyển sang sử dụng JWT (JSON Web Token). API Gateway giữ Public Key và tự động xác minh tính hợp lệ, chữ ký, thời hạn của Token mà **không cần** gọi đến Auth Service.
* **Lợi ích:** * Chặn request không hợp lệ ngay tại "cổng thành".
  * Giảm tải hoàn toàn cho Auth Service (Auth Service lúc này chỉ lo việc cấp Token).
* **Cách hoạt động xuống Downstream:** Gateway sau khi verify thành công sẽ gỡ token, lấy thông tin (`user_id`, `role`) nhét vào HTTP Header (VD: `x-user-id: 123`) và đẩy xuống các service nội bộ. Các service này chỉ cần đọc Header.

### 2.2. Các mô hình khác (Ít tối ưu hơn hoặc đặc thù)
* **Gọi vòng về Auth Service:** Chỉ dùng khi hệ thống xài Opaque Token (Token che khuất). Rất tốn tài nguyên.
* **Xác thực tại từng Microservice:** Gateway đẩy nguyên JWT xuống các service. Các service tự dùng thư viện để verify. Tốn công bảo trì code xác thực ở nhiều nơi.

---

## 3. Bảo mật giao tiếp giữa các service nội bộ

Các service gọi nhau trong mạng nội bộ có cần kiểm tra token không? Tùy thuộc vào chiến lược bảo mật.

### 3.1. Mô hình "Mạng nội bộ an toàn" (Perimeter Security)
* **Khái niệm:** Gateway verify token. Khi request đã vào trong mạng nội bộ, các service tự do gọi nhau không cần token.
* **Đặc điểm:** Hiệu năng cao, dễ code. 
* **Rủi ro:** Nếu hacker xâm nhập được 1 service (ví dụ qua lỗi SSRF), chúng có thể thoải mái gọi các service khác (như payment) mà không bị chặn. Phù hợp cho dự án vừa và nhỏ.

### 3.2. Mô hình "Không tin tưởng ai" (Zero Trust Network) - Tiêu chuẩn hiện đại
Bắt buộc phải xác thực ngay cả trong mạng nội bộ. Các phương pháp triển khai:
* **Chuyển tiếp Token (Token Pass-through):** Service A muốn gọi Service B phải đính kèm theo JWT của user.
* **Xác thực Service-to-Service (M2M):** Sử dụng OAuth2 Client Credentials. Service A tự động xin một token nội bộ để chứng minh danh tính với Service B.
* **Sử dụng Service Mesh (Tiên tiến nhất):** Dùng các công cụ như Istio, Consul. Hệ thống tự động mã hóa đường truyền nội bộ bằng **mTLS (Mutual TLS)** và tự động xác thực danh tính các service mà không cần sửa code ứng dụng.

---

## 4. Tóm tắt Kiến trúc Đề xuất
1. Thiết kế một **Identity Service** hoặc **User Service** thống nhất thay vì tách rời User/Auth.
2. Dùng **JWT** và giao trọng trách Verify Token cho **API Gateway**.
3. Gateway truyền thông tin user xuống các microservice qua **HTTP Header**.
4. Nếu dự án lớn/nhạy cảm, áp dụng **Zero Trust** với **Service Mesh (mTLS)** cho giao tiếp nội bộ. Nếu dự án nhỏ, cấu hình Network/VPC chặt chẽ và dùng Perimeter Security để tối ưu nguồn lực.