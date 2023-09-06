import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { pakpoonUser, CatSchema } from './member.schema';
import { MembersService } from './member.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: pakpoonUser.name, schema: CatSchema },
    ])],

  providers: [MembersService],
  exports: [MembersService]
})
export class CatsModule { }