import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { AUTHENTICATION_I_PORT, AUTHENTICATION_O_PORT } from '../../constants';

async function bootstrap() {
  /**
   * This example contains a hybrid application (HTTP + TCP)
   * You can switch to a microservice with NestFactory.createMicroservice() as follows:
   *
   * const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
   *  transport: Transport.TCP,
   *  options: { retryAttempts: 5, retryDelay: 3000 },
   * });
   * await app.listen();
   *
   */
  const app = await NestFactory.create(AppModule);

  // tcp AUTHENTICATION_I_PORT
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { retryAttempts: 5, retryDelay: 3000, port: AUTHENTICATION_I_PORT },
  });

  await app.startAllMicroservices();
  // http AUTHENTICATION_O_PORT
  await app.listen(AUTHENTICATION_O_PORT);
}

bootstrap();
