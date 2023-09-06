
import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from 'src/api/auth/auth.service';

// import { UserService } from 'src/workflow/users/users.service';

export default interface ICustomRequset extends Request {
  id?: string;
  tokenVersion?: number;
}

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(
    private readonly authenService:AuthService,
  ){}
  async use(req: Request, res: Response, next: Function) {
    //var dataMessage = await this.authenService.checkTokenVersion(req,res)   
    res.setHeader("now", Date.now());
    next();
  }
}


