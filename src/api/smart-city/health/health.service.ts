import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { healthsmart } from './health.schema';
import { Createappeal, CreateApplyDto, CreatehealthDto } from 'src/dto/create';
import { TestRestponseType } from 'src/response/test.updateresponse';
import moment = require('moment-timezone');
import { IAccessAppeal, IAccessApply, IAccesscontrol, IAccesshealth } from 'src/database/accesscontrol.interface';
import { ClassConstants } from 'src/common/constants/class.constants';
import { UpdateApply, Updatehealth } from 'src/dto/update';
import { searchApply, searchHealthData, searchUserHealth } from 'src/interfaces/paginate';
import { DataResponseuserIDhealth, DataTestResponseType, ResponseuserID, ResponseuserIDhealth, TestResponseApply, TestResponseType } from 'src/response/pagerespon';
import { appealsmart } from '../Appeal/appeal.schema';
import { diseasesmart } from '../disease/disease.schema';
import { UserSmartCity } from '../user-smartcity/user.schema';
import { async } from 'rxjs';


@Injectable()
export class healthService {

  constructor(
    @InjectModel(healthsmart.name) private readonly healthModel: Model<any>,
    @InjectModel(diseasesmart.name) private readonly diseaseModel: Model<any>,
    @InjectModel(UserSmartCity.name) private readonly UserSmartModel: Model<any>,
    // @InjectModel(appealsmart.name) private readonly appealModel: Model<any>,

  ) { }

  async gethealthAll(): Promise<healthsmart[]> {
    return this.healthModel.find().exec();
    //return this.catModel.find({firstname:/tiph/}).exec();
  }

  async addhealth(body: CreatehealthDto): Promise<any> {

    // var hashpassword = await bcrypt.hash(body.password, 10);

    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    var timefirst = moment().tz("Asia/Bangkok").format("DD-MM-YYYY")

    var dataResponse: TestRestponseType = new TestRestponseType();

    var dataSave = null;

    if (body) {

      var data: IAccesshealth = {

        id: body.id,
        created: body.created = timezone,
        updated: body.updated = timezone,
        weight: body.weight,
        height: body.height,
        waistline: body.waistline,
        upper_blood1: body.upper_blood1,
        lower_blood1: body.lower_blood1,
        upper_blood2: body.upper_blood2,
        lower_blood2: body.lower_blood2,
        blood_sugar: body.blood_sugar,
        BMI: body.BMI,
        proportion: body.proportion,
        userID: body.userID
      }
      dataSave = await this.healthModel.create(data);
    }

    throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  }

  async deletehealth(id: string): Promise<healthsmart> {
    if (!id) {
      throw new HttpException(ClassConstants.ErrorMessage.ParamiterInvalid, HttpStatus.BAD_REQUEST);
    }
    return await this.healthModel.findOneAndDelete({ _id: id })
  }

  async edithealth(id: string, user: Updatehealth): Promise<any> {

    var data = await this.healthModel.findOne({ _id: id });

    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")

    // if (!data) {
    // throw new HttpExceptionFilter
    // }
    if (data) {
      data.updated = user.updated = timezone;
      data.weight = user.weight;
      data.height = user.height;
      data.waistline = user.waistline;
      data.upper_blood1 = user.upper_blood1;
      data.lower_blood1 = user.lower_blood1;
      data.upper_blood2 = user.upper_blood2;
      data.lower_blood2 = user.lower_blood2;
      data.blood_sugar = user.blood_sugar;

      data.save()
    }
    throw new HttpException("แก้ไขข้อมูลสำเร็จ ...", HttpStatus.OK)
  }

  async getPageApply(query: searchApply): Promise<any> {
    var comd: Object = new Object();
    if (query.topic) {
      comd['topic'] = { $regex: query.topic }
    }
    var datalimit = await this.healthModel.find(comd);
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

  async finddata(query: searchUserHealth): Promise<any> {

    // const skippedItems = (query.page - 1) * query.limit;

    var comd: Object = new Object();

    if (query.userID) {
      comd['userID'] = { $eq: query.userID }
    }

    var res: ResponseuserIDhealth = new ResponseuserIDhealth();
    res.data = new Array<DataResponseuserIDhealth>();

    var total = await this.healthModel.find(comd).countDocuments();
    res.total = total;

    var datalimit = await this.healthModel.find(comd);

    if (datalimit && datalimit.length > 0) {

      datalimit.forEach(data => {
        var dataOut: DataResponseuserIDhealth = new DataResponseuserIDhealth();

        dataOut._id = data._id;
        dataOut.created = data.created;
        dataOut.updated = data.updated;
        dataOut.weight = data.weight;
        dataOut.height = data.height;
        dataOut.waistline = data.waistline;
        dataOut.upper_blood1 = data.upper_blood1;
        dataOut.lower_blood1 = data.lower_blood1;
        dataOut.userID = data.userID;
        dataOut.upper_blood2 = data.upper_blood2;
        dataOut.lower_blood2 = data.lower_blood2;
        dataOut.blood_sugar = data.blood_sugar;
        dataOut.BMI = data.BMI;
        dataOut.proportion = data.proportion;
        dataOut.userID = data.userID;

        res.data.push(dataOut);
      });
    }

    return res
  }

  async getHealthData(query: searchHealthData): Promise<any> {
    var datas = []
    if (query.field === 'undefined' && query.keyword === 'undefined') {
      const users = JSON.parse(JSON.stringify(await this.UserSmartModel.find({})));
      for (var r = 0; r < users.length; r++) {
        let data = JSON.parse(JSON.stringify(await this.diseaseModel.findOne({ userID: users[r].userID })));
        if (data) {
          const add = {
            fullname: users[r].name + " " + users[r].lastname,
            birthday: data.day + " " + data.month + " " + data.year,
            sex: users[r].sex
          }
          data = Object.assign(add, data);
          datas.push(data)
        }
      }
      return datas
    }
    else if (query.field === 'undefined' || query.keyword === 'undefined') {
      throw new HttpException("", HttpStatus.BAD_REQUEST)
    }
    else if (query.field.length < 1 || query.keyword.length < 1) {
      throw new HttpException("", HttpStatus.BAD_REQUEST)
    }
    else {
      var field = query.field
      var keyword = query.keyword
      if (field !== "name" &&
        field !== 'elderly' &&
        field !== 'bedridden_patient' &&
        field !== 'handicapped') {
        var comd: Object = new Object();
        comd[field] = { $regex: keyword }
        datas = JSON.parse(JSON.stringify(await this.diseaseModel.find(comd)))
        for (var r = 0; r < datas.length; r++) {
          let user = JSON.parse(JSON.stringify(await this.UserSmartModel.findOne({ userID: datas[r].userID })));
          if (user) {
            const add = {
              fullname: user.name + " " + user.lastname,
              birthday: datas[r].day + " " + datas[r].month + " " + datas[r].year,
              sex: user.sex
            }
            datas[r] = Object.assign(add, datas[r]);
          }
        }
        return datas
      }
      else if (field !== "name") {
        var comd: Object = new Object();
        comd[field] = { $eq: keyword }
        datas = JSON.parse(JSON.stringify(await this.diseaseModel.find(comd)))
        for (var r = 0; r < datas.length; r++) {
          let user = JSON.parse(JSON.stringify(await this.UserSmartModel.findOne({ userID: datas[r].userID })));
          if (user) {
            const add = {
              fullname: user.name + " " + user.lastname,
              birthday: datas[r].day + " " + datas[r].month + " " + datas[r].year,
              sex: user.sex
            }
            datas[r] = Object.assign(add, datas[r]);
          }
        }
        return datas
      }
      else {
        datas = []
        var comd: Object = new Object();
        var users = JSON.parse(JSON.stringify(await this.UserSmartModel.find({
          $or: [
            { name: { $regex: keyword } },
            { lastname: { $regex: keyword } }
          ]
        })))
        for (var r = 0; r < users.length; r++) {
          var row = JSON.parse(JSON.stringify(await this.diseaseModel.findOne({ userID: users[r].userID })))
          if (row) {
            const add = {
              fullname: users[r].name + " " + users[r].lastname,
              birthday: row.day + " " + row.month + " " + row.year,
              sex: users[r].sex
            }
            row = Object.assign(add, row);
            datas.push(row)
          }
        }
        return datas
      }
    }
  }
}