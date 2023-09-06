import { Request, Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters, UseGuards, UsePipes, HttpCode, Req, ValidationPipe, UseInterceptors, UploadedFile, Type } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Createappeal, CreateApplyDto, CreatePetition, CreateProtest } from 'src/dto/create';
import { UpdateAppeal, UpdateApply, UpdatePetition, UpdateProtest } from 'src/dto/update';
import { protestsmart } from './protest.schema';
import { protestService } from './protest.service';

@Controller('protest')
export class protestController {

  constructor(

    private readonly protestService: protestService
  ) { }

  @Get('protestAll')
  async getappeal(): Promise<protestsmart[]> {
    return this.protestService.getAppealAll();
  }

  @UsePipes(new ValidationPipe())
  @Post('addprotest')
  async Dataappeal(@Body() body: CreateProtest): Promise<any> {
    return await this.protestService.addappeal(body);
  }

  @Delete('/deleteprotest/:id')
  delete(@Param('id') id: string): Promise<any> {
    return this.protestService.deletepetition(id);
  }

  @Put('/editprotest/:id')
  update(@Param('id') id: string, @Body() UpdateCat: UpdateProtest) {
    return this.protestService.editAppeal(id, UpdateCat);
  }

  @Get('find/data')
  async finddata(@Query('userID') userID: string) {
    return this.protestService.finddata({
      userID: String(userID),
    });
  }
}
    