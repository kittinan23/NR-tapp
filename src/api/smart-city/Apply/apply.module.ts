import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { applysmart, ApplySchema } from './apply.schema';
import { applyService } from './apply.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: applysmart.name, schema: ApplySchema },
    ])],
    
  providers: [applyService],
  exports: [applyService]
})
export class ApplyModule { }