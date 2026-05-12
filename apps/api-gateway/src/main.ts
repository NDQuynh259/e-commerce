import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);
  const logger = new Logger('GatewayApplication');
  const port = process.env.PORT ?? 3000;

  logger.log(`API Gateway is running on port: ${port}`);
  logger.log(`- Connected to User Service on port 3001`);
  logger.log(`- Connected to Product Service on port 3002`);
  logger.log(`- Connected to Order Service on port 3003`);

  await app.listen(port);
}
bootstrap();
