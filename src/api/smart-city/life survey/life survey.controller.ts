import { Request, Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters, UseGuards, UsePipes, HttpCode, Req, ValidationPipe, UseInterceptors, UploadedFile, Type } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Createappeal, CreateApplyDto, CreateemployeeDto, CreatehealthDto, CreatelifesurveyDto } from 'src/dto/create';
import { UpdateApply, Updatehealth } from 'src/dto/update';
import { TestRestponseType } from 'src/response/test.updateresponse';
import { fileURLToPath } from 'url';
import { appealsmart } from '../Appeal/appeal.schema';
import { lifesurveysmart } from './life survey.schema';
import { lifesurveyService } from './life survey.service';

@Controller('lifesurvey')
export class lifesurveyController {

  constructor(

    private readonly LifesurveyService: lifesurveyService
  ) { }

  @Get('lifesurveyAll')
  async getapply(): Promise<lifesurveysmart[]> {
    return this.LifesurveyService.getlifesurveyAll();
  }

  @UsePipes(new ValidationPipe())
  @Post('addlifesurvey')
  async saveDatalifesurvey(@Body() body: CreatelifesurveyDto): Promise<any> {
    return await this.LifesurveyService.addlifesurvey(body);
  }

  @Delete('/deleteaddlifesurvey/:id')
  delete(@Param('id') id: string): Promise<lifesurveysmart> {
    return this.LifesurveyService.deletelifesurvey(id);
  }

  @Get('search/addlifesurvey')
  async pagelimit(
    @Query('affiliation') affiliation: string,
    @Query('division') division: string,
  ) {
    return this.LifesurveyService.getPagelifesurvey({
      affiliation: String(affiliation),
      division: String(division),
    });
  }
}
