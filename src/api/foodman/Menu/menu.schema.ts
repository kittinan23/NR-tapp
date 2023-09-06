import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Order } from 'src/api/foodman/restaurant/res.schema';
export type DeliveryDocument = Delivery & Document;

@Schema()
export class Delivery {

  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  price: number;

  @Prop()
  image:string;

  @Prop()
  created: string;

  @Prop()
  updated: String; 

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'order' })
  restaurant: Order;

  @Prop()
  Restaurantname: String; 
}

export const DeliverySchema = SchemaFactory.createForClass(Delivery);

