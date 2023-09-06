import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    BadGatewayException,
    BadRequestException,
    CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
//import { catchError,timeout } from 'rxjs/operator';