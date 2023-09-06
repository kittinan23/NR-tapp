
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
// import { IUser } from 'src/database/interfaces/users.interfaces';


@Injectable()
export class ValidationPipe implements PipeTransform<any>{
    async transform(value: any, { metatype }: ArgumentMetadata) {
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = plainToClass(metatype, value);
        const errors = await validate(object);

        if (errors.length > 0) {
            const constraints = errors.map(m => m.constraints);
            if (constraints.length > 0) {
                var constraint = constraints[0];
                var message = Object.keys(constraint).map(key => constraint[key]);
                if (message.length > 0) {
                    throw new HttpException(message[message.length - 1], HttpStatus.BAD_REQUEST);
                }
            }
            throw new HttpException('Validation faild.', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return value;
    }
    private toValidate(metatype: Function): boolean {
        const types: Function[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);

    }
}