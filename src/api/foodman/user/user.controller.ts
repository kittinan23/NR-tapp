import { Body, Controller, Get, Post, UsePipes,  } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUser } from 'src/dto/create';
import { AuthService } from 'src/api/auth/auth.service';
import { ValidationPipe } from 'src/common/validation.pipe';
@Controller('user')
export class UserController {

  constructor(

    private readonly membersService: UserService,
    private authService: AuthService
  ) { }

  @Get('memberAll')
  async getdata(): Promise<any[]> {
    return this.membersService.getMemberAll();
  }
  @UsePipes(new ValidationPipe())
  @Post('user')
  async saveData(@Body() body: CreateUser): Promise<any> {
    return await this.membersService.postSaveMember(body);
  }
}