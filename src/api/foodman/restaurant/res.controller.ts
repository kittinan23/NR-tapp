import { Request, Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters, UseGuards, UsePipes, HttpCode, Req } from '@nestjs/common';
import { OrderService } from './res.service';
import { CreateOrderDelivery, CreateUserDelivery, CreateUserDto } from 'src/dto/create';
import { UpdateOrderDelivery, UpdateUser, UpdateUserDelivery } from 'src/dto/update';
import { TestDelivery, TestOrder, TestRestponseType } from 'src/response/test.updateresponse';
import { ValidationPipe } from 'src/common/validation.pipe';
// import { HttpExceptionFilter } from 'src/common/http-exception.filter';
import { Order } from './res.schema';

@Controller('restaurant')
export class OrderController {

  constructor(

    private readonly orderService: OrderService,
  ) { }

  @Get('restaurantAll')
  async getdataOrder(): Promise<Order[]> {
    return this.orderService.getOrderAll();
  }

  @UsePipes(new ValidationPipe())
  @Post('addrestaurant')
  async saveOrder(@Body() body: CreateOrderDelivery): Promise<TestOrder> {
    return await this.orderService.postSaveOrder(body);
  }

  // @UseFilters(new HttpExceptionFilter())
  @Delete('/deleterestaurant/:id')
  delete(@Param('id') id: string): Promise<Order> {
    return this.orderService.deleteMember(id);
  }
  @Put('/editrestaurant/:id')
  // @UseFilters(new HttpExceptionFilter())
  update(@Param('id') id: string, @Body() UpdateDelivery: UpdateOrderDelivery) {
    console.log(id, UpdateDelivery)
    return this.orderService.putUpdatemember(id, UpdateDelivery);
  }

  // @UseFilters(new HttpExceptionFilter())
  @Get('pagination')
  async pagelimit(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('Restaurantname') Restaurantname: string,
    // @Query('foodname') foodname: string,
    // @Query('price') price: number,
    // @Query('fromPrice') fromPrice: string,
    // @Query('toPrice') toPrice: string,
  ) {
    return this.orderService.getPageMember({
      page: Number(page),
      limit: Number(limit),
      Restaurantname: String(Restaurantname)
      // foodname: String(foodname),
      // price: Number(price),
      // fromPrice: String(fromPrice),
      // toPrice: String(toPrice)
    });
  }

  // @Put('/edituser/:id')
  // @UseFilters(new HttpExceptionFilter())
  // update(@Param('id') id: string, @Body() UpdateDelivery: UpdateUserDelivery) {
  //   console.log(id, UpdateDelivery)
  //   return this.deliveryService.putUpdatemember(id, UpdateDelivery);
  // }


  // @UseFilters(new HttpExceptionFilter())
  // @Get('pagination')
  // async pagelimit(
  //   @Query('page') page: number,
  //   @Query('limit') limit: number,
  //   @Query('name') name: string,
  //   @Query('type') type: string,
  //   @Query('price') price: string,
  //   @Query('fromPrice') fromPrice: string,
  //   @Query('toPrice') toPrice: string,
  // ) {
  //   return this.deliveryService.getPageMember({
  //     page: Number(page),
  //     limit: Number(limit),
  //     name: String(name),
  //     type: String(type),
  //     price: String(price),
  //     fromPrice: String(fromPrice),
  //     toPrice: String(toPrice)
  //   });
  // }
}
