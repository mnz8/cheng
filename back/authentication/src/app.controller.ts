import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { AUTHENTICATION_MP } from 'collect-config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern(AUTHENTICATION_MP)
  authC(data: string): string {
    console.log('AUTHENTICATION_MP received data', data);
    return 'hello authentication';
  }
}
