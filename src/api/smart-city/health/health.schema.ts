import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Document } from 'mongoose';

export type CatDocument = healthsmart & Document;

@Schema()
export class healthsmart {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  weight: String;

  @Prop()
  height: String;

  @Prop()
  waistline: String;

  @Prop()
  upper_blood1: String;

  @Prop()
  lower_blood1: String;

  @Prop()
  upper_blood2: String;

  @Prop()
  lower_blood2: String;

  @Prop()
  blood_sugar: String;

  @Prop()
  BMI: String;

  @Prop()
  proportion: String;

  @Prop()
  userID: String;
}

export const healthSchema = SchemaFactory.createForClass(healthsmart);

