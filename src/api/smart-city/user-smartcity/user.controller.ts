import { Request, Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters, UseGuards, UsePipes, HttpCode, Req, Res, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto, CreateUserSmart } from 'src/dto/create';
import { UpdateUser } from 'src/dto/update';
import { TestRestponseType } from 'src/response/test.updateresponse';
import { JwtAuthGuard } from 'src/api/auth/jwt-auth.guard';
import { AuthService } from 'src/api/auth/auth.service';
import { ValidationPipe } from 'src/common/validation.pipe';
import { LocalAuthGuard } from 'src/api/auth/local-auth.guard';
import { userSmartService } from './user.service';
import { UserSmartCity } from './user.schema';
import { Response } from 'express';
const fs = require('fs');
@Controller('userSmart')
export class userSmartController {

  constructor(

    private readonly usersmartService: userSmartService,
    private authService: AuthService
  ) { }

  @Get('userAll')
  async getdata(): Promise<UserSmartCity[]> {
    return this.usersmartService.getMemberAll();
  }

  @Get(':img')
  async getImg(@Param('img') img: string, @Res() response: Response) {
    if (!fs.existsSync("./img/" + img)) {
      return response.status(404).send("File not found");
    }
    var image = fs.readFileSync("./img/" + img);
    var fileBuffer = Buffer.from(image, 'base64');
    return response.writeHead(200, {
      "Content-Type": "image/jpeg",
    }).end(fileBuffer);
  }

  @Get('user-by/:id')
  async getdataUser(@Param('id') id: string): Promise<UserSmartCity[]> {
    return this.usersmartService.getUserbyid(id);
  }
  @UsePipes(new ValidationPipe())
  @Post('Creuser')
  async saveData(@Body() body: CreateUserSmart): Promise<any> {
    return await this.usersmartService.postSaveMember(body);
  }

  @Put('/user/:id')
  update(@Param('id') id: string, @Body() UpdateCat: UpdateUser) {
    return this.usersmartService.putUpdatemember(id, UpdateCat);
  }

  @Delete('/deluser/:id')
  delete(@Param('id') id: string): Promise<UserSmartCity> {
    return this.usersmartService.deleteMember(id);
  }

  @Get('data/pagination')
  async pagelimit(
    @Query('province') province: string,
    @Query('district') district: string,
    @Query('sub_district') sub_district: string,
  ) {
    return this.usersmartService.getPageMember({
      province: String(province),
      district: String(district),
      sub_district: String(sub_district),
    });
  }

  @Get('data/userID')
  async pageSex(
    @Query('userID') userID: string,
  ) {
    return this.usersmartService.getPageUserID({
      userID: String(userID),
    });
  }


  @Get('user/searchUserID')
  async searchUserID(
    @Query('userID') userID: string,
  ) {
    return this.usersmartService.getUserID({
      userID: String(userID),
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


