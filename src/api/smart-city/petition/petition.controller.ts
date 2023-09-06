import { Request, Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters, UseGuards, UsePipes, HttpCode, Req, ValidationPipe, UseInterceptors, UploadedFile, Type } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Createappeal, CreateApplyDto, CreatePetition } from 'src/dto/create';
import { UpdateAppeal, UpdateApply, UpdatePetition } from 'src/dto/update';
import { TestRestponseType } from 'src/response/test.updateresponse';
import { fileURLToPath } from 'url';
import { appealsmart } from '../Appeal/appeal.schema';
import { petitionsmart } from './petition.schema';
import { petitionService } from './petition.service';

@Controller('petition')
export class petitionController {

  constructor(

    private readonly petitionService: petitionService
  ) { }

  @Get('petitionAll')
  async getappeal(): Promise<petitionsmart[]> {
    return this.petitionService.getAppealAll();
  }

  @UsePipes(new ValidationPipe())
  @Post('addpetition')
  async Dataappeal(@Body() body: CreatePetition): Promise<any> {
    return await this.petitionService.addappeal(body);
  }

  @Delete('/deletepetition/:id')
  delete(@Param('id') id: string): Promise<any> {
    return this.petitionService.deletepetition(id);
  }

  @Put('/editpetition/:id')
  // @UseFilters(new HttpExceptionFilter())
  update(@Param('id') id: string, @Body() UpdateCat: UpdatePetition) {
    return this.petitionService.editAppeal(id, UpdateCat);
  }

  @Get('search')
  async pagelimit(
    // @Query('page') page: number,
    // @Query('limit') limit: number,
    @Query('topic') topic: string,
  ) {
    return this.petitionService.getPagepetition({
      // page: Number(page),
      // limit: Number(limit),
      topic: String(topic),
    });
  }
}
    