import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userCovid, CatSchema } from './user.schema';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: userCovid.name, schema: CatSchema },
    ])],

  providers: [UserService],
  exports: [UserService]
})
export class userModule { }