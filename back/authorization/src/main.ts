import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AUTHORIZATION_O_PORT } from 'collect-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(AUTHORIZATION_O_PORT);
}
bootstrap();
