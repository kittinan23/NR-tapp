import * as mongoose from "mongoose";
const _ = require('lodash');
export class CheckFormatUtils{
    
    public static isEmail(search:string) {
        var serchfind;
        var regexp = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        serchfind = regexp.test(search);
        return serchfind;
    }

    public static checkStringBoolean(str:string){
        switch(str.toLowerCase().trim()){
            case "true": case "yes": case "1": return true;
            case "false": case "no": case "0": return false;
            default: return "";
        }
    }

    public static isObjectId(str:string){
        var ObjectId = require('mongoose').Types.ObjectId;
        return ObjectId.isValid(str);
    }

    public static thousands_separators(num)
    {
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }

    public static fmtMSS(d){
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

        var hDisplay = h > 0 ? h + (h == 1 ? ":" : ":") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? ":" : ":") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? "" : "") : "";
        // hDisplay = this.thousands_separators(hDisplay);
        return hDisplay + mDisplay + sDisplay; 
    }

    public static convertMiliseconds(ms) {
        var milliseconds = (ms % 1000) / 100;
        var seconds = Math.floor((ms / 1000) % 60);
        var minutes = Math.floor((ms / (1000 * 60)) % 60);
        var hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

        var t_hours = (hours < 10) ? "0" + hours : hours;
        var t_minutes = (minutes < 10) ? "0" + minutes : minutes;
        var t_seconds = (seconds < 10) ? "0" + seconds : seconds;
        return t_hours + ":" + t_minutes + ":" + t_seconds;
      };
    
}