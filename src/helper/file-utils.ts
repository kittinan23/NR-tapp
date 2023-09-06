var path = require('path');
import { HttpException, HttpStatus } from '@nestjs/common';
const fs = require('fs');

export class FileUtils{
    public static async removeImage(root_path:string,fileName: string) {
        try {    
            fs.unlinkSync(path.resolve(`${root_path}/${fileName}`));
        } catch (err) {
            throw new HttpException(`${err.message}`,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return 0;
    }
}