import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Document } from 'mongoose';

export type CatDocument = stresssmart & Document;

@Schema()
export class stresssmart {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  stress1: String;

  @Prop()
  stress2: String;

  @Prop()
  stress3: String;

  @Prop()
  stress4: String;

  @Prop()
  stress5: String;

  @Prop()
  stress6: String;

  @Prop()
  stress7: String;

  @Prop()
  stress8: String;

  @Prop()
  stress9: String;

  @Prop()
  stress10: String;

  @Prop()
  stress11: String;

  @Prop()
  stress12: String;

  @Prop()
  stress13: String;

  @Prop()
  stress14: String;

  @Prop()
  stress15: String;

  @Prop()
  stress16: String;

  @Prop()
  stress17: String;

  @Prop()
  stress18: String;

  @Prop()
  stress19: String;

  @Prop()
  stress20: String;

  @Prop()
  userID: String;

  @Prop()
  stressTotal: String;
}

export const stressSchema = SchemaFactory.createForClass(stresssmart);

