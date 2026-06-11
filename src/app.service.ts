import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World! I'm learning Nest.js with Typescript and Prisma.";
  }
}
