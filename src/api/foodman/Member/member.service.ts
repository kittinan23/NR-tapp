import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from 'src/dto/create';
import { pakpoonUser } from './member.schema';
import { UpdateUser } from 'src/dto/update';
import { IAccesscontrol } from 'src/database/accesscontrol.interface';
import { TestRestponseType } from 'src/response/test.updateresponse';
import { DataTestResponseType, TestResponseType } from 'src/response/pagerespon';
import { Paginate } from 'src/interfaces/paginate';
// import { HttpExceptionFilter } from 'src/common/http-exception.filter';
import moment = require('moment-timezone');
import * as bcrypt from 'bcryptjs';
import { HttpExceptionFilter } from 'src/common/pipes/http-exception.filter';
import { ClassConstants } from 'src/common/constants/class.constants';

@Injectable()
export class MembersService {

  constructor(
    @InjectModel(pakpoonUser.name) private readonly memberModel: Model<any>,

  ) { }

  async putUpdatemember(id: string, user: UpdateUser): Promise<pakpoonUser> {
    console.log('user', user)

    // var hashpassword = await bcrypt.hash(user.password, 10);

    var data = await this.memberModel.findOne({ _id: id });
    console.log('data', data)

    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
 
    // if (!data) {
      // throw new HttpExceptionFilter
    // }
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
  async deleteMember(id: string): Promise<pakpoonUser> {
    if (!id) {
      throw new HttpException(ClassConstants.ErrorMessage.ParamiterInvalid, HttpStatus.BAD_REQUEST);
  }
    return await this.memberModel.findOneAndDelete({ _id: id })
  }

  async getMemberAll(): Promise<pakpoonUser[]> {
    return this.memberModel.find().exec();
    //return this.catModel.find({firstname:/tiph/}).exec();
  }

//   async getMemberAll(id: String): Promise<pakpoonUser[]> {
//     return this.memberModel.findById({
//       _id: id,
//   });
// }
  async postSaveMember(body: CreateUserDto): Promise<TestRestponseType> {

    // var hashpassword = await bcrypt.hash(body.password, 10);

    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    var timefirst = moment().tz("Asia/Bangkok").format("DD-MM-YYYY")

    var dataResponse: TestRestponseType = new TestRestponseType();

    var dataSave = null;

    if (body) {

      var data: IAccesscontrol = {

        id: body.id,
        created: body.created = timezone,
        updated: body.updated = timezone,
        floor:body.floor,
        room:body.room,
        bednumber: body.bednumber ,
        prefix:body.prefix ,
        firstname: body.firstname,
        lastname: body.lastname,
        idcard: body.idcard,
        birthday: body.birthday,
        age: body.age,
        sex: body.sex,
        occupation: body.occupation,
        tel: body.tel,
        firstday: body.firstday,
        lastday: body.lastday,
        status: body.status,
        temperature: body.temperature,
        upperpressure: body.upperpressure,
        lowerpressure: body.lowerpressure,
        bloodoxygen: body.bloodoxygen,
        pulse: body.pulse,
        bloodsugar: body.bloodsugar,
        note: body.note,

        
        
        // password: body.password = hashpassword,
      }
      dataSave = await this.memberModel.create(data);
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
    
    // if (query.lastname) {
    //   comd['lastname'] = { $regex: query.lastname }
    // }
    // if (query.nickname) {
    //   comd['nickname'] = { $regex: query.nickname }
    // }
    // if (query.age) {
    //   comd['age'] = { $regex: query.age }
    // }
    // if (query.fromday) {
    //   comd['created'] = { $gte: query.fromday, $lt: query.toDay }
    // }

    var res: TestResponseType = new TestResponseType();
    res.data = new Array<DataTestResponseType>();

    var total = await this.memberModel.find(comd).countDocuments();
    res.total = total;

    var datalimit = await this.memberModel.find(comd).skip(skippedItems).limit(query.limit).sort({_id:-1});

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

  // async getByEmail(email: string): Promise<any> {
  //   const user = await this.memberModel.findOne({ email: email });
  //   return user;
  // }
}

  // async findAge(age: string): Promise<TestKeyRes[]> {

  //   return await this.catModel.find({ age:  {$eq:age}});

  // } 

// async finddata(): Promise<Cat[]> {
//   return this.catModel.find({name : {$eq:"Kittinan"}}).exec();

// }
