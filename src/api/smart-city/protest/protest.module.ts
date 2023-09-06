import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { protestSchema, protestsmart } from './protest.schema';
import { protestService } from './protest.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: protestsmart.name, schema: protestSchema }
    ])],
    
  providers: [protestService],
  exports: [protestService]
})
export class protestModule { }