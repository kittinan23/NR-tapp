import { Model } from 'mongoose';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrderDelivery, CreateUserDelivery } from 'src/dto/create';
import { Order } from './res.schema';
import { UpdateOrderDelivery, UpdateUserDelivery } from 'src/dto/update';
import { IAccessDelivery, IAccessOrder } from 'src/database/accesscontrol.interface';
import { TestDelivery, TestOrder } from 'src/response/test.updateresponse';
// import { HttpExceptionFilter } from 'src/common/http-exception.filter';
import moment = require('moment-timezone');
import * as bcrypt from 'bcryptjs';
import { Paginate, PaginateDelivery, PaginateOrder } from 'src/interfaces/paginate';
import { DataTestResponseDelivery, TestResponseDelivery } from 'src/response/pagedelivery';
import { DataTestOrderDelivery, TestOrderDelivery } from 'src/response/pageorder';

@Injectable()
export class OrderService {

  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<any>,
  ) { }


  async getOrderAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async postSaveOrder(body: CreateOrderDelivery): Promise<TestOrder> {

    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    var dataResponse: TestOrder = new TestOrder();

    var dataSave = null;

    if (body) {

      var data: IAccessOrder = {

        id: body.id,
        // orderdate: body.orderdate = timezone,
        Restaurantname: body.Restaurantname,
        // pass: body.pass,
        // status:body.status,
        image:body.image,
        created: body.created=timezone,
        updated: body.updated=timezone,

      }
      dataSave = await this.orderModel.create(data);
    }

    if (!dataSave) {
      throw new HttpException("Incorrect information !!!", 500)
    }
    if (dataSave) {
      dataResponse.id = dataSave._id;
      dataResponse.Restaurantname = dataSave.Restaurantname;
      dataResponse.image = dataSave.image;
      dataResponse.pass = dataSave.pass;
      dataResponse.status = dataSave.status;
      dataResponse.orderdate = dataSave.orderdate;
      dataResponse.created = timezone;
      dataResponse.updated = timezone;
      return dataResponse;
    }
  }

  async deleteMember(id: string): Promise<Order> {
    // if (!id) {
    //   throw new HttpExceptionFilter
    // }
    return await this.orderModel.findOneAndDelete({ _id: id })
  }

  async putUpdatemember(id: string, user: UpdateOrderDelivery): Promise<Order> {
    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    var data = await this.orderModel.findOne({ _id: id });

    // if (!data) {
    //   throw new HttpExceptionFilter
    // }
    if (data) {
      data.Restaurantname = user.Restaurantname;
      data.foodname = user.foodname;
      data.price = user.price;
      data.creatd = user.created = timezone;
      data.updated = user.updated = timezone;
      data.save()
    }
    return data._id

  }
  async getPageMember(query: PaginateOrder): Promise<TestOrderDelivery> {

    const skippedItems = (query.page - 1) * query.limit;

    var comd: Object = new Object();

    if (query.Restaurantname) {
      comd['Restaurantname'] = { $regex: query.Restaurantname }
    }
    // if (query.foodname) {
    //   comd['foodname'] = { $regex: query.foodname }
    // }
    // if (query.price) {
    //   comd['price'] = { $eq: query.price }
    // }
    // if (query.created) {
    //   comd['created'] = { $gte: query.fromDay, $lt: query.toDay }
    // }

    var res: TestOrderDelivery = new TestOrderDelivery();
    res.data = new Array<DataTestOrderDelivery>();

    var total = await this.orderModel.find(comd).countDocuments();
    res.total = total;

    var datalimit = await this.orderModel.find(comd).skip(skippedItems).limit(query.limit);

    if (datalimit && datalimit.length > 0) {

      datalimit.forEach(data => {
        var dataOut: DataTestOrderDelivery = new DataTestOrderDelivery();

        dataOut.id = data._id;
        dataOut.Restaurantname = data.Restaurantname;
        // dataOut.foodname = data.foodname;
        // dataOut.price = data.price;

        res.data.push(dataOut);
      });
    }

    return res
  }
}


