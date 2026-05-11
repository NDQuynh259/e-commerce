import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProductService } from '../services/product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern({ cmd: 'get_products' })
  async getProducts() {
    return this.productService.findAll();
  }

  @MessagePattern({ cmd: 'get_product' })
  async getProduct(@Payload() data: { id: string }) {
    return this.productService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'create_product' })
  async createProduct(@Payload() data: any) {
    return this.productService.create(data);
  }
}
