import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters, UsePipes } from '@nestjs/common';
import { BedService } from './bed.service';
import { TestRestponseBed, TestRestponseOrder } from 'src/response/test.updateresponse';
import { ValidationPipe } from 'src/common/validation.pipe';
// import { HttpExceptionFilter } from 'src/common/http-exception.filter';
import { Bed } from './bed.schema';
import {  CreateBed, CreateOrderDto } from 'src/dto/create';
import { UpdateOrder } from 'src/dto/update';
import { ObjectID } from 'typeorm';

@Controller('BedQ')
export class BedController {

  constructor(
    private readonly BedService: BedService
  ) { }

  @Get('OrderMenuAll')
  async getdata(): Promise<Bed[]> {
    return this.BedService.getMemberAll();
  }

  // @UsePipes(new ValidationPipe())
  @Post('BedSave')
  async saveData(@Body() body: CreateBed): Promise<any> {
    return await this.BedService.postSaveBed(body);
  }
  // @UseFilters(new HttpExceptionFilter())
  @Delete('/Orderdelete/:id')
  delete(@Param('id') id: string): Promise<Bed> {
    return this.BedService.deleteOrder(id);
  }
  @Put('/EditOrder/:id')
  // @UseFilters(new HttpExceptionFilter())
  update(@Param('id') id: string, @Body() user: UpdateOrder) {
    return this.BedService.putUpdatemember(id, user);
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
    return this.BedService.getPageMember({
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

