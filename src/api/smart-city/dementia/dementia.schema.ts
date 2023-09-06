import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Document } from 'mongoose';

export type CatDocument = dementiasmart & Document;

@Schema()
export class dementiasmart {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  dementia1: String;

  @Prop()
  dementia2: String;

  @Prop()
  dementia3: String;

  @Prop()
  dementia4: String;

  @Prop()
  dementia5: String;

  @Prop()
  dementia6: String;

  @Prop()
  dementia7: String;

  @Prop()
  dementia8: String;

  @Prop()
  dementia9: String;

  @Prop()
  dementia10: String;

  @Prop()
  dementia11: String;

  @Prop()
  dementia12: String;

  @Prop()
  dementia13: String;

  @Prop()
  dementia14: String;

  @Prop()
  userID: String;

  @Prop()
  happyTotal: String;
}

export const dementiaSchema = SchemaFactory.createForClass(dementiasmart);

