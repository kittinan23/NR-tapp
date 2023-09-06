import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Createappeal, CreateApplyDto, CreatediseaseDto, CreatehappyDto, CreatehealthDto, CreateydementiaDto } from 'src/dto/create';
import { TestRestponseType } from 'src/response/test.updateresponse';
import moment = require('moment-timezone');
import { IAccessAppeal, IAccessApply, IAccesscontrol, IAccessdementia, IAccessdisease, IAccesshappy, IAccesshealth } from 'src/database/accesscontrol.interface';
import { ClassConstants } from 'src/common/constants/class.constants';
import { UpdateApply, UpdatediseaseDto, Updatehealth } from 'src/dto/update';
import { searchApply, searchUserdisease, searchUserHealth } from 'src/interfaces/paginate';
import { DataResponseuserIDdementia, DataResponseuserIDdisease, DataResponseuserIDhealth, DataTestResponseType, ResponseuserID, ResponseuserIDdementia, ResponseuserIDdisease, ResponseuserIDhappy, ResponseuserIDhealth, TestResponseApply, TestResponseType } from 'src/response/pagerespon';
import { appealsmart } from '../Appeal/appeal.schema';
import { dementiasmart } from './dementia.schema';


@Injectable()
export class dementiaService {

  constructor(
    @InjectModel(dementiasmart.name) private readonly dementiaModel: Model<any>,
    // @InjectModel(appealsmart.name) private readonly appealModel: Model<any>,

  ) { }

  async getdiseaseAll(): Promise<dementiasmart[]> {
    return this.dementiaModel.find().exec();
    //return this.catModel.find({firstname:/tiph/}).exec();
  }

  async addhealth(body: CreateydementiaDto): Promise<any> {
    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    if (body) {
      var data: IAccessdementia = {
        id: body.id,
        created: body.created = timezone,
        updated: body.updated = timezone,
        dementia1: body.dementia1,
        dementia2: body.dementia2,
        dementia3: body.dementia3,
        dementia4: body.dementia4,
        dementia5: body.dementia5,
        dementia6: body.dementia6,
        dementia7: body.dementia7,
        dementia8: body.dementia8,
        dementia9: body.dementia9,
        dementia10: body.dementia10,
        dementia11: body.dementia11,
        dementia12: body.dementia12,
        dementia13: body.dementia13,
        dementia14: body.dementia14,
        dementia_total: body.dementia_total,
        userID: body.userID
      }
      const row = await this.dementiaModel.countDocuments({ userID: body.userID })
      if(row<=0){
        await this.dementiaModel.create(data)
      }else{
        var edit = await this.dementiaModel.findOne({ userID: body.userID });
        if(edit){
          edit.updated  = timezone;
          edit.dementia1 = body.dementia1;
          edit.dementia2 = body.dementia2;
          edit.dementia3 = body.dementia3;
          edit.dementia4 = body.dementia4;
          edit.dementia5 = body.dementia5;
          edit.dementia6 = body.dementia6;
          edit.dementia7 = body.dementia7;
          edit.dementia8 = body.dementia8;
          edit.dementia9 = body.dementia9;
          edit.dementia10 = body.dementia10;
          edit.dementia11 = body.dementia11;
          edit.dementia12 = body.dementia12;
          edit.dementia13 = body.dementia13;
          edit.dementia14 = body.dementia14;
          edit.dementia_total = body.dementia_total;
          edit.userID = body.userID;
          
          edit.save()
        }
      }
    }
    throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  }
  // async adddementiaTotal(body: CreatedementiaAllDto): Promise<any> {
  //   var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
  //   if (body) {
  //     var data: IAccessdementiaAll = {
  //       id: body.id,
  //       created: body.created = timezone,
  //       updated: body.updated = timezone,
  //       dementiaTotal: body.dementiaTotal,
  //       userID: body.userID
  //     }
  //     const row = await this.dementiaModel.count({ userID: body.userID })
  //     if(row<=0){
  //       await this.dementiaModel.create(data)
  //     }else{
  //       var edit = await this.dementiaModel.findOne({ userID: body.userID });
  //       if(edit){
  //         edit.updated  = timezone;
  //         edit.dementiaTotal = body.dementiaTotal;
  //         edit.save()
  //       }
  //     }
  //   }
  //   throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  // }

  async deletehealth(id: string): Promise<dementiasmart> {
    if (!id) {
      throw new HttpException(ClassConstants.ErrorMessage.ParamiterInvalid, HttpStatus.BAD_REQUEST);
    }
    return await this.dementiaModel.findOneAndDelete({ _id: id })
  }

  async getPageApply(query: searchApply): Promise<any> {
    var comd: Object = new Object();
    if (query.topic) {
      comd['topic'] = { $regex: query.topic }
    }
    var datalimit = await this.dementiaModel.find(comd);
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

  async finddata(query:searchUserdisease): Promise<any> {

    // const skippedItems = (query.page - 1) * query.limit;

    var comd: Object = new Object();

    if (query.userID) {
      comd['userID'] = { $eq: query.userID }
    }

    var res: ResponseuserIDdementia = new ResponseuserIDdementia();
    res.data = new Array<DataResponseuserIDdementia>();

    var total = await this.dementiaModel.find(comd).countDocuments();
    res.total = total;

    var datalimit = await this.dementiaModel.find(comd);

    if (datalimit && datalimit.length > 0) {

      datalimit.forEach(data => {
        var dataOut: DataResponseuserIDdementia = new DataResponseuserIDdementia();

        dataOut._id = data._id;
        dataOut.created = data.created;
        dataOut.updated = data.updated;
        dataOut.dementia1  = data.dementia1;
        dataOut.dementia2  = data.dementia2;
        dataOut.dementia3 = data.dementia3;
        dataOut.dementia4 = data.dementia4;
        dataOut.dementia5 = data.dementia5;
        dataOut.dementia6 = data.dementia6;
        dataOut.dementia7 = data.dementia7;
        dataOut.dementia8 = data.dementia8;
        dataOut.dementia9 = data.dementia9;
        dataOut.dementia10 = data.dementia10;
        dataOut.dementia11 = data.dementia11;
        dataOut.dementia12 = data.dementia12;
        dataOut.dementia13 = data.dementia13;
        dataOut.dementia14 = data.dementia14;
        dataOut.userID = data.userID;

        res.data.push(dataOut);
      });
    }
    return res
  }
}