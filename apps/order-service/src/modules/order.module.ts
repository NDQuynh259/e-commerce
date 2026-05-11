import { Module } from '@nestjs/common';
import { OrderController } from '../controllers/order.controller';
import { OrderService } from '../services/order.service';
import { PrismaService } from '../db/prisma.service';
import { OrderRepository } from '../repositories/order.repository';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [OrderService, PrismaService, OrderRepository],
})
export class OrderModule {}
