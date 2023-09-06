import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  annoying, annoyingSchema, appealSchema, appealsmart, drainageditch, drainageditchSchema,
  education, educationSchema, electric, electricSchema, garbage, pension, fund,
  fundSchema, garbageSchema, other, otherSchema, plumbing, plumbingSchema, road,
  roadSchema, tree, treeSchema, pensionSchema, emergency, emergencySchema, appointment, appointmentSchema, paresthesia, paresthesiaSchema, Hydrotherapy, HydrotherapySchema, firesmart, fireSchema,
} from 'src/api/smart-city/Appeal/appeal.schema';
import { AdminSmartCity, AdminSmartCitySchema } from '../user-login/user.schema';
import { UserSmartCity, UserSmartcitySchema } from '../user-smartcity/user.schema';
import { appealService } from './appeal.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: appealsmart.name, schema: appealSchema },
      { name: electric.name, schema: electricSchema },
      { name: road.name, schema: roadSchema },
      { name: plumbing.name, schema: plumbingSchema },
      { name: tree.name, schema: treeSchema },
      { name: drainageditch.name, schema: drainageditchSchema },
      { name: annoying.name, schema: annoyingSchema },
      { name: garbage.name, schema: garbageSchema },
      { name: pension.name, schema: pensionSchema },
      { name: fund.name, schema: fundSchema },
      { name: education.name, schema: educationSchema },
      { name: other.name, schema: otherSchema },
      { name: emergency.name, schema: emergencySchema },
      { name: appointment.name, schema: appointmentSchema },
      { name: UserSmartCity.name, schema: UserSmartcitySchema },
      { name: AdminSmartCity.name, schema: AdminSmartCitySchema },
      { name: paresthesia.name, schema: paresthesiaSchema },
      { name: Hydrotherapy.name, schema: HydrotherapySchema },
      { name: firesmart.name, schema: fireSchema },
      
    ])],

  providers: [appealService],
  exports: [appealService]
})
export class AppealModule { }