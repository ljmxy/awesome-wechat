import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  index(): string {
    throw new HttpException('invalid request', HttpStatus.BAD_REQUEST);
  }
}
