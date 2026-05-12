import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { UserModule } from './modules/user.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('UserService');
  const port = 3001;

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: port,
      },
    },
  );
  await app.listen();
  logger.log(`User Microservice is listening on port ${port}`);
}
bootstrap();
