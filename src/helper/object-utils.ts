import * as mongoose from "mongoose";
const _ = require('lodash');

export class ObjectUtils{
    public static hasVal(obj) {
    const out = {};
    _(obj).forEach((value,key) => {
        if(key != "$init"){
        if (value!=null){
            out[key] = value;
        }
        }
    });
    return Object.keys(out).length >0;
    }


    public static getHasValue(obj) {
        const out = {};
        _(obj).forEach((value,key) => {
            if(key != "$init"){
                if (value!=null){
                    out[key] = value;
                }
            }
        });
        return out;
    }

    public static keyStringify(obj) {
        const out = {};
        _(obj).forEach((value,key) => {
            if(key != "$init"){
                if (value!=null){
                    out[key] = typeof value != 'string' ? JSON.stringify(value) : value;
                }
            }
        });
        return out;//Object.keys(out);
    }

    public static reverseString(s){
        return s.split("").reverse().join("");
    }

    public static checkStringNull(t) {
        if (t == null || t == undefined) {
            t = "";
        }
        return t;
    }

    public static mongooseObjectId(id){
        try {
            return mongoose.Types.ObjectId(id);
        } catch (error) {
            return null;
        }
    }

    public static filterObj(obj,filter) {
        const out = {};
        _(obj).forEach((value,key) => {
            if(key != "$init"){
                if (value == filter){
                    out[key] = value;
                }
            }
        });
        return out;
    }

    public static getMiles(me) {
        return me*0.000621371192;
    }
    
    public static getMeters(mi) {
        return mi*1609.344;
    }

    public static cloneObject(src) {
        // clone object
        return Object.assign({}, src);
      }

    
}