import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeliveryDocument = Order & Document;

@Schema()
export class Order {

  @Prop()
  id: string;

  @Prop()
  Restaurantname: string;

  @Prop()
  image: string;

  @Prop()
  orderdate: string;

  @Prop()
  pass: string;

  @Prop()
  status: string;

  @Prop()
  created: string;

  @Prop()
  updated: String; 
}

export const OrderSchema = SchemaFactory.createForClass(Order);

