import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrderService } from './order.service';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @MessagePattern({ cmd: 'get_orders' })
  async getOrders() {
    return this.orderService.findAll();
  }

  @MessagePattern({ cmd: 'create_order' })
  async createOrder(@Payload() data: any) {
    return this.orderService.create(data);
  }
}
