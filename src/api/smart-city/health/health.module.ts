import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { appealsmart } from '../Appeal/appeal.schema';
import { diseaseSchema, diseasesmart } from '../disease/disease.schema';
import { UserSmartCity, UserSmartcitySchema } from '../user-smartcity/user.schema';
import { healthsmart, healthSchema } from './health.schema';
import { healthService } from './health.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: healthsmart.name, schema: healthSchema },
      { name: diseasesmart.name, schema: diseaseSchema },
      { name: UserSmartCity.name, schema: UserSmartcitySchema },
    ])],
    
  providers: [healthService],
  exports: [healthService]
})
export class healthModule { }