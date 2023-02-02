import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { RegisterModule } from './modules/register/register.module';
import { ConversationModule } from './modules/conversation/conversation.module';
import { SettingModule } from './modules/setting/setting.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        '.env.development.local',
        '.env.local',
        '.env.development',
        '.env.production',
        '.env',
      ],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
        PORT: Joi.number().default(3000),
      }),
    }),
    ,
    RegisterModule,
    ConversationModule,
    SettingModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
