import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Document } from 'mongoose';

export type CatDocument = happysmart & Document;

@Schema()
export class happysmart {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  happy1: String;

  @Prop()
  happy2: String;

  @Prop()
  happy3: String;

  @Prop()
  happy4: String;

  @Prop()
  happy5: String;

  @Prop()
  happy6: String;

  @Prop()
  happy7: String;

  @Prop()
  happy8: String;

  @Prop()
  happy9: String;

  @Prop()
  happy10: String;

  @Prop()
  happy11: String;

  @Prop()
  happy12: String;

  @Prop()
  happy13: String;

  @Prop()
  happy14: String;

  @Prop()
  happy15: String;

  @Prop()
  userID: String;

  @Prop()
  happyTotal: String;
}

export const happySchema = SchemaFactory.createForClass(happysmart);

