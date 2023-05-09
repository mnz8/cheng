import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { USER_MANAGER_MP } from '../../constants';

@Controller()
export class AppController {
  @MessagePattern(USER_MANAGER_MP)
  user_manager(data: string): string {
    console.log('USER_MANAGER_MP received data', data);
    return 'hello user-manager';
  }
}
