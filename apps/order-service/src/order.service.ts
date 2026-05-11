import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.order.findMany({ include: { items: true } });
  }

  async create(data: any) {
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
