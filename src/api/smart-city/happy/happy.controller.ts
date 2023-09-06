import { Request, Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters, UseGuards, UsePipes, HttpCode, Req, ValidationPipe, UseInterceptors, UploadedFile, Type } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Createappeal, CreateApplyDto, CreatediseaseDto, CreatehappyAllDto, CreatehappyDto, CreatehealthDto } from 'src/dto/create';
import { UpdateApply, UpdatediseaseDto, Updatehealth } from 'src/dto/update';
import { TestRestponseType } from 'src/response/test.updateresponse';
import { fileURLToPath } from 'url';
import { appealsmart } from '../Appeal/appeal.schema';
import { happysmart } from './happy.schema';
import { happyService } from './happy.service';

@Controller('happy')
export class happyController {

  constructor(

    private readonly happyService: happyService
  ) { }

  @Get('happyAll')
  async getapply(): Promise<happysmart[]> {
    return this.happyService.getdiseaseAll();
  }

  @UsePipes(new ValidationPipe())
  @Put('addhappy')
  async saveDatahappy(@Body() body: CreatehappyDto): Promise<any> {
    return await this.happyService.addhealth(body);
  }

  @UsePipes(new ValidationPipe())
  @Put('addhappy/Total')
  async saveDatahappyAll(@Body() body: CreatehappyAllDto): Promise<any> {
    return await this.happyService.addhappyTotal(body);
  }

  @Delete('/deletehappy/:id')
  delete(@Param('id') id: string): Promise<happysmart> {
    return this.happyService.deletehealth(id);
  }

  @Get('find/data')
  async finddata(@Query('userID') userID: string) {
    return this.happyService.finddata({
      userID: String(userID),
    });
  }
  }

    