import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Document } from 'mongoose';

export type CatDocument = lifesurveysmart & Document;

@Schema()
export class lifesurveysmart {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  sex: String;

  @Prop()
  age: String;

  @Prop()
  religion: String;

  @Prop()
  parent: String;

  @Prop()
  timemonth: String;

  @Prop()
  education: String;

  @Prop()
  living: String;

  @Prop()
  identity1: String;

  @Prop()
  identity2: String;

  @Prop()
  identity3: String;

  @Prop()
  identity4: String;

  @Prop()
  identity5: String;

  @Prop()
  identity6: String;

  @Prop()
  identity7: String;

  @Prop()
  identity8: String;

  @Prop()
  identity9: String;

  @Prop()
  identity10: String;

  @Prop()
  identity11: String;

  @Prop()
  identity12: String;

  @Prop()
  identity13: String;

  @Prop()
  identity14: String;

  @Prop()
  identity15: String;

  @Prop()
  family16: String;

  @Prop()
  family17: String;

  @Prop()
  family18: String;

  @Prop()
  family19: String;

  @Prop()
  family20: String;

  @Prop()
  family21: String;

  @Prop()
  family22: String;

  @Prop()
  family23: String;

  @Prop()
  intellect24: String;

  @Prop()
  intellect25: String;

  @Prop()
  intellect26: String;

  @Prop()
  intellect27: String;

  @Prop()
  intellect28: String;

  @Prop()
  intellect29: String;

  @Prop()
  intellect30: String;

  @Prop()
  intellect31: String;

  @Prop()
  intellect32: String;

  @Prop()
  intellect33: String;

  @Prop()
  intellect34: String;

  @Prop()
  friend35: String;

  @Prop()
  friend36: String;

  @Prop()
  friend37: String;

  @Prop()
  friend38: String;

  @Prop()
  friend39: String;

  @Prop()
  friend40: String;

  @Prop()
  community41: String;

  @Prop()
  community42: String;

  @Prop()
  community43: String;

  @Prop()
  community44: String;


  @Prop()
  community45: String;

  @Prop()
  community46: string;

  @Prop()
  community47: string;

  @Prop()
  community48: string;

  @Prop()
  sumidentity: string;

  @Prop()
  sumfamily: string;

  @Prop()
  sumintellect: string;

  @Prop()
  sumfriend: string;

  @Prop()
  sumcommunity: string;

  @Prop()
  userID: string;

}

export const lifesurveySchema = SchemaFactory.createForClass(lifesurveysmart);

