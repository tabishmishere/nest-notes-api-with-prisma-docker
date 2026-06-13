import { Injectable } from '@nestjs/common';
import { RegisterDto } from './Dto/register.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  register(registerDto: RegisterDto) {
    this.userService.getUserByEmail(registerDto.email);
    return {
      message: registerDto,
    };
  }
}
