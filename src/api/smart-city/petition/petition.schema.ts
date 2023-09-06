import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Document } from 'mongoose';

export type CatDocument = petitionsmart & Document;

@Schema()
export class petitionsmart {

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

  @Prop({ default: "รอตรวจสอบ" })
  status: string;
}

export const petitionSchema = SchemaFactory.createForClass(petitionsmart);

