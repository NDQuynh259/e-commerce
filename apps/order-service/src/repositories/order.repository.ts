import { Injectable } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import { Order } from '../generated/client';
import { CreateOrderDto } from '../dto/create-order.dto';

@Injectable()
export class OrderRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Order[]> {
    return this.prisma.order.findMany({ include: { items: true } });
  }

  async create(data: CreateOrderDto): Promise<Order> {
    const { items, ...orderData } = data;
    return this.prisma.order.create({
      data: {
        ...orderData,
        items: {
          create: items,
        },
      },
      include: { items: true },
    });
  }
}
