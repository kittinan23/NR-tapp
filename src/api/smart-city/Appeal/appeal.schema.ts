import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type CatDocument = appealsmart & Document;

type gps = {
  lat: Number,
  lng: Number
}

@Schema()
export class appealsmart {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  day: String;

  @Prop()
  month: String;

  @Prop()
  year: String;

  @Prop()
  time: String;

  @Prop()
  type: String;

  @Prop()
  details: String;

  @Prop()
  topic: String;

  @Prop()
  img: Array<String>;

  @Prop()
  gps: gps;

  @Prop({ default: "รอตรวจสอบ" })
  status: string;

  @Prop({ default: 0 })
  Star: number;

  @Prop()
  Comment: string;

  @Prop()
  userID: string;

  @Prop({ default: "" })
  admin_start: string;

  @Prop({ default: "" })
  admin_end: string;

  @Prop({ default: "" })
  edit: string;

  @Prop({ default: "" })
  end: string;

  @Prop({ default: "" })
  detail_edit: string;

  @Prop({ default: [] })
  add_img: Array<string>;

  @Prop({ default: "" })
  response_time: string;

  @Prop({ default: "" })
  response_message: string;
}

export const appealSchema = SchemaFactory.createForClass(appealsmart);
@Schema()
export class electric {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  type: String;

  @Prop()
  details: String;

  @Prop()
  topic: String;

  @Prop()
  img: Array<String>;

  @Prop()
  gps: gps;

  @Prop({ default: "รอตรวจสอบ" })
  status: string;

  @Prop({ default: 0 })
  Star: number;

  @Prop()
  Comment: string;

  @Prop()
  userID: string;

  @Prop({ default: "" })
  admin: string;
}

export const electricSchema = SchemaFactory.createForClass(electric);

@Schema()
export class road {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  type: String;

  @Prop()
  details: String;

  @Prop()
  topic: String;

  @Prop()
  img: Array<String>;

  @Prop()
  gps: gps;

  @Prop({ default: "รอตรวจสอบ" })
  status: string;

  @Prop({ default: 0 })
  Star: number;

  @Prop()
  Comment: string;

  @Prop()
  userID: string;

  @Prop({ default: "" })
  admin: string;
}

export const roadSchema = SchemaFactory.createForClass(road);

@Schema()
export class plumbing {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  type: String;

  @Prop()
  details: String;

  @Prop()
  topic: String;

  @Prop()
  img: Array<String>;

  @Prop()
  gps: gps;

  @Prop({ default: "รอตรวจสอบ" })
  status: string;

  @Prop({ default: 0 })
  Star: number;

  @Prop()
  Comment: string;

  @Prop()
  userID: string;

  @Prop({ default: "" })
  admin: string;
}

export const plumbingSchema = SchemaFactory.createForClass(plumbing);

@Schema()
export class tree {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  type: String;

  @Prop()
  details: String;

  @Prop()
  topic: String;

  @Prop()
  img: Array<String>;

  @Prop()
  gps: gps;

  @Prop({ default: "รอตรวจสอบ" })
  status: string;

  @Prop({ default: 0 })
  Star: number;

  @Prop()
  Comment: string;

  @Prop()
  userID: string;

  @Prop({ default: "" })
  admin: string;
}

export const treeSchema = SchemaFactory.createForClass(tree);

@Schema()
export class annoying {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  type: String;

  @Prop()
  details: String;

  @Prop()
  topic: String;

  @Prop()
  img: Array<String>;

  @Prop()
  gps: gps;

  @Prop({ default: "รอตรวจสอบ" })
  status: string;

  @Prop({ default: 0 })
  Star: number;

  @Prop()
  Comment: string;

  @Prop()
  userID: string;

  @Prop({ default: "" })
  admin: string;
}

@Schema()
export class drainageditch {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  type: String;

  @Prop()
  details: String;

  @Prop()
  topic: String;

  @Prop()
  img: Array<String>;

  @Prop()
  gps: gps;

  @Prop({ default: "รอตรวจสอบ" })
  status: string;

  @Prop({ default: 0 })
  Star: number;

  @Prop()
  Comment: string;

  @Prop()
  userID: string;

  @Prop({ default: "" })
  admin: string;
}

export const drainageditchSchema = SchemaFactory.createForClass(drainageditch);


export const annoyingSchema = SchemaFactory.createForClass(annoying);

@Schema()
export class garbage {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  type: String;

  @Prop()
  details: String;

  @Prop()
  topic: String;

  @Prop()
  img: Array<String>;

  @Prop()
  gps: gps;

  @Prop({ default: "รอตรวจสอบ" })
  status: string;

  @Prop({ default: 0 })
  Star: number;

  @Prop()
  Comment: string;

  @Prop()
  userID: string;

  @Prop({ default: "" })
  admin: string;
}

export const garbageSchema = SchemaFactory.createForClass(garbage);

@Schema()
export class pension {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  type: String;

  @Prop()
  details: String;

  @Prop()
  topic: String;

  @Prop()
  img: Array<String>;

  @Prop()
  gps: gps;

  @Prop({ default: "รอตรวจสอบ" })
  status: string;

  @Prop({ default: 0 })
  Star: number;

  @Prop()
  Comment: string;

  @Prop()
  userID: string;

  @Prop({ default: "" })
  admin: string;
}

export const pensionSchema = SchemaFactory.createForClass(pension);

@Schema()
export class fund {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  type: String;

  @Prop()
  details: String;

  @Prop()
  topic: String;

  @Prop()
  img: Array<String>;

  @Prop()
  gps: gps;

  @Prop({ default: "รอตรวจสอบ" })
  status: string;

  @Prop({ default: 0 })
  Star: number;

  @Prop()
  Comment: string;

  @Prop()
  userID: string;

  @Prop({ default: "" })
  admin: string;
}

export const fundSchema = SchemaFactory.createForClass(fund);

@Schema()
export class education {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  type: String;

  @Prop()
  details: String;

  @Prop()
  topic: String;

  @Prop()
  img: Array<String>;

  @Prop()
  gps: gps;

  @Prop({ default: "รอตรวจสอบ" })
  status: string;

  @Prop({ default: 0 })
  Star: number;

  @Prop()
  Comment: string;

  @Prop()
  userID: string;

  @Prop({ default: "" })
  admin: string;
}

export const educationSchema = SchemaFactory.createForClass(education);

@Schema()
export class other {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  type: String;

  @Prop()
  details: String;

  @Prop()
  topic: String;

  @Prop()
  img: Array<String>;

  @Prop()
  gps: gps;

  @Prop({ default: "รอตรวจสอบ" })
  status: string;

  @Prop({ default: 0 })
  Star: number;

  @Prop()
  Comment: string;

  @Prop()
  userID: string;

  @Prop({ default: "" })
  admin: string;
}

export const otherSchema = SchemaFactory.createForClass(other);

@Schema()
export class emergency {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  type: String;

  @Prop()
  details: String;

  @Prop()
  topic: String;

  @Prop()
  img: Array<String>;

  @Prop()
  gps: gps;

  @Prop({ default: "รอตรวจสอบ" })
  status: string;

  @Prop({ default: 0 })
  Star: number;

  @Prop()
  Comment: string;

  @Prop()
  userID: string;

  @Prop({ default: "" })
  admin: string;
}

export const emergencySchema = SchemaFactory.createForClass(emergency);

@Schema()
export class appointment {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  day: String;

  @Prop()
  month: String;

  @Prop()
  year: String;

  @Prop()
  time: String;

  @Prop()
  type: String;

  @Prop()
  details: String;

  @Prop()
  topic: String;

  @Prop()
  img: Array<String>;

  @Prop()
  gps: gps;

  @Prop({ default: "รอตรวจสอบ" })
  status: string;

  @Prop({ default: 0 })
  Star: number;

  @Prop()
  Comment: string;

  @Prop()
  userID: string;

  @Prop({ default: "" })
  admin: string;
}

export const appointmentSchema = SchemaFactory.createForClass(appointment);

@Schema()
export class paresthesia {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  day: String;

  @Prop()
  month: String;

  @Prop()
  year: String;

  @Prop()
  time: String;

  @Prop()
  type: String;

  @Prop()
  details: String;

  @Prop()
  topic: String;

  @Prop()
  img: Array<String>;

  @Prop()
  gps: gps;

  @Prop({ default: "รอตรวจสอบ" })
  status: string;

  @Prop({ default: 0 })
  Star: number;

  @Prop()
  Comment: string;

  @Prop()
  userID: string;

  @Prop({ default: "" })
  admin: string;
}

export const paresthesiaSchema = SchemaFactory.createForClass(paresthesia);

@Schema()
export class Hydrotherapy {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  day: String;

  @Prop()
  month: String;

  @Prop()
  year: String;

  @Prop()
  time: String;

  @Prop()
  type: String;

  @Prop()
  details: String;

  @Prop()
  topic: String;

  @Prop()
  img: Array<String>;

  @Prop()
  gps: gps;

  @Prop({ default: "รอตรวจสอบ" })
  status: string;

  @Prop({ default: 0 })
  Star: number;

  @Prop()
  Comment: string;

  @Prop()
  userID: string;

  @Prop({ default: "" })
  admin: string;
}

export const HydrotherapySchema = SchemaFactory.createForClass(Hydrotherapy);

@Schema()
export class firesmart {

  @Prop()
  id: string;

  @Prop()
  created: string;

  @Prop()
  updated: String;

  @Prop()
  day: String;

  @Prop()
  month: String;

  @Prop()
  year: String;

  @Prop()
  time: String;

  @Prop()
  type: String;

  @Prop()
  details: String;

  @Prop()
  topic: String;

  @Prop()
  img: Array<String>;

  @Prop()
  gps: gps;

  @Prop({ default: "รอตรวจสอบ" })
  status: string;

  @Prop({ default: 0 })
  Star: number;

  @Prop()
  Comment: string;

  @Prop()
  userID: string;

  @Prop({ default: "" })
  admin_start: string;

  @Prop({ default: "" })
  admin_end: string;

  @Prop({ default: "" })
  edit: string;

  @Prop({ default: "" })
  end: string;

  @Prop({ default: "" })
  detail_edit: string;

  @Prop({ default: [] })
  add_img: Array<string>;

  @Prop({ default: "" })
  response_time: string;

  @Prop({ default: "" })
  response_message: string;
}

export const fireSchema = SchemaFactory.createForClass(firesmart);