import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Document } from 'mongoose';

export type CatDocument = protestsmart & Document;

@Schema()
export class protestsmart {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  type: String;

  @Prop()
  topic: String;

  @Prop()
  name: String;

  @Prop({ default: "รอตรวจสอบ" })
  status: string;

  @Prop()
  userID: string;
}

export const protestSchema = SchemaFactory.createForClass(protestsmart);

