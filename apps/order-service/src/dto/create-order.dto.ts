export interface CreateOrderItemDto {
  productId: string;
  variantId?: string;
  quantity: number;
  price: number;
}

export interface CreateOrderDto {
  userId: string;
  total: number;
  items: CreateOrderItemDto[];
}
