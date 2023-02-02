import { Module } from '@nestjs/common';
import { SignInController } from './sign-in/sign-in.controller';
import { SignUpController } from './sign-up/sign-up.controller';
import { SignOutController } from './sign-out/sign-out.controller';

@Module({
  controllers: [SignInController, SignUpController, SignOutController]
})
export class RegisterModule {}
