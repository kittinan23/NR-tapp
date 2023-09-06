import { Model } from 'mongoose';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrderDelivery, CreateUserDelivery } from 'src/dto/create';
import { Delivery } from './menu.schema';
import { UpdateUserDelivery } from 'src/dto/update';
import { IAccessDelivery, IAccessOrder } from 'src/database/accesscontrol.interface';
import { TestDelivery, TestOrder } from 'src/response/test.updateresponse';
// import { HttpExceptionFilter } from 'src/common/http-exception.filter';
import moment = require('moment-timezone');
import * as bcrypt from 'bcryptjs';
import { Paginate, PaginateDelivery } from 'src/interfaces/paginate';
import { DataTestResponseDelivery, TestResponseDelivery } from 'src/response/pagedelivery';
import { ObjectID } from 'typeorm';
import { Order } from 'src/api/foodman/restaurant/res.schema';

@Injectable()
export class MenuService {

  constructor(
    @InjectModel(Delivery.name) private readonly deliveryModel: Model<any>,
    @InjectModel(Order.name) private readonly orderModel: Model<any>,
  ) { }


  async getMenuAll(_id:ObjectID): Promise<Delivery[]> {
    return this.deliveryModel.find({restaurant : _id})
  }

  async postSaveMenu(body: CreateUserDelivery,_id:ObjectID): Promise<TestDelivery> {

    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    var dataResponse: TestDelivery = new TestDelivery();

    var checkID = await this.orderModel.findOne({_id : _id})

    var dataSave = null;

    if (body) {

      var data: IAccessDelivery = {

        id: body.id,
        created: body.created = timezone,
        updated: body.updated = timezone,
        name: body.name,
        type: body.type,
        price: body.price,
        image:body.image,
        Restaurantname:body.Restaurantname,
        restaurant: checkID,
      }
      dataSave = await this.deliveryModel.create(data);
    }

    if (!dataSave) {
      throw new HttpException("Incorrect information !!!", 500)
    }
    if (dataSave) {
      dataResponse.id = dataSave._id;
      dataResponse.name = dataSave.name;
      dataResponse.type = dataSave.type;
      dataResponse.price = dataSave.price;
      dataResponse.image = dataSave.image;
      dataResponse.created = dataSave.created;
      dataResponse.updated = dataSave.updated;
      dataResponse.Restaurantname = dataSave.Restaurantname;
      dataResponse.restaurant = checkID;
      return dataResponse;
    }
  }

  async deleteMenu(id: string): Promise<Delivery> {
    // if (!id) {
    //   throw new HttpExceptionFilter
    // }
    return await this.deliveryModel.findOneAndDelete({ _id: id })
  }

  async putUpdatemember(id: string, user: UpdateUserDelivery): Promise<Delivery> {

    var data = await this.deliveryModel.findOne({ _id: id });
    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    // if (!data) {
    //   throw new HttpExceptionFilter
    // }
    if (data) {
      data.name = user.name;
      data.type = user.type;
      data.price = user.price;
      data.image = user.image;
      data.updated = timezone;
      
      data.save()
    }
    return data._id

  }
  async getPageMember(query: PaginateDelivery): Promise<TestResponseDelivery> {

    const skippedItems = (query.page - 1) * query.limit;

    var comd: Object = new Object();

    // if (query.restaurant) {
    //   comd["name"] = { $regex: query.restaurant }
    // }
    if (query.name) {
      comd["name"] = { $regex: query.name }
    }
    // if (query.Restaurantname) {
    //   comd["Restaurantname"] = { $regex: query.Restaurantname }
    // }
    if (query.minPrice) {
      comd["price"] = { $gte : query.minPrice,$lt:query.maxPrice} 
    }
    // {"price" : {"$gte" : 100, "$lte" : 199}}

      var res: TestResponseDelivery = new TestResponseDelivery();
      res.data = new Array<DataTestResponseDelivery>();

      var total = await this.deliveryModel.find(comd).countDocuments();
      res.total = total;

      var datalimit = await this.deliveryModel.find(comd).skip(skippedItems).limit(query.limit);

      if (datalimit && datalimit.length > 0) {

        datalimit.forEach(data => {
          var dataOut: DataTestResponseDelivery = new DataTestResponseDelivery();

          dataOut.id = data._id;
          dataOut.name = data.name;
          dataOut.type = data.type;
          dataOut.price = data.price;
          dataOut.restaurant = data.restaurant;
          res.data.push(dataOut);
        });
      }

      return res
    }
  }


  // async findAge(age: string): Promise<TestKeyRes[]> {

  //   return await this.catModel.find({ age:  {$eq:age}});

  // } 

// async finddata(): Promise<Cat[]> {
//   return this.catModel.find({name : {$eq:"Kittinan"}}).exec();

// }
