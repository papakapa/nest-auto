import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get(':id')
  async getUserById(@Param() params) {
    return await this.userService.findOne(params.id);
  }
}
