import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { USER_MANAGER_I_PORT } from '../../constants';

async function bootstrap() {
  // tcp 模式 host 默认 localhost
  // source code location: packages\microservices\constants.ts
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: {
      port: USER_MANAGER_I_PORT,
    },
  });
  await app.listen();
}

bootstrap();
