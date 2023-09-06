import { Request, Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters, UseGuards, UsePipes, HttpCode, Req } from '@nestjs/common';
import { CreateAdminSmart, CreateUserDto, CreateUserSmart } from 'src/dto/create';
import { UpdateUser, UpdateUserAdmin } from 'src/dto/update';
import { TestRestponseType } from 'src/response/test.updateresponse';
import { JwtAuthGuard } from 'src/api/auth/jwt-auth.guard';
import { AuthService } from 'src/api/auth/auth.service';
import { ValidationPipe } from 'src/common/validation.pipe';
import { LocalAuthGuard } from 'src/api/auth/local-auth.guard';
import { adminService } from './user.service';
import { AdminSmartCity } from './user.schema';

@Controller('User-admin')
export class AdminController {

  constructor(

    private readonly adminService: adminService,
    private authService: AuthService
  ) { }

  @Get('adminAll')
  async getdata(): Promise<AdminSmartCity[]> {
    return this.adminService.getMemberAll();
  }

  @UsePipes(new ValidationPipe())
  @Post('Cre-Admin')
  async saveData(@Body() body: CreateAdminSmart): Promise<any> {
    return await this.adminService.postSaveMember(body);
  }

  @Put('/user/:id')
  update(@Param('id') id: string, @Body() updateUserAdmin: UpdateUserAdmin) {
    return this.adminService.putUpdateAdmin(id, updateUserAdmin);
  }

  @Delete('/deluser/:id')
  delete(@Param('id') id: string): Promise<AdminSmartCity> {
    return this.adminService.deleteMember(id);
  }

  @Get('pagination')
  async pagelimit(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('floor') floor: string,
    @Query('room') room: string,
    @Query('bednumber') bednumber: string,
  ) {
    return this.adminService.getPageMember({
      page: Number(page),
      limit: Number(limit),
      floor: String(floor),
      room: String(room),
      bednumber: String(bednumber), 
    });
  }
  
  //LOGIN
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  // @UseGuards(JwtAuthGuard)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
