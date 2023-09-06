import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { pakpoonUser } from 'src/api/foodman/Member/member.schema';
import { Delivery } from 'src/api/foodman/Menu/menu.schema';
export type CatDocument = Booking & Document;
@Schema()
export class Booking {

  @Prop()
  id: string;

  @Prop()
  nameStore: string;

  @Prop()
  serialNumber: string;

  @Prop()
  status: string;

  @Prop()
  image: string;

  @Prop()
  Orderdate: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'member' })
  user: pakpoonUser;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Delivery' })
  orderid: Delivery;
}
export const BookingSchema = SchemaFactory.createForClass(Booking);

