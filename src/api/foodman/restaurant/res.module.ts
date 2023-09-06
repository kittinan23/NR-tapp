import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {  Order, OrderSchema } from './res.schema';
import { OrderService } from './res.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Order.name, schema: OrderSchema },
    ])],

  providers: [OrderService],
  exports: [OrderService]
})
export class OrderModule { }