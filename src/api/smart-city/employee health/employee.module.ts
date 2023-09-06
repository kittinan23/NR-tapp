import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { appealsmart } from '../Appeal/appeal.schema';
import { diseaseSchema, diseasesmart } from '../disease/disease.schema';
import { UserSmartCity, UserSmartcitySchema } from '../user-smartcity/user.schema';
import { employeesmart, employeeSchema } from './employee.schema';
import { employeeService } from './employee.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: employeesmart.name, schema: employeeSchema },
      { name: diseasesmart.name, schema: diseaseSchema },
      { name: UserSmartCity.name, schema: UserSmartcitySchema },
    ])],
    
  providers: [employeeService],
  exports: [employeeService]
})
export class employeeModule { }