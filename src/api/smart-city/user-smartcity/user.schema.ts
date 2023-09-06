import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Document } from 'mongoose';

export type CatDocument = UserSmartCity & Document;

@Schema()
export class UserSmartCity {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: string;

  @Prop()
  prefix: string;

  @Prop()
  name: string;

  @Prop()
  lastname: string;

  @Prop()
  sex: string;

  @Prop()
  blood: string;
  
  @Prop()
  telephone: string;

  @Prop()
  housenumber: string;

  @Prop()
  group: string;

  @Prop()
  alley: string;

  @Prop()
  road: string;

  @Prop()
  province: string;

  @Prop()
  district: string;

  @Prop()
  sub_district: string;

  @Prop()
  zipcode: string;

  @Prop()
  userID: string;
}

export const UserSmartcitySchema = SchemaFactory.createForClass(UserSmartCity);

