import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters, UsePipes } from '@nestjs/common';
import { OrderMenuService } from './bk.service';
import { TestRestponseOrder } from 'src/response/test.updateresponse';
import { ValidationPipe } from 'src/common/validation.pipe';
// import { HttpExceptionFilter } from 'src/common/http-exception.filter';
import { Booking } from './bk.schema';
import {  CreateOrderDto } from 'src/dto/create';
import { UpdateOrder } from 'src/dto/update';
import { ObjectID } from 'typeorm';

@Controller('OrderMenu')
export class OrderMenuController {

  constructor(
    private readonly OrderMenuService: OrderMenuService
  ) { }

  @Get('OrderMenuAll')
  async getdata(): Promise<Booking[]> {
    return this.OrderMenuService.getMemberAll();
  }

  @UsePipes(new ValidationPipe())
  @Post('OrderMenuSave/:id/:orderid')
  async saveData(@Body() body: CreateOrderDto,@Param('id') _id : ObjectID,@Param('orderid') _orderid : ObjectID): Promise<TestRestponseOrder> {
    return await this.OrderMenuService.postSaveMember(body,_id,_orderid);
  }
  // @UseFilters(new HttpExceptionFilter())
  @Delete('/Orderdelete/:id')
  delete(@Param('id') id: string): Promise<Booking> {
    return this.OrderMenuService.deleteOrder(id);
  }
  @Put('/EditOrder/:id')
  // @UseFilters(new HttpExceptionFilter())
  update(@Param('id') id: string, @Body() user: UpdateOrder) {
    return this.OrderMenuService.putUpdatemember(id, user);
  }
  // @UseFilters(new HttpExceptionFilter())
  @Get('pagination')
  async pagelimit(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('firstname') firstname: string,
    @Query('lastname') lastname: string,
    @Query('movie') movie: string,
    @Query('movietitle') movietitle: string,
    @Query('date') date: string,
    @Query('showtime') showtime: string,
    @Query('seat') seat: string,
    // @Query('toseat') toseat: string,
    @Query('theatre') theatre: string
  ) {
    return this.OrderMenuService.getPageMember({
      page: Number(page),
      limit: Number(limit),
      firstname: String(firstname),
      lastname: String(lastname),
      movie: String(movie),
      movietitle: String(movietitle),
      date: String(date),
      showtime: String(showtime),
      seat: String(seat),
      // toseat: String(toseat),
      theatre: String(theatre)
    });
  }
}

