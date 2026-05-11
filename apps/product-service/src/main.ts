import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { ProductModule } from './product.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProductModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3002,
      },
    },
  );
  await app.listen();
  console.log('Product Microservice is listening on port 3002');
}
bootstrap();
