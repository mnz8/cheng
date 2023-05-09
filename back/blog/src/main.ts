import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';
import { BLOG_I_PORT } from '../../constants';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: `localhost:${BLOG_I_PORT}`,
      package: 'blog',
      // 路径跟 back\constants.ts 有关
      protoPath: join(__dirname, '../../blog.proto'),
    },
  });
  await app.listen();
}

bootstrap();
