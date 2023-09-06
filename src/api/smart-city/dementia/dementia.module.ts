import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { appealsmart } from '../Appeal/appeal.schema';
import { dementiaSchema, dementiasmart } from './dementia.schema';
import { dementiaService } from './dementia.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: dementiasmart.name, schema: dementiaSchema },
    ])],
    
  providers: [dementiaService],
  exports: [dementiaService]
})
export class dementiaModule { }