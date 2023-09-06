import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { appealsmart } from '../Appeal/appeal.schema';
import { diseaseSchema, diseasesmart } from './disease.schema';
import { diseaseService } from './disease.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: diseasesmart.name, schema: diseaseSchema },
    ])],
    
  providers: [diseaseService],
  exports: [diseaseService]
})
export class diseaseModule { }