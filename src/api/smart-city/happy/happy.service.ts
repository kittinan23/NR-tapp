import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Createappeal, CreateApplyDto, CreatediseaseDto, CreatehappyAllDto, CreatehappyDto, CreatehealthDto } from 'src/dto/create';
import { TestRestponseType } from 'src/response/test.updateresponse';
import moment = require('moment-timezone');
import { IAccessAppeal, IAccessApply, IAccesscontrol, IAccessdisease, IAccesshappy, IAccesshappyAll, IAccesshealth } from 'src/database/accesscontrol.interface';
import { ClassConstants } from 'src/common/constants/class.constants';
import { UpdateApply, UpdatediseaseDto, Updatehealth } from 'src/dto/update';
import { searchApply, searchUserdisease, searchUserHealth } from 'src/interfaces/paginate';
import { DataResponseuserIDdisease, DataResponseuserIDhappy, DataResponseuserIDhealth, DataTestResponseType, ResponseuserID, ResponseuserIDdisease, ResponseuserIDhappy, ResponseuserIDhealth, TestResponseApply, TestResponseType } from 'src/response/pagerespon';
import { appealsmart } from '../Appeal/appeal.schema';
import { happysmart } from './happy.schema';


@Injectable()
export class happyService {

  constructor(
    @InjectModel(happysmart.name) private readonly happyModel: Model<any>,
    // @InjectModel(appealsmart.name) private readonly appealModel: Model<any>,

  ) { }

  async getdiseaseAll(): Promise<happysmart[]> {
    return this.happyModel.find().exec();
    //return this.catModel.find({firstname:/tiph/}).exec();
  }

  async addhealth(body: CreatehappyDto): Promise<any> {
    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    if (body) {
      var data: IAccesshappy = {
        id: body.id,
        created: body.created = timezone,
        updated: body.updated = timezone,
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
        happy_total: body.happy_total,
        userID: body.userID
      }
      const row = await this.happyModel.countDocuments({ userID: body.userID })
      if (row <= 0) {
        await this.happyModel.create(data)
      } else {
        var edit = await this.happyModel.findOne({ userID: body.userID });
        if (edit) {
          edit.updated = timezone;
          edit.happy1 = body.happy1;
          edit.happy2 = body.happy2;
          edit.happy3 = body.happy3;
          edit.happy4 = body.happy4;
          edit.happy5 = body.happy5;
          edit.happy6 = body.happy6;
          edit.happy7 = body.happy7;
          edit.happy8 = body.happy8;
          edit.happy9 = body.happy9;
          edit.happy10 = body.happy10;
          edit.happy11 = body.happy11;
          edit.happy12 = body.happy12;
          edit.happy13 = body.happy13;
          edit.happy14 = body.happy14;
          edit.happy15 = body.happy15;
          edit.happy_total = body.happy_total;
          edit.userID = body.userID;

          edit.save()
        }
      }
    }
    throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  }
  async addhappyTotal(body: CreatehappyAllDto): Promise<any> {
    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    if (body) {
      var data: IAccesshappyAll = {
        id: body.id,
        created: body.created = timezone,
        updated: body.updated = timezone,
        happyTotal: body.happyTotal,
        userID: body.userID
      }
      const row = await this.happyModel.countDocuments({ userID: body.userID })
      if(row<=0){
        await this.happyModel.create(data)
      }else{
        var edit = await this.happyModel.findOne({ userID: body.userID });
        if(edit){
          edit.updated  = timezone;
          edit.happyTotal = body.happyTotal;
          edit.save()
        }
      }
    }
    throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  }

  async deletehealth(id: string): Promise<happysmart> {
    if (!id) {
      throw new HttpException(ClassConstants.ErrorMessage.ParamiterInvalid, HttpStatus.BAD_REQUEST);
    }
    return await this.happyModel.findOneAndDelete({ _id: id })
  }

  async getPageApply(query: searchApply): Promise<any> {
    var comd: Object = new Object();
    if (query.topic) {
      comd['topic'] = { $regex: query.topic }
    }
    var datalimit = await this.happyModel.find(comd);
    let details = []
    let type = ""
    if (datalimit && datalimit.length > 0) {
      datalimit.forEach(data => {
        type = data.type
        details.push(data.details)
      });
    }
    return {
      type: type,
      details: details
    }
  }

  async finddata(query: searchUserdisease): Promise<any> {

    // const skippedItems = (query.page - 1) * query.limit;

    var comd: Object = new Object();

    if (query.userID) {
      comd['userID'] = { $eq: query.userID }
    }

    var res: ResponseuserIDhappy = new ResponseuserIDhappy();
    res.data = new Array<DataResponseuserIDhappy>();

    var total = await this.happyModel.find(comd).countDocuments();
    res.total = total;

    var datalimit = await this.happyModel.find(comd);

    if (datalimit && datalimit.length > 0) {

      datalimit.forEach(data => {
        var dataOut: DataResponseuserIDhappy = new DataResponseuserIDhappy();

        dataOut._id = data._id;
        dataOut.created = data.created;
        dataOut.updated = data.updated;
        dataOut.happy1 = data.happy1;
        dataOut.happy2 = data.happy2;
        dataOut.happy3 = data.happy3;
        dataOut.happy4 = data.happy4;
        dataOut.happy5 = data.happy5;
        dataOut.happy6 = data.happy6;
        dataOut.happy7 = data.happy7;
        dataOut.happy8 = data.happy8;
        dataOut.happy9 = data.happy9;
        dataOut.happy10 = data.happy10;
        dataOut.happy11 = data.happy11;
        dataOut.happy12 = data.happy12;
        dataOut.happy13 = data.happy13;
        dataOut.happy14 = data.happy14;
        dataOut.happy15 = data.happy15;
        dataOut.userID = data.userID;

        res.data.push(dataOut);
      });
    }
    return res
  }
}