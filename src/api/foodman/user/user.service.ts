import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUser, CreateUserDto } from 'src/dto/create';
import { userCovid } from './user.schema';
import { UpdateUser } from 'src/dto/update';
import { IAccesscontrol, Iuser } from 'src/database/accesscontrol.interface';
import { TestRestponseType } from 'src/response/test.updateresponse';
import { DataTestResponseType, TestResponseType } from 'src/response/pagerespon';
import { Paginate } from 'src/interfaces/paginate';
// import { HttpExceptionFilter } from 'src/common/http-exception.filter';
import moment = require('moment-timezone');
import * as bcrypt from 'bcryptjs';
import { HttpExceptionFilter } from 'src/common/pipes/http-exception.filter';
import { ClassConstants } from 'src/common/constants/class.constants';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(userCovid.name) private readonly userModel: Model<any>,

  ) { }

  async putUpdatemember(id: string, user: UpdateUser): Promise<userCovid> {

    // var hashpassword = await bcrypt.hash(user.password, 10);

    var data = await this.userModel.findOne({ _id: id });

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
  async deleteMember(id: string): Promise<userCovid> {
    if (!id) {
      throw new HttpException(ClassConstants.ErrorMessage.ParamiterInvalid, HttpStatus.BAD_REQUEST);
  }
    return await this.userModel.findOneAndDelete({ _id: id })
  }

  async getMemberAll(): Promise<userCovid[]> {
    return this.userModel.find().exec();
    //return this.catModel.find({firstname:/tiph/}).exec();
  }

//   async getMemberAll(id: String): Promise<pakpoonUser[]> {
//     return this.memberModel.findById({
//       _id: id,
//   });
// }
  async postSaveMember(body: CreateUser): Promise<any> {

    // var hashpassword = await bcrypt.hash(body.password, 10);

    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    var timefirst = moment().tz("Asia/Bangkok").format("DD-MM-YYYY")

    // var dataResponse: TestRestponseType = new TestRestponseType();

    var dataSave = null;

    if (body) {

      var data: Iuser = {

        id: body.id,
        created: body.created = timezone,
        updated: body.updated = timezone,
        floor:body.floor,
        room:body.room,
        prefix:body.prefix,
        firstname:body.firstname,
        lastname: body.lastname ,
        idcard:body.idcard ,
        bednumber: body.bednumber,
        birthday: body.birthday,
        age: body.age,
        sex: body.sex,
        weight: body.weight,
        height: body.height,
        nationality: body.nationality,
        religion: body.religion,
        occupation: body.occupation,
        housenumber: body.housenumber,
        group: body.group,
        tumbon: body.tumbon,
        amphoe: body.amphoe,
        junwad: body.junwad,
        // email: body.email,
        tel: body.tel,
        firstday: body.firstday,
        lastday: body.lastday,

        
        
        // password: body.password = hashpassword,
      }
      dataSave = await this.userModel.create(data);
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

    var total = await this.userModel.find(comd).countDocuments();
    res.total = total;

    var datalimit = await this.userModel.find(comd).skip(skippedItems).limit(query.limit).sort({_id:-1});

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

  async getByEmail(email: string): Promise<any> {
    const user = await this.userModel.findOne({ email: email });
    return user;
  }
}

  // async findAge(age: string): Promise<TestKeyRes[]> {

  //   return await this.catModel.find({ age:  {$eq:age}});

  // } 

// async finddata(): Promise<Cat[]> {
//   return this.catModel.find({name : {$eq:"Kittinan"}}).exec();

// }
