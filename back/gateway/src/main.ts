import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GATEWAY_O_PORT } from '../../constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(GATEWAY_O_PORT);
}
bootstrap();
