import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { GatewayService } from './gateway.service';

@Controller()
export class GatewayController {
  constructor(
    private readonly gatewayService: GatewayService,
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
    @Inject('PRODUCT_SERVICE') private readonly productClient: ClientProxy,
    @Inject('ORDER_SERVICE') private readonly orderClient: ClientProxy,
  ) {}

  // Auth & User
  @Post('auth/login')
  login(@Body() loginDto: any) {
    return this.userClient.send({ cmd: 'login' }, loginDto);
  }

  @Get('user/:id')
  getUser(@Param('id') id: string) {
    return this.userClient.send({ cmd: 'get_user' }, { id });
  }

  // Product
  @Get('products')
  getProducts() {
    return this.productClient.send({ cmd: 'get_products' }, {});
  }

  @Post('product')
  createProduct(@Body() productDto: any) {
    return this.productClient.send({ cmd: 'create_product' }, productDto);
  }

  // Order
  @Get('orders')
  getOrders() {
    return this.orderClient.send({ cmd: 'get_orders' }, {});
  }

  @Post('order')
  createOrder(@Body() orderDto: any) {
    return this.orderClient.send({ cmd: 'create_order' }, orderDto);
  }
}
