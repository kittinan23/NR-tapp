import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Delivery, DeliverySchema } from './menu.schema';
import { MenuService } from './menu.service';
import { MulterModule } from '@nestjs/platform-express';
import { Order, OrderSchema } from 'src/api/foodman/restaurant/res.schema';

@Module({
  imports: [MulterModule.register({
    dest: './files',
  }),
    MongooseModule.forFeature([
      { name: Delivery.name, schema: DeliverySchema },{ name: Order.name, schema: OrderSchema },
    ])],

  providers: [MenuService],
  exports: [MenuService]
})
export class DeliveryModule { }