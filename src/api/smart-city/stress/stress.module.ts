import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { appealsmart } from '../Appeal/appeal.schema';
import { stressSchema, stresssmart } from './stress.schema';
import { stressService } from './stress.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: stresssmart.name, schema: stressSchema },
    ])],
    
  providers: [stressService],
  exports: [stressService]
})
export class stressModule { }