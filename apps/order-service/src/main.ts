import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { OrderModule } from './modules/order.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('OrderService');
  const port = 3003;

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    OrderModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: port,
      },
    },
  );
  await app.listen();
  logger.log(`Order Microservice is listening on port ${port}`);
}
bootstrap();
