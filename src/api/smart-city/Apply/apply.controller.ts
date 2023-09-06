import {  Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters, UseGuards, UsePipes, HttpCode, Req, ValidationPipe, UseInterceptors, UploadedFile, Type } from '@nestjs/common';
import {  CreateApplyDto } from 'src/dto/create';
import { UpdateApply } from 'src/dto/update';
import { applysmart } from './apply.schema';
import { applyService } from './apply.service';

@Controller('apply')
export class ApplyController {

  constructor(

    private readonly applyService: applyService
  ) { }

  @Get('applyAll')
  async getapply(): Promise<applysmart[]> {
    return this.applyService.getApplyAll();
  }

  @UsePipes(new ValidationPipe())
  @Post('addapply')
  async saveData(@Body() body: CreateApplyDto): Promise<any> {
    return await this.applyService.addapply(body);
  }

  @Delete('/deleteapply/:id')
  delete(@Param('id') id: string): Promise<applysmart> {
    return this.applyService.deleteApply(id);
  }

  @Put('/editapply/:id')
  update(@Param('id') id: string, @Body() UpdateApply: UpdateApply) {
    return this.applyService.editApply(id, UpdateApply);
  }

  @Get('search')
  async pagelimit(
    @Query('topic') topic: string,
  ) {
    return this.applyService.getPageApply({
      topic: String(topic),
    });
  }
}
    