import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class AuthController {
  @Get('register')
  register() {
    return {
      message: 'Register endpoint is working',
    };
  }
}
