import { Injectable } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import { Product } from '../generated/client';
import { CreateProductDto } from '../dto/product.dto';

@Injectable()
export class ProductRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany({ include: { category: true } });
  }

  async findById(id: string): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });
  }

  async create(data: CreateProductDto): Promise<Product> {
    return this.prisma.product.create({ data });
  }
}
