import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Document } from 'mongoose';

export type CatDocument = pakpoonUser & Document;

@Schema()
export class pakpoonUser {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  floor: String;

  @Prop()
  room: String;

  @Prop()
  bednumber: string;

  @Prop()
  prefix: string;

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  // @Prop()
  // nickname: string;

  @Prop()
  idcard: string;
  // @Prop()
  // position: string;

  @Prop()
  birthday: string;

  // @IsNotEmpty()
  // @Prop()
  // tel: string;

  @Prop()
  age: number;

  // @Prop()
  // email: string;

  @Prop()
  sex: string;

  // @Prop()
  // password: string;

  @Prop()
  occupation: string;

  @Prop()
  tel: string;

  @Prop()
  firstday: string;

  @Prop()
  lastday: string;

  @Prop()
  status: string;

  @Prop()
  temperature: string;

  @Prop()
  upperpressure: string;

  @Prop()
  lowerpressure: string;

  @Prop()
  bloodoxygen: string;

  @Prop()
  pulse: string;

  @Prop()
  bloodsugar: string;

  @Prop()
  note: string;
  
}

export const CatSchema = SchemaFactory.createForClass(pakpoonUser);

