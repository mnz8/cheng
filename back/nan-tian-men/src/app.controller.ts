import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AUTHENTICATION_SERVICE, AUTHENTICATION_MP, USER_MANAGER_SERVICE, USER_MANAGER_MP, BLOG_SERVICE } from '../../constants';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(AUTHENTICATION_SERVICE) private authentication_client: ClientProxy,
    @Inject(USER_MANAGER_SERVICE) private user_manager_client: ClientProxy,
    @Inject(BLOG_SERVICE) private blog_client: ClientProxy,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('authentication')
  authentication(): Observable<string> {
    return this.authentication_client.send(AUTHENTICATION_MP, 'nan-tian-men send to authentication_service');
  }

  @Get('user-manager')
  user_manager(): Observable<string> {
    return this.user_manager_client.send(USER_MANAGER_MP, 'nan-tian-men send to user_manager_service');
  }
}
