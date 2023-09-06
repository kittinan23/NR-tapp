import { Request, Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters, UseGuards, UsePipes, HttpCode, Req, ValidationPipe, UseInterceptors, UploadedFile, Type } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Createappeal, CreateApplyDto, CreatehealthDto } from 'src/dto/create';
import { UpdateApply, Updatehealth } from 'src/dto/update';
import { TestRestponseType } from 'src/response/test.updateresponse';
import { fileURLToPath } from 'url';
import { appealsmart } from '../Appeal/appeal.schema';
import { healthsmart } from './health.schema';
import { healthService } from './health.service';

@Controller('health')
export class healthController {

  constructor(

    private readonly healthService: healthService
  ) { }

  @Get('healthAll')
  async getapply(): Promise<healthsmart[]> {
    return this.healthService.gethealthAll();
  }

  @UsePipes(new ValidationPipe())
  @Post('addhealth')
  async saveDatahealth(@Body() body: CreatehealthDto): Promise<any> {
    return await this.healthService.addhealth(body);
  }

  @Delete('/deletehealth/:id')
  delete(@Param('id') id: string): Promise<healthsmart> {
    return this.healthService.deletehealth(id);
  }

  @Put('/edithealth/:id')
  update(@Param('id') id: string, @Body() updatehealth: Updatehealth) {
    return this.healthService.edithealth(id, updatehealth);
  }

  @Get('find/data')
  async finddata(@Query('userID') userID: string) {
    return this.healthService.finddata({
      userID: String(userID),
    });
  }

  @Get('AllHealth')
  async HealthData(
    @Query('field') field: string,
    @Query('keyword') keyword: string,
  ) {
    return this.healthService.getHealthData({
      field: String(field),
      keyword: String(keyword),
    });
  }
  }

    