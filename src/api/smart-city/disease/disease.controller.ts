import { Request, Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters, UseGuards, UsePipes, HttpCode, Req, ValidationPipe, UseInterceptors, UploadedFile, Type } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Createappeal, CreateApplyDto, CreatediseaseDto, CreatehealthDto } from 'src/dto/create';
import { UpdateApply, UpdatediseaseDto, Updatehealth } from 'src/dto/update';
import { TestRestponseType } from 'src/response/test.updateresponse';
import { fileURLToPath } from 'url';
import { appealsmart } from '../Appeal/appeal.schema';
import { diseasesmart } from './disease.schema';
import { diseaseService } from './disease.service';

@Controller('disease')
export class diseaseController {

  constructor(

    private readonly diseaseService: diseaseService
  ) { }

  @Get('diseaseAll')
  async getapply(): Promise<diseasesmart[]> {
    return this.diseaseService.getdiseaseAll();
  }

  @UsePipes(new ValidationPipe())
  @Put('adddisease')
  async saveDatadisease(@Body() body: CreatediseaseDto): Promise<any> {
    return await this.diseaseService.addhealth(body);
  }

  @Delete('/deletehealth/:id')
  delete(@Param('id') id: string): Promise<diseasesmart> {
    return this.diseaseService.deletehealth(id);
  }

  @Get('find/data')
  async finddata(@Query('userID') userID: string) {
    return this.diseaseService.finddata({
      userID: String(userID),
    });
  }
  }

    