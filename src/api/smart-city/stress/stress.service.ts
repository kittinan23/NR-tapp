import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Createappeal, CreateApplyDto, CreatediseaseDto, CreatestressDto, CreatehealthDto } from 'src/dto/create';
import { TestRestponseType } from 'src/response/test.updateresponse';
import moment = require('moment-timezone');
import { IAccessAppeal, IAccessApply, IAccesscontrol, IAccessdisease, IAccesshappy, IAccesshealth, IAccessstress } from 'src/database/accesscontrol.interface';
import { ClassConstants } from 'src/common/constants/class.constants';
import { UpdateApply, UpdatediseaseDto, Updatehealth } from 'src/dto/update';
import { searchApply, searchUserdisease, searchUserHealth } from 'src/interfaces/paginate';
import { DataResponseuserIDdisease, DataResponseuserIDhealth, DataResponseuserIDstress, DataTestResponseType, ResponseuserID, ResponseuserIDdisease, ResponseuserIDhealth, ResponseuserIDstress, TestResponseApply, TestResponseType } from 'src/response/pagerespon';
import { appealsmart } from '../Appeal/appeal.schema';
import { stresssmart } from './stress.schema';


@Injectable()
export class stressService {

  constructor(
    @InjectModel(stresssmart.name) private readonly stressModel: Model<any>,
    // @InjectModel(appealsmart.name) private readonly appealModel: Model<any>,

  ) { }

  async getdiseaseAll(): Promise<stresssmart[]> {
    return this.stressModel.find().exec();
    //return this.catModel.find({firstname:/tiph/}).exec();
  }

  async addstress(body: CreatestressDto): Promise<any> {
    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    if (body) {
      var data: IAccessstress = {
        id: body.id,
        created: body.created = timezone,
        updated: body.updated = timezone,
        stress1: body.stress1,
        stress2: body.stress2,
        stress3: body.stress3,
        stress4: body.stress4,
        stress5: body.stress5,
        stress6: body.stress6,
        stress7: body.stress7,
        stress8: body.stress8,
        stress9: body.stress9,
        stress10: body.stress10,
        stress11: body.stress11,
        stress12: body.stress12,
        stress13: body.stress13,
        stress14: body.stress14,
        stress15: body.stress15,
        stress16: body.stress16,
        stress17: body.stress17,
        stress18: body.stress18,
        stress19: body.stress19,
        stress20: body.stress20,
        stress_total: body.stress_total,
        userID: body.userID
      }
      const row = await this.stressModel.countDocuments({ userID: body.userID })
      if(row<=0){
        await this.stressModel.create(data)
      }else{
        var edit = await this.stressModel.findOne({ userID: body.userID });
        if(edit){
          edit.updated  = timezone;
          edit.stress1 = body.stress1;
          edit.stress2 = body.stress2;
          edit.stress3 = body.stress3;
          edit.stress4 = body.stress4;
          edit.stress5 = body.stress5;
          edit.stress6 = body.stress6;
          edit.stress7 = body.stress7;
          edit.stress8 = body.stress8;
          edit.stress9 = body.stress9;
          edit.stress10 = body.stress10;
          edit.stress11 = body.stress11;
          edit.stress12 = body.stress12;
          edit.stress13 = body.stress13;
          edit.stress14 = body.stress14;
          edit.stress15 = body.stress15;
          edit.stress16 = body.stress16;
          edit.stress17 = body.stress17;
          edit.stress18 = body.stress18;
          edit.stress19 = body.stress19;
          edit.stress20 = body.stress20;
          edit.stress_total = body.stress_total;
          edit.userID = body.userID;

          edit.save()
        }
      }
    }
    throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  }
  // async addstressTotal(body: CreatestressAllDto): Promise<any> {
  //   var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
  //   if (body) {
  //     var data: IAccessstressAll = {
  //       id: body.id,
  //       created: body.created = timezone,
  //       updated: body.updated = timezone,
  //       stressTotal: body.stressTotal,
  //       userID: body.userID
  //     }
  //     const row = await this.stressModel.count({ userID: body.userID })
  //     if(row<=0){
  //       await this.stressModel.create(data)
  //     }else{
  //       var edit = await this.stressModel.findOne({ userID: body.userID });
  //       if(edit){
  //         edit.updated  = timezone;
  //         edit.stressTotal = body.stressTotal;
  //         edit.save()
  //       }
  //     }
  //   }
  //   throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  // }

  async deletehealth(id: string): Promise<stresssmart> {
    if (!id) {
      throw new HttpException(ClassConstants.ErrorMessage.ParamiterInvalid, HttpStatus.BAD_REQUEST);
    }
    return await this.stressModel.findOneAndDelete({ _id: id })
  }

  async getPageApply(query: searchApply): Promise<any> {
    var comd: Object = new Object();
    if (query.topic) {
      comd['topic'] = { $regex: query.topic }
    }
    var datalimit = await this.stressModel.find(comd);
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

    var res: ResponseuserIDstress = new ResponseuserIDstress();
    res.data = new Array<DataResponseuserIDstress>();

    var total = await this.stressModel.find(comd).countDocuments();
    res.total = total;

    var datalimit = await this.stressModel.find(comd);

    if (datalimit && datalimit.length > 0) {

      datalimit.forEach(data => {
        var dataOut: DataResponseuserIDstress = new DataResponseuserIDstress();

        dataOut._id = data._id;
        dataOut.created = data.created;
        dataOut.updated = data.updated;
        dataOut.stress1  = data.stress1;
        dataOut.stress2  = data.stress2;
        dataOut.stress3 = data.stress3;
        dataOut.stress4 = data.stress4;
        dataOut.stress5 = data.stress5;
        dataOut.stress6 = data.stress6;
        dataOut.stress7 = data.stress7;
        dataOut.stress8 = data.stress8;
        dataOut.stress9 = data.stress9;
        dataOut.stress10 = data.stress10;
        dataOut.stress11 = data.stress11;
        dataOut.stress12 = data.stress12;
        dataOut.stress13 = data.stress13;
        dataOut.stress14 = data.stress14;
        dataOut.stress15 = data.stress15;
        dataOut.stress16 = data.stress16;
        dataOut.stress17 = data.stress17;
        dataOut.stress18 = data.stress18;
        dataOut.stress19 = data.stress19;
        dataOut.stress20 = data.stress20;
        dataOut.userID = data.userID;

        res.data.push(dataOut);
      });
    }
    return res
  }
}