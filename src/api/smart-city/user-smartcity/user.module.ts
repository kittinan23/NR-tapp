import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSmartCity, UserSmartcitySchema } from './user.schema';
import { userSmartService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserSmartCity.name, schema: UserSmartcitySchema },
    ])],

  providers: [userSmartService],
  exports: [userSmartService]
})
export class UserSmartModule { }