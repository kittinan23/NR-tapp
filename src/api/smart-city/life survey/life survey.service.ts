import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {  lifesurveysmart } from './life survey.schema';
import { Createappeal, CreateApplyDto, CreateemployeeDto, CreatehealthDto, CreatelifesurveyDto } from 'src/dto/create';
import { TestRestponseType } from 'src/response/test.updateresponse';
import moment = require('moment-timezone');
import { IAccessAppeal, IAccessApply, IAccesscontrol, IAccessemployee, IAccesshealth, IAccesslifesurvey } from 'src/database/accesscontrol.interface';
import { ClassConstants } from 'src/common/constants/class.constants';
import { UpdateApply, Updatehealth } from 'src/dto/update';
import { searchApply, searchEmploy, searchHealthData, searchUserHealth } from 'src/interfaces/paginate';
import { DataResponseEmploy, DataResponseSmart, DataResponseuserIDhealth, DataTestResponseType, ResponseEmploy, ResponseSmart, ResponseuserID, ResponseuserIDhealth, TestResponseApply, TestResponseType } from 'src/response/pagerespon';
import { appealsmart } from '../Appeal/appeal.schema';
import { diseasesmart } from '../disease/disease.schema';
import { UserSmartCity } from '../user-smartcity/user.schema';
import { async } from 'rxjs';


@Injectable()
export class lifesurveyService {

  constructor(
    @InjectModel(lifesurveysmart.name) private readonly lifesurveyModel: Model<any>,
    @InjectModel(diseasesmart.name) private readonly diseaseModel: Model<any>,
    @InjectModel(UserSmartCity.name) private readonly UserSmartModel: Model<any>,
    // @InjectModel(appealsmart.name) private readonly appealModel: Model<any>,

  ) { }

  async getlifesurveyAll(): Promise<lifesurveysmart[]> {
    return this.lifesurveyModel.find().exec();
    //return this.catModel.find({firstname:/tiph/}).exec();
  }

  async addlifesurvey(body: CreatelifesurveyDto): Promise<any> {

    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")

    var dataSave = null;

    if (body) {

      var data: IAccesslifesurvey = {

        id: body.id,
        created: body.created = timezone,
        updated: body.updated = timezone,
        sex: body.sex,
        age: body.age,
        religion: body.religion,
        parent: body.parent,
        timemonth: body.timemonth,
        education: body.education,
        living: body.living,
        identity1: body.identity1,
        identity2: body.identity2,
        identity3: body.identity3,
        identity4: body.identity4,
        identity5: body.identity5,
        identity6: body.identity6,
        identity7: body.identity7,
        identity8: body.identity8,
        identity9: body.identity9,
        identity10: body.identity10,
        identity11: body.identity11,
        identity12: body.identity12,
        identity13: body.identity13,
        identity14: body.identity14,
        identity15: body.identity15,
        family16: body.family16,
        family17: body.family17,
        family18: body.family18,
        family19: body.family23,
        family20: body.family23,
        family21: body.family23,
        family22: body.family23,
        family23: body.family23,
        intellect24: body.intellect24,
        intellect25: body.intellect25,
        intellect26: body.intellect26,
        intellect27: body.intellect27,
        intellect28: body.intellect28,
        intellect29: body.intellect29,
        intellect30: body.intellect30,
        intellect31: body.intellect31,
        intellect32: body.intellect32,
        intellect33: body.intellect33,
        intellect34: body.intellect34,
        friend35: body.friend35,
        friend36: body.friend36,
        friend37: body.friend37,
        friend38: body.friend38,
        friend39: body.friend39,
        friend40: body.friend40,
        community41: body.community41,
        community42: body.community42,
        community43: body.community43,
        community44: body.community44,
        community45: body.community45,
        community46: body.community46,
        community47: body.community47,
        community48: body.community48,
        sumidentity: body.sumidentity,
        sumfamily: body.sumfamily,
        sumintellect: body.sumintellect,
        sumfriend: body.sumfriend,
        sumcommunity: body.sumcommunity,

        userID: body.userID,

      }
      dataSave = await this.lifesurveyModel.create(data);
    }

    throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  }

  async deletelifesurvey(id: string): Promise<lifesurveysmart> {
    if (!id) {
      throw new HttpException(ClassConstants.ErrorMessage.ParamiterInvalid, HttpStatus.BAD_REQUEST);
    }
    return await this.lifesurveyModel.findOneAndDelete({ _id: id })
  }

  async getPagelifesurvey(query: searchEmploy): Promise<any> {
    var comd: Object = new Object();

    if (query.affiliation) {
      comd['affiliation'] = { $eq: query.affiliation }
    }
    if (query.division) {
      comd['division'] = { $regex: query.division }
    }

    var res: ResponseEmploy = new ResponseEmploy();
    res.data = new Array<DataResponseEmploy>();

    var total = await this.lifesurveyModel.find(comd).countDocuments();
    res.total = total;

    var datalimit = await this.lifesurveyModel.find(comd)

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
