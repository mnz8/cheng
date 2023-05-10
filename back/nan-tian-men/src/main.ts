import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NAN_TIAN_MEN_O_PORT } from 'collect-config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 设置统一前缀
  app.setGlobalPrefix('/nan-tian-men');

  const config = new DocumentBuilder()
    .setTitle('nan-tian-men')
    .setDescription('The nan-tian-men API description')
    .setVersion('1.0')
    .addTag('nan-tian-men')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(NAN_TIAN_MEN_O_PORT);
}

bootstrap();
