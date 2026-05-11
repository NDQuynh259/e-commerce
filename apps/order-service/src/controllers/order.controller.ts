import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrderService } from '../services/order.service';
import { CreateOrderDto } from '../dto/create-order.dto';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @MessagePattern({ cmd: 'get_orders' })
  async getOrders() {
    return this.orderService.findAll();
  }

  @MessagePattern({ cmd: 'create_order' })
  async createOrder(@Payload() data: CreateOrderDto) {
    return this.orderService.create(data);
  }
}
