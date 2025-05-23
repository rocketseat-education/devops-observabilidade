import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './domain/users/user.module'

@Module({
  imports: [ UserModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
