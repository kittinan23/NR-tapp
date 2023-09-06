import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { employeesmart } from './employee.schema';
import { Createappeal, CreateApplyDto, CreateemployeeDto, CreatehealthDto } from 'src/dto/create';
import { TestRestponseType } from 'src/response/test.updateresponse';
import moment = require('moment-timezone');
import { IAccessAppeal, IAccessApply, IAccesscontrol, IAccessemployee, IAccesshealth } from 'src/database/accesscontrol.interface';
import { ClassConstants } from 'src/common/constants/class.constants';
import { UpdateApply, Updatehealth } from 'src/dto/update';
import { searchApply, searchEmploy, searchHealthData, searchUserHealth } from 'src/interfaces/paginate';
import { DataResponseEmploy, DataResponseSmart, DataResponseuserIDhealth, DataTestResponseType, ResponseEmploy, ResponseSmart, ResponseuserID, ResponseuserIDhealth, TestResponseApply, TestResponseType } from 'src/response/pagerespon';
import { appealsmart } from '../Appeal/appeal.schema';
import { diseasesmart } from '../disease/disease.schema';
import { UserSmartCity } from '../user-smartcity/user.schema';
import { async } from 'rxjs';


@Injectable()
export class employeeService {

  constructor(
    @InjectModel(employeesmart.name) private readonly employeeModel: Model<any>,
    @InjectModel(diseasesmart.name) private readonly diseaseModel: Model<any>,
    @InjectModel(UserSmartCity.name) private readonly UserSmartModel: Model<any>,
    // @InjectModel(appealsmart.name) private readonly appealModel: Model<any>,

  ) { }

  async getemployeeAll(): Promise<employeesmart[]> {
    return this.employeeModel.find().exec();
    //return this.catModel.find({firstname:/tiph/}).exec();
  }

  async addemployee(body: CreateemployeeDto): Promise<any> {

    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")

    var dataSave = null;

    if (body) {

      var data: IAccessemployee = {

        id: body.id,
        created: body.created = timezone,
        updated: body.updated = timezone,
        affiliation: body.affiliation,
        position: body.position,
        division: body.division,
        cotton: body.cotton,
        prefix: body.prefix,
        Employmenttype: body.Employmenttype,
        hospital: body.hospital,
        name: body.name,
        lastname: body.lastname,
        IDcard: body.IDcard,
        nickname: body.nickname,
        status: body.status,
        tel: body.tel,
        address: body.address,
        treatmentrights: body.treatmentrights,
        treatmentrights99: body.treatmentrights99,
        covid12: body.covid12,
        sex: body.sex,
        age: body.age,
        weight: body.weight,
        height: body.height,
        BMI: body.BMI,
        proportion: body.proportion,
        waistline: body.waistline,
        congenital_disease: body.congenital_disease,
        other_congenital_disease: body.other_congenital_disease,
        sick: body.sick,
        other_sick: body.other_sick,
        accident: body.accident,
        other_accident: body.other_accident,
        job_position: body.job_position,
        job99: body.job99,
        working_life: body.working_life,
        hours_work: body.hours_work,
        day_work: body.day_work,
        department: body.department,
        ot: body.ot,
        eating_behavior1: body.eating_behavior1,
        eating_behavior2: body.eating_behavior2,
        eating_behavior3: body.eating_behavior3,
        drinking_alcohol1: body.drinking_alcohol1,
        drinking_alcohol2: body.drinking_alcohol2,
        smoke_often1: body.smoke_often1,
        smoke_often2: body.smoke_often2,
        exercise1: body.exercise1,
        exercise2: body.exercise2,
        exercise3: body.exercise3,
        exercise4: body.exercise4,
        covid1: body.covid1,
        covid2: body.covid2,
        Strain1: body.Strain1,
        Strain2: body.Strain2,
        Strain3: body.Strain3,
        Strain4: body.Strain4,
        Strain5: body.Strain5,
        Strain6: body.Strain6,
        Strain7: body.Strain7,
        Strain8: body.Strain8,
        Strain9: body.Strain9,
        Strain10: body.Strain10,
        Strain11: body.Strain11,
        Strain12: body.Strain12,
        Strain13: body.Strain13,
        Strain14: body.Strain14,
        Strain15: body.Strain15,
        Strain16: body.Strain16,
        Strain17: body.Strain17,
        Strain18: body.Strain18,
        Strain19: body.Strain19,
        Strain20: body.Strain20,
        debt_information: body.debt_information,
        happy1: body.happy1,
        happy2: body.happy2,
        happy3: body.happy3,
        happy4: body.happy4,
        happy5: body.happy5,
        happy6: body.happy6,
        happy7: body.happy7,
        happy8: body.happy8,
        happy9: body.happy9,
        happy10: body.happy10,
        happy11: body.happy11,
        happy12: body.happy12,
        happy13: body.happy13,
        happy14: body.happy14,
        happy15: body.happy15,
        memory1: body.memory1,
        memory2: body.memory2,
        memory3: body.memory3,
        memory4: body.memory4,
        memory5: body.memory5,
        memory6: body.memory6,
        memory7: body.memory7,
        memory8: body.memory8,
        memory9: body.memory9,
        memory10: body.memory10,
        memory11: body.memory11,
        memory12: body.memory12,
        memory13: body.memory13,
        memory14: body.memory4,
        sumHappy: body.sumHappy,
        sumMemory: body.sumMemory,
        sumStrain: body.sumStrain,

        userID: body.userID,

      }
      dataSave = await this.employeeModel.create(data);
    }

    throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  }

  async deletehealth(id: string): Promise<employeesmart> {
    if (!id) {
      throw new HttpException(ClassConstants.ErrorMessage.ParamiterInvalid, HttpStatus.BAD_REQUEST);
    }
    return await this.employeeModel.findOneAndDelete({ _id: id })
  }

  async getPageEmploy(query: searchEmploy): Promise<any> {
    var comd: Object = new Object();

    if (query.affiliation) {
      comd['affiliation'] = { $eq: query.affiliation }
    }
    if (query.division) {
      comd['division'] = { $regex: query.division }
    }

    var res: ResponseEmploy = new ResponseEmploy();
    res.data = new Array<DataResponseEmploy>();

    var total = await this.employeeModel.find(comd).countDocuments();
    res.total = total;

    var datalimit = await this.employeeModel.find(comd)

    if (datalimit && datalimit.length > 0) {

      datalimit.forEach(data => {
        var dataOut: DataResponseEmploy = new DataResponseEmploy();

        dataOut._id = data._id;
        dataOut.created = data.created;
        dataOut.updated = data.updated;
        dataOut.prefix = data.prefix;
        dataOut.name = data.name;
        dataOut.lastname = data.lastname;
        dataOut.affiliation = data.affiliation;
        dataOut.position = data.position;
        dataOut.division = data.division;
        dataOut.cotton = data.cotton;
        dataOut.userID = data.userID;

        res.data.push(dataOut);
      });
    }

    return res
  }
}
