import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Document } from 'mongoose';

export type CatDocument = employeesmart & Document;

@Schema()
export class employeesmart {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  affiliation: String;

  @Prop()
  position: String;

  @Prop()
  division: String;

  @Prop()
  cotton: String;

  @Prop()
  prefix: String;

  @Prop()
  name: String;

  @Prop()
  lastname: String;

  @Prop()
  sex: String;

  @Prop()
  age: String;

  @Prop()
  Employmenttype: String;

  @Prop()
  hospital: String;

  @Prop()
  IDcard: string;

  @Prop()
  nickname: string;

  @Prop()
  status: string;

  @Prop()
  tel: string;

  @Prop()
  address: string;

  @Prop()
  treatmentrights: string;

  @Prop()
  job99: string;

  @Prop()
  covid12: string;

  @Prop()
  treatmentrights99: string;

  @Prop()
  weight: String;

  @Prop()
  height: String;

  @Prop()
  BMI: String;

  @Prop()
  proportion: String;

  @Prop()
  waistline: String;

  @Prop()
  congenital_disease: String;

  @Prop()
  other_congenital_disease: String;

  @Prop()
  sick: String;

  @Prop()
  other_sick: String;

  @Prop()
  accident: String;

  @Prop()
  other_accident: String;

  @Prop()
  job_position: String;

  @Prop()
  working_life: String;

  @Prop()
  hours_work: String;

  @Prop()
  day_work: String;

  @Prop()
  department: String;

  @Prop()
  ot: String;

  @Prop()
  eating_behavior1: String;

  @Prop()
  eating_behavior2: String;

  @Prop()
  eating_behavior3: String;

  @Prop()
  drinking_alcohol1: String;

  @Prop()
  drinking_alcohol2: String;

  @Prop()
  smoke_often1: String;

  @Prop()
  smoke_often2: String;

  @Prop()
  exercise1: String;

  @Prop()
  exercise2: String;

  @Prop()
  exercise3: String;

  @Prop()
  exercise4: String;

  @Prop()
  covid1: String;

  @Prop()
  covid2: String;

  @Prop()
  Strain1: String;

  @Prop()
  Strain2: String;

  @Prop()
  Strain3: String;

  @Prop()
  Strain4: String;

  @Prop()
  Strain5: String;

  @Prop()
  Strain6: String;

  @Prop()
  Strain7: String;

  @Prop()
  Strain8: String;

  @Prop()
  Strain9: String;

  @Prop()
  Strain10: String;

  @Prop()
  Strain11: String;

  @Prop()
  Strain12: String;

  @Prop()
  Strain13: String;

  @Prop()
  Strain14: String;

  @Prop()
  Strain15: String;

  @Prop()
  Strain16: String;

  @Prop()
  Strain17: String;

  @Prop()
  Strain18: String;

  @Prop()
  Strain19: String;

  @Prop()
  Strain20: String;


  @Prop()
  debt_information: String;

  @Prop()
  happy1: string;

  @Prop()
  happy2: string;

  @Prop()
  happy3: string;

  @Prop()
  happy4: string;

  @Prop()
  happy5: string;

  @Prop()
  happy6: string;

  @Prop()
  happy7: string;

  @Prop()
  happy8: string;

  @Prop()
  happy9: string;

  @Prop()
  happy10: string;

  @Prop()
  happy11: string;

  @Prop()
  happy12: string;

  @Prop()
  happy13: string;

  @Prop()
  happy14: string;

  @Prop()
  happy15: string;

  @Prop()
  memory1: string;

  @Prop()
  memory2: string;

  @Prop()
  memory3: string;

  @Prop()
  memory4: string;

  @Prop()
  memory5: string;

  @Prop()
  memory6: string;

  @Prop()
  memory7: string;

  @Prop()
  memory8: string;

  @Prop()
  memory9: string;

  @Prop()
  memory10: string;

  @Prop()
  memory11: string;

  @Prop()
  memory12: string;

  @Prop()
  memory13: string;

  @Prop()
  memory14: string;

  @Prop()
  sumHappy: string;

  @Prop()
  sumMemory: string;

  @Prop()
  sumStrain: string;

  @Prop()
  userID: string;

}

export const employeeSchema = SchemaFactory.createForClass(employeesmart);

