import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { DateUtil } from 'src/helper/date-utils';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const message = exception.message;


    var timezone = `${DateUtil.getDate()}`;
    response
      .status(status)
      .json({

        statusCode: status,
        timestamp: timezone,
        message: message,
        //timestamp: new Date().toISOString(),
        //path: request.url,
      });
  }
}