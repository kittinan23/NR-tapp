import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { pakpoonUser, CatSchema } from 'src/api/foodman/Member/member.schema';
import { Delivery, DeliverySchema } from 'src/api/foodman/Menu/menu.schema';
import { Booking, BookingSchema } from './bk.schema';
import { OrderMenuService } from './bk.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Booking.name, schema: BookingSchema} , {name: pakpoonUser.name, schema: CatSchema },{ name: Delivery.name, schema: DeliverySchema }
    ])],
  controllers: [
  ],
  providers: [OrderMenuService],
  exports: [OrderMenuService]
})
export class BookingModule { }