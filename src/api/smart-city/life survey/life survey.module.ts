import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { appealsmart } from '../Appeal/appeal.schema';
import { diseaseSchema, diseasesmart } from '../disease/disease.schema';
import { UserSmartCity, UserSmartcitySchema } from '../user-smartcity/user.schema';
import {  lifesurveySchema, lifesurveysmart } from './life survey.schema';
import { lifesurveyService } from './life survey.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: lifesurveysmart.name, schema: lifesurveySchema },
      { name: diseasesmart.name, schema: diseaseSchema },
      { name: UserSmartCity.name, schema: UserSmartcitySchema },
    ])],
    
  providers: [lifesurveyService],
  exports: [lifesurveyService]
})
export class lifesurveyModule { }