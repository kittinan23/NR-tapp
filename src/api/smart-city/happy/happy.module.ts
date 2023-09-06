import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { appealsmart } from '../Appeal/appeal.schema';
import { happySchema, happysmart } from './happy.schema';
import { happyService } from './happy.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: happysmart.name, schema: happySchema },
    ])],
    
  providers: [happyService],
  exports: [happyService]
})
export class happyModule { }