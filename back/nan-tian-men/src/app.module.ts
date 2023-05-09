import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';
import { AUTHENTICATION_SERVICE, AUTHENTICATION_I_PORT, USER_MANAGER_SERVICE, USER_MANAGER_I_PORT } from '../../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: AUTHENTICATION_SERVICE,
        transport: Transport.TCP,
        options: {
          port: AUTHENTICATION_I_PORT,
        },
      },
    ]),
    ClientsModule.register([
      {
        name: USER_MANAGER_SERVICE,
        transport: Transport.TCP,
        options: {
          port: USER_MANAGER_I_PORT,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
