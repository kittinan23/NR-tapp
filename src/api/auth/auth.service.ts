import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import {adminService } from '../../api/smart-city/user-login/user.service';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private adminService: adminService
    ) { }

    async validateUser(userid: string, password: string): Promise<any> {

        const user = await this.adminService.getByEmail(userid);

        var comparePassword = await bcrypt.compare(password, user.password);

        if (!user) {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }
        if (comparePassword) {
            const { _id,
                created,
                updated,
                name,
                userid,
                password
            } = user;
            return {
                id: _id,
                created,
                updated,
                name,
                userid,
                password
            };
        }
        return null;
    }

    async login(user: any) {

        const payload = {
            id: user.id,
            created: user.created,
            updated: user.updated,
            name: user.name,
            userid: user.userid,
            password: user.password
        };

        var token = {
            access_token: this.jwtService.sign(payload),
        };
        return token;
    }
}
