import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.product.findMany({ include: { category: true } });
  }

  async findOne(id: string) {
    return this.prisma.product.findUnique({ where: { id }, include: { category: true } });
  }

  async create(data: any) {
    return this.prisma.product.create({ data });
  }
}
