import { Request, Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters, UseGuards, UsePipes, HttpCode, Req, ValidationPipe, UseInterceptors, UploadedFile, Type } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Createappeal, CreateApplyDto, CreatediseaseDto, CreatehappyAllDto, CreatehappyDto, CreatehealthDto, CreateydementiaDto } from 'src/dto/create';
import { UpdateApply, UpdatediseaseDto, Updatehealth } from 'src/dto/update';
import { TestRestponseType } from 'src/response/test.updateresponse';
import { fileURLToPath } from 'url';
import { appealsmart } from '../Appeal/appeal.schema';
import { dementiasmart } from './dementia.schema';
import { dementiaService } from './dementia.service';

@Controller('dementia')
export class dementiaController {

  constructor(

    private readonly dementiaService: dementiaService
  ) { }

  @Get('dementiaAll')
  async getapply(): Promise<dementiasmart[]> {
    return this.dementiaService.getdiseaseAll();
  }

  @UsePipes(new ValidationPipe())
  @Put('adddementia')
  async saveDatahappy(@Body() body: CreateydementiaDto): Promise<any> {
    return await this.dementiaService.addhealth(body);
  }

  // @UsePipes(new ValidationPipe())
  // @Put('addhappy/Total')
  // async saveDatahappyAll(@Body() body: CreatehappyAllDto): Promise<any> {
  //   return await this.happyService.addhappyTotal(body);
  // }

  @Delete('/deletehappy/:id')
  delete(@Param('id') id: string): Promise<dementiasmart> {
    return this.dementiaService.deletehealth(id);
  }

  @Get('find/data')
  async finddata(@Query('userID') userID: string) {
    return this.dementiaService.finddata({
      userID: String(userID),
    });
  }
  }

    