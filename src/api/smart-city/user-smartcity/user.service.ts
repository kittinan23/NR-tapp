import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto, CreateUserSmart } from 'src/dto/create';
import { UserSmartCity } from './user.schema';
import { UpdateUser } from 'src/dto/update';
import { IAccesscontrol, IUserSmart } from 'src/database/accesscontrol.interface';
import { TestRestponseType } from 'src/response/test.updateresponse';
import { DataResponseSmart, DataResponseuserIDApply, ResponseSmart, ResponseuserIDApply, TestResponseType } from 'src/response/pagerespon';
import { Paginate, searchDataSmart, searchuserID, searchuserIDApply } from 'src/interfaces/paginate';
// import { HttpExceptionFilter } from 'src/common/http-exception.filter';
import moment = require('moment-timezone');
import * as bcrypt from 'bcryptjs';
import { HttpExceptionFilter } from 'src/common/pipes/http-exception.filter';
import { ClassConstants } from 'src/common/constants/class.constants';
import { ok } from 'assert';
import axios from 'axios';

@Injectable()
export class userSmartService {

  constructor(
    @InjectModel(UserSmartCity.name) private readonly UserSmartModel: Model<any>,

  ) { }

  async putUpdatemember(id: string, user: UpdateUser): Promise<UserSmartCity> {

    var data = await this.UserSmartModel.findOne({ _id: id });

    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")

    if (data) {
      data.updated = user.updated = timezone;
      data.bednumber = user.bednumber;
      data.prefix = user.prefix;
      data.floor = user.floor;
      data.room = user.room;
      data.bednumber = user.bednumber;
      data.firstname = user.firstname;
      data.lastname = user.lastname;
      data.idcard = user.idcard;
      data.birthday = user.birthday;
      data.age = user.age;
      data.sex = user.sex;
      data.occupation = user.occupation;
      data.tel = user.tel;
      data.firstday = user.firstday;
      data.lastday = user.lastday;
      data.status = user.status;
      data.temperature = user.temperature;
      data.upperpressure = user.upperpressure;
      data.lowerpressure = user.lowerpressure;
      data.bloodoxygen = user.bloodoxygen;
      data.pulse = user.pulse;
      data.bloodsugar = user.bloodsugar;
      data.note = user.note;

      data.save()
    }
    throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  }
  async deleteMember(id: string): Promise<UserSmartCity> {
    if (!id) {
      throw new HttpException(ClassConstants.ErrorMessage.ParamiterInvalid, HttpStatus.BAD_REQUEST);
    }
    return await this.UserSmartModel.findOneAndDelete({ _id: id })
  }

  // async getMemberAll(): Promise<UserSmartCity[]> {
  //   return this.UserSmartModel.find().exec();
  //   //return this.catModel.find({firstname:/tiph/}).exec();
  // }
  async getMemberCount(): Promise<number> {
    const members = await this.UserSmartModel.find().exec();
    return members.length;
}


  async getUserbyid(id: String): Promise<UserSmartCity[]> {
    return this.UserSmartModel.findById({
      _id: id,
    });
  }
  async postSaveMember(body: CreateUserSmart): Promise<any> {

    // var hashpassword = await bcrypt.hash(body.password, 10);

    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    var timefirst = moment().tz("Asia/Bangkok").format("DD-MM-YYYY")

    var dataResponse: TestRestponseType = new TestRestponseType();

    var dataSave = null;

    if (body) {

      var data: IUserSmart = {

        id: body.id,
        created: body.created = timezone,
        updated: body.updated = timezone,
        prefix: body.prefix,
        name: body.name,
        lastname: body.lastname,
        sex: body.sex,
        blood:body.blood,
        telephone: body.telephone,
        housenumber: body.housenumber,
        group: body.group,
        alley: body.alley,
        road: body.road,
        province: body.province,
        district: body.district,
        sub_district: body.sub_district,
        zipcode: body.zipcode,
        userID: body.userID
      }
      dataSave = await this.UserSmartModel.create(data);
    }

    throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)


  }

  async getPageMember(query: searchDataSmart): Promise<any> {

    // const skippedItems = (query.page - 1) * query.limit;

    var comd: Object = new Object();

    if (query.province) {
      comd['province'] = { $regex: query.province }
    }
    if (query.district) {
      comd['district'] = { $regex: query.district }
    }
    if (query.sub_district) {
      comd['sub_district'] = { $regex: query.sub_district }
    }

    var res: ResponseSmart = new ResponseSmart();
    res.data = new Array<DataResponseSmart>();

    var total = await this.UserSmartModel.find(comd).countDocuments();
    res.total = total;

    var datalimit = await this.UserSmartModel.find(comd)

    if (datalimit && datalimit.length > 0) {

      datalimit.forEach(data => {
        var dataOut: DataResponseSmart = new DataResponseSmart();

        dataOut._id = data._id;
        dataOut.created = data.created;
        dataOut.updated = data.updated;
        dataOut.prefix = data.prefix;
        dataOut.name = data.name;
        dataOut.lastname = data.lastname;
        dataOut.sex = data.sex;
        dataOut.telephone = data.telephone;
        dataOut.housenumber = data.housenumber;
        dataOut.group = data.group;
        dataOut.alley = data.alley;
        dataOut.road = data.road;
        dataOut.province = data.province;
        dataOut.district = data.district;
        dataOut.sub_district = data.sub_district;
        dataOut.zipcode = data.zipcode;
        dataOut.userID = data.userID;

        res.data.push(dataOut);
      });
    }

    return res
  }

  async getPageUserID(query: searchuserIDApply): Promise<any> {
    var comd: Object = new Object();
    if (query.userID) {
      comd['userID'] = { $regex: query.userID }
    }
    var userData = JSON.parse(JSON.stringify(await this.UserSmartModel.findOne(comd)))
    var url = "https://api.line.me/v2/bot/profile/" + query.userID
    var userData_line = await (await axios.get(url, {
      headers: {
        Authorization: 'Bearer Wtk1WxYxsr35LWFidG7buMdIGgoxvlVy3EoGHhUC+hT/53pNYVvCVGGmKH9JW0Y+PsNl0nqpP0OhNriqicCzPyCg7bV2Mu2H8QMWmslHjj6MSBCQJ58fdD2TGME1EPlFu9dm2TZ28BWyP16WCb59/AdB04t89/1O/w1cDnyilFU='
      }
    })).data
    return { ...userData, ...userData_line }
  }

  async getByEmail(email: string): Promise<any> {
    const user = await this.UserSmartModel.findOne({ email: email });
    return user;
  }

  async getUserID(query: searchuserID): Promise<any> {
    if (query.userID) {
      var data = await this.UserSmartModel.countDocuments({
        userID: query.userID,
      });
      if (data <= 0) {
        throw new HttpException(null, HttpStatus.NOT_FOUND);
      }
    }
    throw new HttpException(null, HttpStatus.OK)
  }
}

  // async findAge(age: string): Promise<TestKeyRes[]> {

  //   return await this.catModel.find({ age:  {$eq:age}});

  // }

// async finddata(): Promise<Cat[]> {
//   return this.catModel.find({name : {$eq:"Kittinan"}}).exec();

// }
