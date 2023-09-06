import { Request, Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters, UseGuards, UsePipes, HttpCode, Req } from '@nestjs/common';
import { MembersService } from './member.service';
import { CreateUserDto } from 'src/dto/create';
import { pakpoonUser } from 'src/api/foodman/Member/member.schema';
import { UpdateUser } from 'src/dto/update';
import { TestRestponseType } from 'src/response/test.updateresponse';
import { JwtAuthGuard } from 'src/api/auth/jwt-auth.guard';
import { AuthService } from 'src/api/auth/auth.service';
import { ValidationPipe } from 'src/common/validation.pipe';
// import { HttpExceptionFilter } from 'src/common/http-exception.filter';
import { LocalAuthGuard } from 'src/api/auth/local-auth.guard';

@Controller('auth')
export class MembersController {

  constructor(

    private readonly membersService: MembersService,
    private authService: AuthService
  ) { }

  @Get('memberAll')
  async getdata(): Promise<pakpoonUser[]> {
    return this.membersService.getMemberAll();
  }

  // @Get('memberAll/:id')
  // async getdata(@Param('id') id: string): Promise<pakpoonUser[]> {
  //   return this.membersService.getMemberAll(id);
  // }
  @UsePipes(new ValidationPipe())
  @Post('member')
  async saveData(@Body() body: CreateUserDto): Promise<TestRestponseType> {
    return await this.membersService.postSaveMember(body);
  }

  @Put('/member/:id')
  // @UseFilters(new HttpExceptionFilter())
  update(@Param('id') id: string, @Body() UpdateCat: UpdateUser) {
    console.log(id, UpdateCat)
    return this.membersService.putUpdatemember(id, UpdateCat);
  }

  // @UseFilters(new HttpExceptionFilter())
  @Delete('/member/:id')
  delete(@Param('id') id: string): Promise<pakpoonUser> {
    return this.membersService.deleteMember(id);
  }

  // @UseFilters(new HttpExceptionFilter())
  @Get('pagination')
  async pagelimit(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('floor') floor: string,
    @Query('room') room: string,
    @Query('bednumber') bednumber: string,
    // @Query('lastname') lastname: string,
    // @Query('nickname') nickname: string,
    // @Query('fromday') fromday: string,
    // @Query('toDay') toDay: string
  ) {
    return this.membersService.getPageMember({
      page: Number(page),
      limit: Number(limit),
      floor: String(floor),
      room: String(room),
      bednumber: String(bednumber),
      // nickname: String(nickname),
      // fromday: String(fromday),
      // toDay: String(toDay)
    });
  }
  
  //LOGIN
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}




  // @Get('whoami')
  // @UseGuards(LocalAuthGuard)
  // showMe(@User('username') username: string) {
  //   return this.catsService.read(username);
  // }

//   @Get('find')
//   async finddata(@Body() body: TestKeyword): Promise<TestKeyRes[]> {
//     return this.catsService.finddata(body);
//   }
// }


//   @Get('find')
//   async finddata(@Query('name') name: string) {
//     return this.catsService.finddata(name);
//   }
// }
  //   return this.catsService.findAll({
  //     ...paginationDto,
  //     limit: paginationDto.limit > 10 ? 10 : paginationDto.limit
  //   })


//   @Get('find')
//   async finddata(): Promise<Cat[]> {
//     return this.catsService.finddata();
//   }

// }


