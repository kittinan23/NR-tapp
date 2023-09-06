import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminSmartCity, AdminSmartCitySchema } from './user.schema';
import { adminService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AdminSmartCity.name, schema: AdminSmartCitySchema },
    ])],

  providers: [adminService],
  exports: [adminService]
})
export class AdminSmartCityModule { }