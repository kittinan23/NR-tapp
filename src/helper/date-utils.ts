import moment = require('moment-timezone');

export class DateUtil{
    public static DEFAULT_FORMAT = "YYYY-MM-DDTH:mm:ss.SSS";
    public static DEFAULT_FORMAT2 = 'DD-MM-YYYY HH:mm:ss.SSSZ';
    public static MONGOOSE_FORMAT = 'YYYY-MM-DD HH:mm:ss.SSSZ';
    public static Timezone = {
        ASIA_BANGKOK:"Asia/Bangkok"
    };
    public static  getDate(format ? : string){
        return moment().tz(this.Timezone.ASIA_BANGKOK).format(format ? format : this.DEFAULT_FORMAT);
    }
    public static newMomentDate(date?,format ? : string){
        return moment(date).tz(this.Timezone.ASIA_BANGKOK).format(format ? format : this.DEFAULT_FORMAT);
    }
    public static getDateLocale(local : string,format ? : string){
        return moment().tz(this.Timezone.ASIA_BANGKOK).locale(local).format(format ? format : this.DEFAULT_FORMAT);
    }
    public static stringToDate(dateStr : string,format ? : string){
        return moment(dateStr,format ? format : this.DEFAULT_FORMAT).tz(this.Timezone.ASIA_BANGKOK);
    }

    public static createCurrentYearBymonth(month:String,format ? : string,add?:Number){
        return moment().month(parseInt(month+"")- (add ? 0:1)).tz(this.Timezone.ASIA_BANGKOK).format(format ? format : this.DEFAULT_FORMAT);
    }

    public static newDate(date,format ? : string){
        return new Date(date);
    }

    public static newTimeWithISODate(time,date?,format ? : string){
        var d = date ? new Date(`${date} ${time}`) : new Date(`${this.today("YYYY/MM/DD")} ${time}`);
        return d.toISOString();
    }

    public static today(format ? : string){
        return moment().tz(this.Timezone.ASIA_BANGKOK).format(format ? format : this.DEFAULT_FORMAT);
    }
    
    public static newISODate(date){
        return (new Date(date)).toISOString();
    }

    public static getDateForMongoose(format ? : string){
        var d = new Date();
        return d.toISOString();
    }

    public static dateToFormat(date,format,zone?){
        var d = moment(date,'YYYY-MM-DD').format(format);        
        return d;
    }

    public static stringDateFormatToDate(date){
        
        var d = moment(date,'DD-MM-YYYY HH:mm:ss');
        return d;
    }

    /**
     * Date time diff : Date1 - Date2
     * @param date1 
     * @param date2 
     * @param type ${years, months, weeks, days, hours, minutes, seconds}
     */
    public static datetimeDiff(date1,date2,type){
        var a = moment(date1).tz(this.Timezone.ASIA_BANGKOK)
        var b = moment(date2).tz(this.Timezone.ASIA_BANGKOK)
        return a.diff(b,type)
    }

    public static isPast(date){
        var a = new Date(date)
        var b = new Date()
        b.setHours(b.getHours()+7)
        console.log(a,b)
        return a < b;
    }

    /**
     * Get option for feature Date to String and Set Timezone in mongo 
     * @param date_key {key of date in schema}
     * @param format defalut ${%Y-%m-%dT%H:%M:%S.%LZ}
     */
    public static mongooseDateToStringOption(date_key:String,format?){
        return { 
            format: format ? format :'%Y-%m-%dT%H:%M:%S.%LZ', 
            date: date_key, 
            timezone: 'Asia/Bangkok' 
        } ;
    }

    /**
     * Date add day : date + day(1-366)
    */
   public static datetimeAdd(date,day,type){
        var a = moment(date,'YYYY-MM-DD').tz(this.Timezone.ASIA_BANGKOK)
        return a.add(day,type).format('YYYY-MM-DD')
    }

    /**
     * Get first and last date of current week
     * @param date date
     * @param option 1 = first, 2 = last
     */
    public static getFirstLastDateOfWeek(date:String,option:Number){
        var dateReturn;
        if(date && option){
            var date_time =new Date(DateUtil.dateToFormat(new Date(date.toString()),'YYYY-MM-DD 00:00:00.000Z'))
            var day = date_time.getDay();
            if(option == 1){
                dateReturn = new Date(date_time.getFullYear(), date_time.getMonth(), date_time.getDate() + (day == 0?-6:0)-day );/* 0?-6:1 วันจันทร์ */
            }
            else if(option == 2){
                dateReturn = new Date(date_time.getFullYear(), date_time.getMonth(), date_time.getDate() + (day == 0?0:6)-day );/* 0?0:7 วันเสาร์ */
            }
        }
        return dateReturn;
    }

    public static dateNowUTC() {
        var date= new Date()
        date.setHours(date.getHours()+7)
        return date;  
    };
    
    public static dateToken(exp:number) {
        var date = new Date(exp*1000)
        date.setHours(date.getHours()+7)
        return date;  
    };

}
