import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './Dto/register.dto';
import { AuthService } from './auth.service';
@Controller('api')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
}
