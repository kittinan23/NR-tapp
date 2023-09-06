import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { pakpoonUser, CatSchema } from 'src/api/foodman/Member/member.schema';
import { Delivery, DeliverySchema } from 'src/api/foodman/Menu/menu.schema';
import { OrderMenuService } from '../BookingOrder/bk.service';
import { Bed, BedSchema } from './bed.schema';
import { BedService } from './bed.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Bed.name, schema: BedSchema} 
    ])],
  controllers: [
  ],
  providers: [BedService],
  exports: [BedService]
})
export class BedModule { }