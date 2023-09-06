var crypto = require('crypto');
import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';

export class WordCut{
    public static wordCut(text:String){
        var key_name = [];
        var brr = ['-','*','.',',',' ',':',';','"',"'"];
        var wordcut = require('wordcut');
        wordcut.init();
        var text_search = wordcut.cut(text);
        var key = text_search.split("|");
        key.map(e => {
            key_name = key.filter(f => !brr.includes(f));
        });
        return key_name;
    }
}