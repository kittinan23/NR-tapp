import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAdminSmart, CreateUserDto, CreateUserSmart } from 'src/dto/create';
import { AdminSmartCity } from './user.schema';
import { UpdateUser, UpdateUserAdmin } from 'src/dto/update';
import { IAccesscontrol, IAdminSmart, IUserSmart } from 'src/database/accesscontrol.interface';
import { TestRestponseType } from 'src/response/test.updateresponse';
import { DataTestResponseType, TestResponseType } from 'src/response/pagerespon';
import { Paginate } from 'src/interfaces/paginate';
// import { HttpExceptionFilter } from 'src/common/http-exception.filter';
import moment = require('moment-timezone');
import * as bcrypt from 'bcryptjs';
import { HttpExceptionFilter } from 'src/common/pipes/http-exception.filter';
import { ClassConstants } from 'src/common/constants/class.constants';

@Injectable()
export class adminService {

  constructor(
    @InjectModel(AdminSmartCity.name) private readonly AdminSmartModel: Model<any>,

  ) { }

  async putUpdatemember(id: string, user: UpdateUser): Promise<AdminSmartCity> {

    var data = await this.AdminSmartModel.findOne({ _id: id });

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

  async putUpdateAdmin(id: string, user: UpdateUserAdmin): Promise<any> {

    var hashpassword = await bcrypt.hash(user.password, 10);

    var data = await this.AdminSmartModel.findOne({ _id: id });

    if (data) {
      data.userid = user.userid ;
      data.password = user.password=hashpassword;

      data.save()
    }
    throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  }
  async deleteMember(id: string): Promise<AdminSmartCity> {
    if (!id) {
      throw new HttpException(ClassConstants.ErrorMessage.ParamiterInvalid, HttpStatus.BAD_REQUEST);
  }
    return await this.AdminSmartModel.findOneAndDelete({ _id: id })
  }

  async getMemberAll(): Promise<AdminSmartCity[]> {
    return this.AdminSmartModel.find().exec();
  }

  async postSaveMember(body: CreateAdminSmart): Promise<any> {

    var hashpassword = await bcrypt.hash(body.password, 10);

    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    var timefirst = moment().tz("Asia/Bangkok").format("DD-MM-YYYY")

    var dataSave = null;

    if (body) {

      var data: IAdminSmart = {

        id: body.id,
        created: body.created = timezone,
        updated: body.updated = timezone,
        name:body.name,
        userid: body.userid ,
        password:hashpassword 
      }
      dataSave = await this.AdminSmartModel.create(data);
    }
  
    throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  }

  async getPageMember(query: Paginate): Promise<TestResponseType> {

    const skippedItems = (query.page - 1) * query.limit;

    var comd: Object = new Object();

    if (query.floor) {
      comd['floor'] = { $regex: query.floor }
    }
    if (query.room) {
      comd['room'] = { $regex: query.room }
    }
    if (query.bednumber) {
      comd['bednumber'] = { $regex: query.bednumber }
    }

    var res: TestResponseType = new TestResponseType();
    res.data = new Array<DataTestResponseType>();

    var total = await this.AdminSmartModel.find(comd).countDocuments();
    res.total = total;

    var datalimit = await this.AdminSmartModel.find(comd).skip(skippedItems).limit(query.limit).sort({_id:-1});

    if (datalimit && datalimit.length > 0) {

      datalimit.forEach(data => {
        var dataOut: DataTestResponseType = new DataTestResponseType();

        dataOut._id = data._id;
        dataOut.created = data.created;
        dataOut.updated = data.updated;
        dataOut.bednumber = data.bednumber;
        dataOut.prefix = data.prefix;
        dataOut.firstname = data.firstname;
        dataOut.lastname = data.lastname;
        dataOut.idcard = data.idcard;
        dataOut.birthday = data.birthday;
        dataOut.age = data.age;
        dataOut.sex = data.sex;
        dataOut.occupation = data.occupation;
        dataOut.tel = data.tel;
        dataOut.firstday= data.firstday;
        dataOut.lastday= data.lastday;
        dataOut.status= data.status;
        dataOut.temperature = data.temperature;
        dataOut.upperpressure = data.upperpressure;
        dataOut.lowerpressure = data.lowerpressure;
        dataOut.bloodoxygen= data.bloodoxygen;
        dataOut.pulse= data.pulse;
        dataOut.bloodsugar= data.bloodsugar;
        dataOut.note= data.note;




        res.data.push(dataOut);
      });
    }

    return res
  }

  async getByEmail(userid: string): Promise<any> {
    const user = await this.AdminSmartModel.findOne({ userid: userid });
    return user;
  }
}

  // async findAge(age: string): Promise<TestKeyRes[]> {

  //   return await this.catModel.find({ age:  {$eq:age}});

  // } 

// async finddata(): Promise<Cat[]> {
//   return this.catModel.find({name : {$eq:"Kittinan"}}).exec();

// }
