import { Injectable } from '@nestjs/common';
import { RegisterDto } from './Dto/register.dto';

@Injectable()
export class AuthService {
  register(registerDto: RegisterDto) {
    return {
      message: registerDto,
    };
  }
}
