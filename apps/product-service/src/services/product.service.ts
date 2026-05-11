import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../repositories/product.repository';
import { CreateProductDto } from '../dto/product.dto';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async findAll() {
    return this.productRepository.findAll();
  }

  async findOne(id: string) {
    return this.productRepository.findById(id);
  }

  async create(data: CreateProductDto) {
    return this.productRepository.create(data);
  }
}
