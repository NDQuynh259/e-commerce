import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../repositories/order.repository';
import { CreateOrderDto } from '../dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(private orderRepository: OrderRepository) {}

  async findAll() {
    return await this.orderRepository.findAll();
  }

  async create(data: CreateOrderDto) {
    return await this.orderRepository.create(data);
  }
}
