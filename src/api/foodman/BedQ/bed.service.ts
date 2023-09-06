import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Bed } from './bed.schema';
import { IBookOrder } from 'src/database/accesscontrol.interface';
import { TestRestponseBed, TestRestponseOrder } from 'src/response/test.updateresponse';
import { PaginateMovie } from 'src/interfaces/paginate';
// import { HttpExceptionFilter } from 'src/common/http-exception.filter';
import moment = require('moment-timezone');
import { DataTestResponseMovie, TestResponseMovie } from 'src/response/pagemovieres';
import { CreateBed, CreateOrderDto } from 'src/dto/create';
import { UpdateOrder } from 'src/dto/update';
import { ObjectID } from 'typeorm';
import { pakpoonUser } from 'src/api/foodman/Member/member.schema';
import { Delivery } from 'src/api/foodman/Menu/menu.schema';

@Injectable()
export class BedService {

  constructor(
    @InjectModel(Bed.name) private readonly BedModel: Model<any>,
    // @InjectModel(pakpoonUser.name) private readonly catModel: Model<any>,
    // @InjectModel(Delivery.name) private readonly deliveryModel: Model<any>
  ) { }

  async getMemberAll(): Promise<Bed[]> {
    
      var dataPet = await this.BedModel.find()
      .populate(
          'orderid',
          "-__v " 
      )
      // return this.PetModel.find().exec();
      return dataPet
  }

  async postSaveBed(body: CreateBed): Promise<any> {

    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    var dataResponse: TestRestponseBed = new TestRestponseBed();
    
    // var checkID = await this.BedModel.findOne({_id : _id})
    // var checkOrder = await this.deliveryModel.findOne({_id : _orderid})

    // console.log(checkID._id)
    // console.log(checkOrder._id)
    var dataSave = null;

    if (body) {
      var data: CreateBed = {

        id: body.id,
        // nameStore: body.nameStore,
        bednumber: body.bednumber,
        status: body.status
        // serialNumber:body.serialNumber,
        // Orderdate: body.Orderdate = timezone,
        // user: checkID,
        // orderid:checkOrder
        // showtime: body.showtime,
        // seat: body.seat,
        // theatre: body.theatre
      }
      dataSave = await this.BedModel.create(data);
    }
  }
  async deleteOrder(id: string): Promise<any> {
    // if (!id) {
    //   throw new HttpExceptionFilter
    // }
    return await this.BedModel.findOneAndDelete({ _id: id })
  }
  
  async putUpdatemember(id: string, user: UpdateOrder): Promise<any> {

    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    var data = await this.BedModel.findOne({ _id: id });

    // if (!data) {
    //   throw new HttpExceptionFilter
    // }
    if (data) {
      data.nameStore = user.nameStore;
      data.serialNumber = user.serialNumber;
      data.status = user.status;
      data.image = user.image;
      data.Orderdate = user.Orderdate = timezone;

      data.save()
    }
    return data._id
  }

  async getPageMember(query: PaginateMovie): Promise<TestResponseMovie> {

    const skippedItems = (query.page - 1) * query.limit;

    var comd: Object = new Object();

    if (query.firstname) {
      comd['firstname'] = { $regex: query.firstname }
    }
    if (query.lastname) {
      comd['lastname'] = { $regex: query.lastname }
    }
    if (query.movie) {
      comd['movie'] = { $regex: query.movie }
    }
    if (query.movietitle) {
      comd['movietitle'] = { $regex: query.movietitle }
    }
    if (query.date) {
      comd['date'] = { $regex: query.date }
    }
    if (query.showtime) {
      comd['showtime'] = { $regex: query.showtime }
    }
    if (query.seat) {
      comd['seat'] = { $regex: query.seat }
    }
    if (query.theatre) {
      comd['theatre'] = { $regex: query.theatre }
    }

    var res: TestResponseMovie = new TestResponseMovie();
    res.data = new Array<DataTestResponseMovie>();

    var total = await this.BedModel.find(comd).countDocuments();
    res.total = total;

    var datalimit = await this.BedModel.find(comd).skip(skippedItems).limit(query.limit);

    if (datalimit && datalimit.length > 0) {

      datalimit.forEach(data => {
        var dataOut: DataTestResponseMovie = new DataTestResponseMovie();
        dataOut._id = data._id;
        dataOut.firstname = data.firstname;
        dataOut.lastname = data.lastname;
        dataOut.movie = data.movie;
        dataOut.movietitle = data.movietitle;
        dataOut.date = data.date;
        dataOut.showtime = data.showtime;
        dataOut.seat = data.seat;
        dataOut.theatre = data.theatre;

        res.data.push(dataOut);
      });
    }

    return res
  }
}