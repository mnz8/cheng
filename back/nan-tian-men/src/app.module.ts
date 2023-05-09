import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';
import { AUTHENTICATION_SERVICE, AUTHENTICATION_I_PORT, USER_MANAGER_SERVICE, USER_MANAGER_I_PORT, BLOG_SERVICE, BLOG_I_PORT } from '../../constants';
import { join } from 'path';

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
    ClientsModule.register([
      {
        name: BLOG_SERVICE,
        transport: Transport.GRPC,
        options: {
          url: `localhost:${BLOG_I_PORT}`,
          package: 'blog',
          // 路径跟 back\constants.ts 有关
          protoPath: join(__dirname, '../../../../blog/src/blog.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
