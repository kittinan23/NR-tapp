import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = applysmart & Document;

@Schema()
export class applysmart {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  type: String;

  @Prop()
  details: String;

  @Prop()
  topic: String;
}

export const ApplySchema = SchemaFactory.createForClass(applysmart);

