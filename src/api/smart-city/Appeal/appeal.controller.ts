import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes, ValidationPipe, } from '@nestjs/common';
import { Createappeal, Createappointment, CreateRes, CreateStar, submit } from 'src/dto/create';
import { UpdateAppeal } from 'src/dto/update';
import { appealsmart } from './appeal.schema';
import { appealService } from './appeal.service';
import { DocumentDefinition } from 'mongoose';
@Controller('appeal')
export class AppealController {

  constructor(

    private readonly appealService: appealService
  ) { }

  @Get('appealAll')
  async getappeal(): Promise<appealsmart[]> {
    return this.appealService.getAppealAll();
  }

  @Get('app/:status')
  async getapp(@Param('status') status: string): Promise<DocumentDefinition<any>[]> {
    return this.appealService.getApp(status);
  }

  @Get('find/data')
  async finddata(@Query('userID') userID: string) {
    return this.appealService.finddata({
      userID: String(userID),
    });
  }

  @Get('find/status')
  async findstatus(
    @Query('status') status: string,
    @Query('topic') topic: string,) {
    return this.appealService.findstatus({
      status: String(status),
      topic: String(topic),
    });
  }

  @UsePipes(new ValidationPipe())
  @Post('addappeal')
  async Dataappeal(@Body() body: Createappeal): Promise<any> {
    return await this.appealService.addappeal(body);
  }

  // @UsePipes(new ValidationPipe())
  // @Post('addappointment')
  // async Dataappointmentl(@Body() body: Createappointment): Promise<any> {
  //   return await this.appealService.addappointment(body);
  // }

  @UsePipes(new ValidationPipe())
  @Put('addRes/:id')
  async DataRes(@Body() body: CreateRes, @Param('id') id: string): Promise<any> {
    return await this.appealService.addRes(body, id);
  }

  @Post('submitappeal/:id')
  async submitAppeal(@Body() body: submit, @Param('id') id: string): Promise<any> {
    return await this.appealService.getSubmit(body, id);
  }

  @Delete('/deleteappeal/:id')
  delete(@Param('id') id: string): Promise<any> {
    return this.appealService.deleteAppeal(id);
  }

  @Put('/editappeal/:id')
  update(@Param('id') _ID: string, @Body() UpdateCat: UpdateAppeal) {
    return this.appealService.editAppeal(_ID, UpdateCat);
  }

  @UsePipes(new ValidationPipe())
  @Put('addStar/Comment/:id')
  async saveDatahealth(@Param('id') id: string, @Body() body: CreateStar): Promise<any> {
    return await this.appealService.addStar(id, body);
  }

  @Get('data/userID')
  async pageUser(
    @Query('id') id: string,
  ) {
    return this.appealService.getPageUserID({
      id: String(id),
    });
  }
  @Get('userData')
  async getappuser(@Query('id') id: string): Promise<appealsmart[]> {
    return this.appealService.getAppeal({ id: String(id) });
  }
}
