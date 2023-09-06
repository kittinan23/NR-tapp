import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Document } from 'mongoose';

export type CatDocument = AdminSmartCity & Document;

@Schema()
export class AdminSmartCity {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: string;

  @Prop()
  name: string;

  @Prop()
  userid: string;

  @Prop()
  password: string;

}

export const AdminSmartCitySchema = SchemaFactory.createForClass(AdminSmartCity);

