var crypto = require('crypto');
import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';

export class KeyGenerate{
/**
 * Calculates the MD5 hash of a string.
 *
 * @param  {String} string - The string (or buffer).
 * @return {String}        - The MD5 hash.
 */ 
    public static md5(string) {
        return crypto.createHash('md5').update(string).digest('hex');
    }

    public static sha512(string) {
        return crypto.createHash('sha512').update(string).digest('hex');
    }

    public static anyString(length){
        let characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result           = '';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    public static anyStringNum(length){
        let characters= '0123456789';
        let result           = '';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    public static mongoObjectId() {
        var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
        return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
    };
}