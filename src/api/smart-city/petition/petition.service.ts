import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Createappeal, CreateApplyDto, CreatePetition } from 'src/dto/create';
import { TestRestponseType } from 'src/response/test.updateresponse';
import moment = require('moment-timezone');
import { IAccessAppeal, IAccessApply, IAccesscontrol, IAccessPetition } from 'src/database/accesscontrol.interface';
import { ClassConstants } from 'src/common/constants/class.constants';
import { UpdateAppeal, UpdateApply, UpdatePetition } from 'src/dto/update';
import { searchApply, searchpetition } from 'src/interfaces/paginate';
import { DataTestResponseType, TestResponseApply, TestResponseType } from 'src/response/pagerespon';
import { petitionsmart } from './petition.schema';


@Injectable()
export class petitionService {

  constructor(
    @InjectModel(petitionsmart.name) private readonly petitionModel: Model<any>,

  ) { }

  async getApplyAll(): Promise<any[]> {
    return this.petitionModel.find().exec();
    //return this.catModel.find({firstname:/tiph/}).exec();
  }
  
  async getAppealAll(): Promise<petitionsmart[]> {
    return this.petitionModel.find().exec();
    //return this.catModel.find({firstname:/tiph/}).exec();
  }

  // async getApplyAll(type: String): Promise<applysmart[]> {
  //   return this.applyModel.find({
  //     type: type,
  //   });
  // }
  async addapply(body: CreateApplyDto): Promise<petitionsmart> {

    // var hashpassword = await bcrypt.hash(body.password, 10);

    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    var timefirst = moment().tz("Asia/Bangkok").format("DD-MM-YYYY")

    var dataResponse: TestRestponseType = new TestRestponseType();

    var dataSave = null;

    if (body) {

      var data: IAccessApply = {

        id: body.id,
        created: body.created = timezone,
        updated: body.updated = timezone,
        type: body.type,
        details: body.details,
        topic: body.topic



        // password: body.password = hashpassword,
      }
      dataSave = await this.petitionModel.create(data);
    }

    throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  }

  async addappeal(body: CreatePetition): Promise<petitionsmart> {

    // var hashpassword = await bcrypt.hash(body.password, 10);

    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    var timefirst = moment().tz("Asia/Bangkok").format("DD-MM-YYYY")

    var dataResponse: TestRestponseType = new TestRestponseType();

    var dataSave = null;

    if (body) {

      var data: IAccessPetition = {

        id: body.id,
        created: body.created = timezone,
        updated: body.updated = timezone,
        type: body.type,
        topic: body.topic



        // password: body.password = hashpassword,
      }
      dataSave = await this.petitionModel.create(data);
    }

    throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  }

  async deletepetition(id: string): Promise<petitionsmart> {
    if (!id) {
      throw new HttpException(ClassConstants.ErrorMessage.ParamiterInvalid, HttpStatus.BAD_REQUEST);
    }
    return await this.petitionModel.findOneAndDelete({ _id: id })
  }

  async editAppeal(id: string, user: UpdatePetition): Promise<any> {

    // var hashpassword = await bcrypt.hash(user.password, 10);

    var data = await this.petitionModel.findOne({ _id: id });

    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")

    // if (!data) {
    // throw new HttpExceptionFilter
    // }
    if (data) {
      data.updated = user.updated = timezone;
      data.topic = user.topic;
      data.type = user.type;

      data.save()
    }
    throw new HttpException("แก้ไขข้อมูลสำเร็จ ...", HttpStatus.OK)
  }
  async getPagepetition(query: searchpetition): Promise<any> {
    var comd: Object = new Object();
    if (query.topic) {
      comd['topic'] = { $regex: query.topic }
    }
    var datalimit = await this.petitionModel.find(comd);
    let type = []
    let topic = ""
    if (datalimit && datalimit.length > 0) {
      datalimit.forEach(data => {
        topic = data.topic
        type.push(data.type)
      });
    }
    return {
      topic: topic,
      type: type
    }
  }
}