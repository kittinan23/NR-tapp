import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Document } from 'mongoose';

export type CatDocument = userCovid & Document;

@Schema()
export class userCovid {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  prefix: String;

  @Prop()
  firstname: String;

  @Prop()
  lastname: string;

  @Prop()
  idcard: string;

  @Prop()
  bednumber: string;

  @Prop()
  birthday: string;

  // @Prop()
  // nickname: string;

  @Prop()
  age: number;
  // @Prop()
  // position: string;

  @Prop()
  sex: string;

  // @IsNotEmpty()
  // @Prop()
  // tel: string;

  @Prop()
  weight: number;

  // @Prop()
  // email: string;

  @Prop()
  height: number;

  // @Prop()
  // password: string;

  @Prop()
  nationality: string;

  @Prop()
  religion: string;

  @Prop()
  occupation: string;

  @Prop()
  housenumber: string;

  @Prop()
  group: number;

  @Prop()
  tumbon: string;

  @Prop()
  amphoe: string;

  @Prop()
  junwad: string;

  @Prop()
  email: string;

  @Prop()
  tel: string;

  @Prop()
  firstday: string;

  @Prop()
  lastday: string;
  
}

export const CatSchema = SchemaFactory.createForClass(userCovid);

