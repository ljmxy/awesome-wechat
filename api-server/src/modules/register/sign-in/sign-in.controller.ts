import { Controller, Post } from '@nestjs/common';

@Controller('sign-in')
export class SignInController {
  @Post()
  signIn() {
    return 'sign in';
  }
}
