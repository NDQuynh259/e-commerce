import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { ProductModule } from './modules/product.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('ProductService');
  const port = 3002;

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProductModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: port,
      },
    },
  );
  await app.listen();
  logger.log(`Product Microservice is listening on port ${port}`);
}
bootstrap();
