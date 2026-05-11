import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'login' })
  async login(@Payload() data: any) {
    const user = await this.userService.validateUser(data.email, data.password);
    if (user) {
      return this.userService.login(user);
    }
    return { error: 'Unauthorized' };
  }

  @MessagePattern({ cmd: 'get_user' })
  async getUser(@Payload() data: { id: string }) {
    return this.userService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'create_user' })
  async createUser(@Payload() data: any) {
    return this.userService.createUser(data);
  }

  @MessagePattern({ cmd: 'validate_token' })
  async validateToken(@Payload() data: any) {
    // Logic validate token
    return { valid: true, userId: '1' };
  }
}
