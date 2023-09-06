import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { petitionSchema, petitionsmart } from './petition.schema';
import { petitionService } from './petition.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: petitionsmart.name, schema: petitionSchema }
    ])],
    
  providers: [petitionService],
  exports: [petitionService]
})
export class PetitionModule { }