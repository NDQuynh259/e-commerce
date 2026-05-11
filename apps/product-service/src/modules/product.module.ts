import { Module } from '@nestjs/common';
import { ProductController } from '../controllers/product.controller';
import { ProductService } from '../services/product.service';
import { PrismaService } from '../db/prisma.service';
import { ProductRepository } from '../repositories/product.repository';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService, PrismaService, ProductRepository],
})
export class ProductModule {}
