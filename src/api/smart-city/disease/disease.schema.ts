import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Document } from 'mongoose';

export type CatDocument = diseasesmart & Document;

@Schema()
export class diseasesmart {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  cardID: String;

  @Prop()
  hospital: String;

  @Prop()
  day: String;

  @Prop()
  month: String;

  @Prop()
  year: String;

  @Prop()
  elderly: String;

  @Prop()
  bedridden_patient: String;

  @Prop()
  handicapped: String;

  @Prop()
  congenital_disease: String;

  @Prop()
  diabetes: String;

  @Prop()
  lung_disease: String;

  @Prop()
  kidney_disease: String;

  @Prop()
  immunodeficiency: String;

  @Prop()
  liver_disease: String;

  @Prop()
  migraine: String;

  @Prop()
  high_blood: String;

  @Prop()
  thalassemia: String;

  @Prop()
  heart_disease: String;

  @Prop()
  allergy: String;

  @Prop()
  epilepsy: String;

  @Prop()
  other: String;

  @Prop()
  userID: String;
}

export const diseaseSchema = SchemaFactory.createForClass(diseasesmart);

