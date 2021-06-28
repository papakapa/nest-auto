import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RateModule } from './modules/rate/rate.module';
import { CarModule } from './modules/car/car.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [RateModule, CarModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
