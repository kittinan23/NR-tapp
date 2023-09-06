import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters, UseGuards,Request, UsePipes, HttpCode, Req, UseInterceptors, UploadedFiles, UploadedFile } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateUserDelivery } from 'src/dto/create';
import { TestDelivery, TestOrder, TestRestponseType } from 'src/response/test.updateresponse';
import { ValidationPipe } from 'src/common/validation.pipe';
// import { HttpExceptionFilter } from 'src/common/http-exception.filter';
import { Delivery } from './menu.schema';
import { UpdateUserDelivery } from 'src/dto/update';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/api/auth/jwt-auth.guard';
import { Observable } from 'rxjs/internal/Observable';
// import { User } from '@synap/nest/users/user.interfaces';
import { diskStorage } from 'multer';
import path = require('path');
import { v4 as uuidv4 } from 'uuid';
import { ObjectID } from 'typeorm';
import { stringify } from 'querystring';

@Controller('Menu')
export class DeliveryController {

  constructor(

    private readonly menuService: MenuService
  ) { }

  @Get('menuAll/:id')
  async getdataMenu(@Param('id') _id : ObjectID): Promise<Delivery[]> {
    return this.menuService.getMenuAll(_id);
  }

  @UsePipes(new ValidationPipe())
  @Post('addFood/:id')
  async saveData(@Body() body: CreateUserDelivery,@Param('id') _id : ObjectID): Promise<TestDelivery> {
    return await this.menuService.postSaveMenu(body,_id);
  }

  // @UseFilters(new HttpExceptionFilter())
  @Delete('/deleteMenu/:id')
  delete(@Param('id') id: string): Promise<Delivery> {
    return this.menuService.deleteMenu(id);
  }
  

  @Put('/edituser/:id')
  // @UseFilters(new HttpExceptionFilter())
  update(@Param('id') id: string, @Body() UpdateDelivery: UpdateUserDelivery) {
    console.log(id, UpdateDelivery)
    return this.menuService.putUpdatemember(id, UpdateDelivery);
  }

  // @UseFilters(new HttpExceptionFilter())
  @Get('pagination')
  async pagelimit(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('name') name: string,
    @Query('Restaurantname') Restaurantname: string,
    // @Query('type') restaurant: string,
    @Query('minPrice') minPrice: number,
    @Query('maxPrice') maxPrice: number,
    
  ) {
    return this.menuService.getPageMember({
      page: Number(page),
      limit: Number(limit),
      Restaurantname: String(Restaurantname),
      // type: String(type),
      name: String(name),
      minPrice: Number(minPrice),
      maxPrice: Number(maxPrice)
    });
  }
}
// @UseGuards(JwtAuthGuard)
//     @Post('upload')
//     @UseInterceptors(FileInterceptor('file', storage))
//     uploadFile(@UploadedFile() file, @Request() req): Observable<Object> {
//         const user: User = req.user;

//         return this.menuService.updateOne(user.id, {profileImage: file.filename}).pipe(
//             tap((user: User) => console.log(user)),
//             map((user:User) => ({profileImage: user.profileImage}))
//         )
//     }
