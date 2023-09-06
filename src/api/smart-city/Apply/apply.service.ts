import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { applysmart } from './apply.schema';
import { CreateApplyDto } from 'src/dto/create';
import { TestRestponseType } from 'src/response/test.updateresponse';
import moment = require('moment-timezone');
import { IAccessApply } from 'src/database/accesscontrol.interface';
import { ClassConstants } from 'src/common/constants/class.constants';
import { UpdateApply } from 'src/dto/update';
import { searchApply } from 'src/interfaces/paginate';


@Injectable()
export class applyService {

  constructor(
    @InjectModel(applysmart.name) private readonly applyModel: Model<any>,

  ) { }

  async getApplyAll(): Promise<applysmart[]> {
    return this.applyModel.find().exec();
  }

  async addapply(body: CreateApplyDto): Promise<TestRestponseType> {

    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")

    var dataSave = null;

    if (body) {

      var data: IAccessApply = {

        id: body.id,
        created: body.created = timezone,
        updated: body.updated = timezone,
        type: body.type,
        details: body.details,
        topic: body.topic

      }
      dataSave = await this.applyModel.create(data);
    }

    throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  }

  async deleteApply(id: string): Promise<applysmart> {
    if (!id) {
      throw new HttpException(ClassConstants.ErrorMessage.ParamiterInvalid, HttpStatus.BAD_REQUEST);
    }
    return await this.applyModel.findOneAndDelete({ _id: id })
  }

  async editApply(id: string, user: UpdateApply): Promise<any> {

    var data = await this.applyModel.findOne({ _id: id });

    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    
    if (data) {
      data.updated = user.updated = timezone;
      data.type = user.type;
      data.details = user.details;
      data.topic = user.topic;

      data.save()
    }
    throw new HttpException("แก้ไขข้อมูลสำเร็จ ...", HttpStatus.OK)
  }

  async getPageApply(query: searchApply): Promise<any> {
    var comd: Object = new Object();
    if (query.topic) {
      comd['topic'] = { $regex: query.topic }
    }
    var datalimit = await this.applyModel.find(comd);
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
}