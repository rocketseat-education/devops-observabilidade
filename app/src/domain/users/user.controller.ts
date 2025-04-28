import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async list(): Promise<any> {
    return await this.userService.list();
  }
}
