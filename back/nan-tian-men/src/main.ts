import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NAN_TIAN_MEN_O_PORT } from '../../constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 设置统一前缀
  app.setGlobalPrefix('/nan-tian-men');
  await app.listen(NAN_TIAN_MEN_O_PORT);
}
bootstrap();
