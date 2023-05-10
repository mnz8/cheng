import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';
import { BLOG_I_PORT } from 'collect-config';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: `localhost:${BLOG_I_PORT}`,
      package: 'blog',
      // 改为 node_modules 模式
      protoPath: join('node_modules/collect-config/proto/blog.proto'),
    },
  });
  await app.listen();
}

bootstrap();
