import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Createappeal, CreateApplyDto, CreatePetition, CreateProtest } from 'src/dto/create';
import { TestRestponseType } from 'src/response/test.updateresponse';
import moment = require('moment-timezone');
import { IAccessAppeal, IAccessApply, IAccesscontrol, IAccessPetition, IAccessProtest } from 'src/database/accesscontrol.interface';
import { ClassConstants } from 'src/common/constants/class.constants';
import { UpdateAppeal, UpdateApply, UpdatePetition, UpdateProtest } from 'src/dto/update';
import { searchApply, searchpetition, searchProtest, searchUser } from 'src/interfaces/paginate';
import { DataResponseuserIDprotest, DataTestResponseType, ResponseuserID, ResponseuserIDprotest, TestResponseApply, TestResponseType } from 'src/response/pagerespon';
import { protestsmart } from './protest.schema';


@Injectable()
export class protestService {

  constructor(
    @InjectModel(protestsmart.name) private readonly protestModel: Model<any>,

  ) { }

  async getAppealAll(): Promise<protestsmart[]> {
    return this.protestModel.find().exec();
  }

  async addappeal(body: CreateProtest): Promise<protestsmart> {

    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")

    var dataSave = null;

    if (body) {

      var data: IAccessProtest = {

        id: body.id,
        created: body.created = timezone,
        updated: body.updated = timezone,
        type: body.type,
        topic: body.topic,
        name: body.name,
        userID: body.userID
      }
      dataSave = await this.protestModel.create(data);
    }

    throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  }

  async deletepetition(id: string): Promise<protestsmart> {
    if (!id) {
      throw new HttpException(ClassConstants.ErrorMessage.ParamiterInvalid, HttpStatus.BAD_REQUEST);
    }
    return await this.protestModel.findOneAndDelete({ _id: id })
  }

  async editAppeal(id: string, user: UpdateProtest): Promise<any> {

    var data = await this.protestModel.findOne({ _id: id });

    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")

    if (data) {
      data.updated = user.updated = timezone;
      data.topic = user.topic;
      data.type = user.type;
      data.name = user.name;
      data.status = user.status;

      data.save()
    }
    throw new HttpException("แก้ไขข้อมูลสำเร็จ ...", HttpStatus.OK)
  }

  async finddata(query: searchProtest): Promise<any> {

    var comd: Object = new Object();

    if (query.userID) {
      comd['userID'] = { $eq: query.userID }
    }

    var res: ResponseuserIDprotest = new ResponseuserIDprotest();
    res.data = new Array<DataResponseuserIDprotest>();

    var total = await this.protestModel.find(comd).countDocuments();
    res.total = total;

    var datalimit = await this.protestModel.find(comd);

    if (datalimit && datalimit.length > 0) {

      datalimit.forEach(data => {
        var dataOut: DataResponseuserIDprotest = new DataResponseuserIDprotest();

        dataOut._id = data._id;
        dataOut.created = data.created;
        dataOut.updated = data.updated;
        dataOut.status = data.status;
        dataOut.type = data.type;
        dataOut.name = data.name;
        dataOut.topic = data.topic;
        dataOut.userID = data.userID;

        res.data.push(dataOut);
      });
    }
    return res
  }
}
