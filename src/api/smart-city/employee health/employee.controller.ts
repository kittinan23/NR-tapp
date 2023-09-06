import { Request, Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters, UseGuards, UsePipes, HttpCode, Req, ValidationPipe, UseInterceptors, UploadedFile, Type } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Createappeal, CreateApplyDto, CreateemployeeDto, CreatehealthDto } from 'src/dto/create';
import { UpdateApply, Updatehealth } from 'src/dto/update';
import { TestRestponseType } from 'src/response/test.updateresponse';
import { fileURLToPath } from 'url';
import { appealsmart } from '../Appeal/appeal.schema';
import { employeesmart } from './employee.schema';
import { employeeService } from './employee.service';

@Controller('employee')
export class employeeController {

  constructor(

    private readonly employeeService: employeeService
  ) { }

  @Get('employeeAll')
  async getapply(): Promise<employeesmart[]> {
    return this.employeeService.getemployeeAll();
  }

  @UsePipes(new ValidationPipe())
  @Post('addeemployee')
  async saveDatahealth(@Body() body: CreateemployeeDto): Promise<any> {
    return await this.employeeService.addemployee(body);
  }

  @Delete('/deletehealth/:id')
  delete(@Param('id') id: string): Promise<employeesmart> {
    return this.employeeService.deletehealth(id);
  }

  @Get('search/employ')
  async pagelimit(
    @Query('affiliation') affiliation: string,
    @Query('division') division: string,
  ) {
    return this.employeeService.getPageEmploy({
      affiliation: String(affiliation),
      division: String(division),
    });
  }
}
