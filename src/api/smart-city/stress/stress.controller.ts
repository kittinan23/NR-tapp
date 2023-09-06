import { Request, Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters, UseGuards, UsePipes, HttpCode, Req, ValidationPipe, UseInterceptors, UploadedFile, Type } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Createappeal, CreateApplyDto, CreatediseaseDto, CreatehappyDto, CreatehealthDto, CreatestressDto } from 'src/dto/create';
import { UpdateApply, UpdatediseaseDto, Updatehealth } from 'src/dto/update';
import { TestRestponseType } from 'src/response/test.updateresponse';
import { fileURLToPath } from 'url';
import { appealsmart } from '../Appeal/appeal.schema';
import { stresssmart } from './stress.schema';
import { stressService } from './stress.service';

@Controller('stress')
export class stressController {

  constructor(

    private readonly stressService: stressService
  ) { }

  @Get('stressAll')
  async getapply(): Promise<stresssmart[]> {
    return this.stressService.getdiseaseAll();
  }

  @UsePipes(new ValidationPipe())
  @Put('addstress')
  async saveDatastress(@Body() body: CreatestressDto): Promise<any> {
    return await this.stressService.addstress(body);
  }

  // @UsePipes(new ValidationPipe())
  // @Put('addstress/Total')
  // async saveDatastressAll(@Body() body: CreatestressAllDto): Promise<any> {
  //   return await this.stressService.addstressTotal(body);
  // }

  @Delete('/deletestress/:id')
  delete(@Param('id') id: string): Promise<stresssmart> {
    return this.stressService.deletehealth(id);
  }

  @Get('find/data')
  async finddata(@Query('userID') userID: string) {
    return this.stressService.finddata({
      userID: String(userID),
    });
  }
  }

    