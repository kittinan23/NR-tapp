import { DocumentDefinition, Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable, UploadedFile } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Createappeal, Createappointment, CreateRes, CreateStar, submit } from 'src/dto/create';
import moment = require('moment-timezone');
import { IAccessAppeal, IAccessdisease, IAccessStar, IBookOrder, IBookRes } from 'src/database/accesscontrol.interface';
import { ClassConstants } from 'src/common/constants/class.constants';
import { UpdateAppeal } from 'src/dto/update';
import { annoying, appealsmart, drainageditch, education, electric, pension, fund, garbage, other, plumbing, road, tree, emergency, appointment, paresthesia, Hydrotherapy, firesmart } from 'src/api/smart-city/Appeal/appeal.schema';
import { searchDataAppeal, searchDataSmart, searchID, searchStatus, searchUser, searchuserIDApply } from 'src/interfaces/paginate';
import { DataResponsestatus, DataResponseuserID, DataResponseuserIDAppeal, ResponseSmart, Responsestatus, ResponseuserID, ResponseuserIDAppeal } from 'src/response/pagerespon';
import { json, query } from 'express';
import { UserSmartCity } from '../user-smartcity/user.schema';
import { AdminSmartCity } from '../user-login/user.schema';
const axios = require('axios');
const qs = require('qs');
const fs = require('fs');
@Injectable()
export class appealService {

  constructor(
    @InjectModel(appealsmart.name) private readonly appealModel: Model<any>,
    @InjectModel(electric.name) private readonly eletricModel: Model<any>,
    @InjectModel(road.name) private readonly roadModel: Model<any>,
    @InjectModel(plumbing.name) private readonly plumbingModel: Model<any>,
    @InjectModel(tree.name) private readonly treeModel: Model<any>,
    @InjectModel(drainageditch.name) private readonly drainageditchModel: Model<any>,
    @InjectModel(annoying.name) private readonly annoyingModel: Model<any>,
    @InjectModel(garbage.name) private readonly garbageModel: Model<any>,
    @InjectModel(pension.name) private readonly pensionModel: Model<any>,
    @InjectModel(fund.name) private readonly fundModel: Model<any>,
    @InjectModel(education.name) private readonly educationModel: Model<any>,
    @InjectModel(other.name) private readonly otherModel: Model<any>,
    @InjectModel(emergency.name) private readonly emergencyModel: Model<any>,
    @InjectModel(appointment.name) private readonly appointmentModel: Model<any>,
    @InjectModel(UserSmartCity.name) private readonly UserSmartModel: Model<any>,
    @InjectModel(AdminSmartCity.name) private readonly AdminSmartModel: Model<any>,
    @InjectModel(appealsmart.name) private readonly testModel: Model<any>,
    @InjectModel(paresthesia.name) private readonly paresthesiaModel: Model<any>,
    @InjectModel(Hydrotherapy.name) private readonly HydrotherapyModel: Model<any>,
    @InjectModel(firesmart.name) private readonly fireModel: Model<any>,
  ) { }

  async getAppealAll(): Promise<appealsmart[]> {
    return this.appealModel.find().exec();
  }

  // async getMemberAll(): Promise<AdminSmartCity[]> {
  //   const adminSmartData = await this.adminSmartModel.find().exec();

  //   // const otherTableData = await this.otherTableModel.find().exec();
  //   // const combinedData = [...adminSmartData, ...otherTableData];

  //   return adminSmartData; // หรือ combinedData ถ้าคุณรวมข้อมูลจากตารางอื่นๆ ด้วย
  // }


  async getApp(status: string): Promise<DocumentDefinition<any>[]> {
    const statusText = {
      1: "รอตรวจสอบ",
      2: "กำลังดำเนินการ",
      3: "เสร็จสิ้น",
    }[status]
  
    const apps = await this.appealModel.find({ status: statusText }).lean().exec()

    const users = await Promise.all(
      apps.map(async app => {
        const userData = await this.UserSmartModel.findOne({ userID: app.userID }).lean().exec()
        return userData
      })
    )
  
    if (statusText !== "รอตรวจสอบ") {
      const admins = await Promise.all(
        apps.map(async app => {
          const adminData = await this.AdminSmartModel.findOne({ _id: statusText === "กำลังดำเนินการ" ? app.admin_start : app.admin_end }).lean().exec()
          return adminData
        })
      )
      apps.forEach((app, i) => {
        app.fullname = users[i]['prefix'] + users[i]['name'] + " " + users[i]['lastname']
        app.adminData = admins[i]
      })
    } else {
      apps.forEach((app, i) => {
        app.fullname = users[i]['prefix'] + users[i]['name'] + " " + users[i]['lastname']
      })
    }
    return apps

  }

//   async getrole(role: string): Promise<DocumentDefinition<any>[]> {
//   const roles = {
//     user: "user", // หากต้องการเพิ่มหน้าที่อื่น ๆ ให้เพิ่มเติมตามต้องการ
//     admin: "admin",
//     // admin_end: "เสร็จสิ้น",
//   }[role]

//   const apps = await this.appealModel.find({ [role]: true }).lean().exec()

//   const users = await Promise.all(
//     apps.map(async app => {
//       const userData = await this.UserSmartModel.findOne({ userID: app.userID }).lean().exec()
//       return userData
//     })
//   )

//   const admins = await Promise.all(
//     apps.map(async app => {
//       const adminData = await this.AdminSmartModel.findOne({ _id: app[role] }).lean().exec()
//       return adminData
//     })
//   )

//   apps.forEach((app, i) => {
//     app.fullname = users[i]['prefix'] + users[i]['name'] + " " + users[i]['lastname']
//     app.adminData = admins[i]
//   })

//   return apps
// }

  async finddata(query: searchUser): Promise<any> {

    var comd: Object = new Object();

    if (query.userID) {
      comd['userID'] = { $eq: query.userID }
    }

    var res: ResponseuserID = new ResponseuserID();
    res.data = new Array<DataResponseuserID>();

    var total = await this.appealModel.find(comd).countDocuments();
    res.total = total;

    var datalimit = await this.appealModel.find(comd);

    if (datalimit && datalimit.length > 0) {

      datalimit.forEach(data => {
        var dataOut: DataResponseuserID = new DataResponseuserID();

        dataOut._id = data._id;
        dataOut.created = data.created;
        dataOut.updated = data.updated;
        dataOut.status = data.status;
        dataOut.type = data.type;
        dataOut.details = data.details;
        dataOut.topic = data.topic;
        dataOut.gps = data.gps;
        dataOut.img = data.img;
        dataOut.Star = data.Star;
        dataOut.Comment = data.Comment;
        dataOut.userID = data.userID;

        res.data.push(dataOut);
      });
    }

    return res
  }

  async findstatus(query: searchStatus): Promise<any> {

    var comd: Object = new Object();

    if (query.status) {
      comd['status'] = { $eq: query.status }
    }

    if (query.topic) {
      comd['topic'] = { $eq: query.topic }
    }


    var res: Responsestatus = new Responsestatus();
    var total = await this.appealModel.find(comd).countDocuments();
    res.total = total;

    return res
  }

  async getSearchAppeal(userID: String): Promise<appealsmart[]> {
    return this.appealModel.find({
      userID: userID,
    });
  }
  token = {
    electric: "5TSF0TOZbHTuyL7173iVTt0WscFYwdvv8qclTm95S1W",
    road: '5TSF0TOZbHTuyL7173iVTt0WscFYwdvv8qclTm95S1W',
    plumbing: "5TSF0TOZbHTuyL7173iVTt0WscFYwdvv8qclTm95S1W",
    tree: "5TSF0TOZbHTuyL7173iVTt0WscFYwdvv8qclTm95S1W",
    drainageditch: "5TSF0TOZbHTuyL7173iVTt0WscFYwdvv8qclTm95S1W",
    annoying: "5TSF0TOZbHTuyL7173iVTt0WscFYwdvv8qclTm95S1W",
    garbage: "5TSF0TOZbHTuyL7173iVTt0WscFYwdvv8qclTm95S1W",
    pension: "5TSF0TOZbHTuyL7173iVTt0WscFYwdvv8qclTm95S1W",
    fund: "5TSF0TOZbHTuyL7173iVTt0WscFYwdvv8qclTm95S1W",
    education: "5TSF0TOZbHTuyL7173iVTt0WscFYwdvv8qclTm95S1W",
    other: "5TSF0TOZbHTuyL7173iVTt0WscFYwdvv8qclTm95S1W",
    emergency: "5TSF0TOZbHTuyL7173iVTt0WscFYwdvv8qclTm95S1W",
    appointment: "5TSF0TOZbHTuyL7173iVTt0WscFYwdvv8qclTm95S1W",
    test: "5TSF0TOZbHTuyL7173iVTt0WscFYwdvv8qclTm95S1W",
    paresthesia: "5TSF0TOZbHTuyL7173iVTt0WscFYwdvv8qclTm95S1W",
    Hydrotherapy: "5TSF0TOZbHTuyL7173iVTt0WscFYwdvv8qclTm95S1W",
    fire: "5TSF0TOZbHTuyL7173iVTt0WscFYwdvv8qclTm95S1W"
  }

  generateRandomString() {
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length
    let randomString = '';
    for (let i = 0; i < 20; i++) {
      randomString += characters.charAt((Math.random() * charactersLength) - 1)
    }
    return randomString + ".jpg";
  }
  ImageUpload(data) {
    let buff = Buffer.from(data, 'base64');
    let filename = this.generateRandomString()
    fs.writeFileSync("./img/" + filename, buff);
    return filename
  }
  async notify(type: string, details: string, topic: string, userID: string) {
    var user = await this.UserSmartModel.findOne({ userID })
    const url_line_notification = "https://notify-api.line.me/api/notify";
    const dataMessage = qs.stringify({
      message: ` เรื่อง : ${type} 
    รายละเอียด : ${details} 
    ชื่อผู้แจ้ง : ${user.prefix + ' ' + user.name + ' ' + user.lastname}
    โทร : ${user.telephone} 
    ที่อยู่ : ${"บ้านเลขที่" + user.housenumber + ' ' + "ม." + user.group + ' ' + "ซอย" + user.alley + ' ' + "ถนน" + user.road + ' ' + "ตำบล" + user.sub_district + ' ' + "อำเภอ" + user.district + ' ' + "จังหวัด" + user.province}
    รบกวนตรวจสอบที่ระบบ : https://nr-smartcity-dashboard.netlify.app/login.html` ,
    });
    const config = {
      method: 'post',
      url: url_line_notification,
      headers: {
        Authorization: `Bearer ${this.token[topic]}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: dataMessage,
    };
    //test
    await axios(config).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    });
  }

  async notifyUser(type: string, details: string, topic: string, userID: string, day: string, month: string, year: string, time: string,) {
    var user = await this.UserSmartModel.findOne({ userID })
    const url_line_notification = "https://notify-api.line.me/api/notify";
    const dataMessage = qs.stringify({
      message: ` เรื่อง : ${type} 
    รายละเอียด : ${details} 
    ชื่อผู้แจ้ง : ${user.prefix + ' ' + user.name + ' ' + user.lastname}
    วันที่/เวลา : ${"วันที่ " + day + ' ' + month + ' ' + year + ' ' + "เวลา : " + time + " น."}
    โทร : ${user.telephone} 
    ที่อยู่ : ${"บ้านเลขที่" + user.housenumber + ' ' + "ม." + user.group + ' ' + "ซอย" + user.alley + ' ' + "ถนน" + user.road + ' ' + "ตำบล" + user.sub_district + ' ' + "อำเภอ" + user.district + ' ' + "จังหวัด" + user.province}
    รบกวนตรวจสอบที่ระบบ : https://nr-smartcity-dashboard.netlify.app/login.html` ,
    });
    const config = {
      method: 'post',
      url: url_line_notification,
      headers: {
        Authorization: `Bearer ${this.token[topic]}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: dataMessage,
    };

    await axios(config).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    });
  }

  async notifyImage(filename: string,message:string,topic:string) {
    const url_line_notification = "https://notify-api.line.me/api/notify";
    const dataMessage = qs.stringify({
      imageFile:'https://nr-api-smartcity-final.onrender.com/img/'+filename,
      message:message
    });
    const config = {
      method: 'post',
      url: url_line_notification,
      headers: {
        Authorization: `Bearer ${this.token[topic]}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: dataMessage,
    };
    await axios(config).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    });
  }


  async msgsend(msg: string, userID: string) {
    var raw = `{
      "to": "${userID}",
      "messages":[
        {
            "type":"text",
            "text":"${msg}"
        }]
      }`

    const config = {
      method: 'post',
      url: "https://api.line.me/v2/bot/message/push",
      headers: {
        Authorization: "Bearer Wtk1WxYxsr35LWFidG7buMdIGgoxvlVy3EoGHhUC+hT/53pNYVvCVGGmKH9JW0Y+PsNl0nqpP0OhNriqicCzPyCg7bV2Mu2H8QMWmslHjj6MSBCQJ58fdD2TGME1EPlFu9dm2TZ28BWyP16WCb59/AdB04t89/1O/w1cDnyilFU=",
        'Content-Type': 'application/json',
      },
      data: raw,
    };
    await axios(config).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    });
  }

  async flexSend(body: any, filesname: Array<string>) {
    var listimg = ''
    for (let i = 0; i < filesname.length; i++) {
      listimg += `{
        "type": "image",
        "url": "https://nr-api-smartcity-final.onrender.com/userSmart/${filesname[i]}",
        "offsetTop": "10px",
        "offsetBottom": "10px"
      }`
      if (i + 1 != filesname.length) {
        listimg += ','
      }
    }
    var raw = `{
      "to": "${body.userID}",
      "messages": [
        {
          "type": "flex",
          "altText": "การร้องเรียน",
          "contents": {
            "type": "bubble",
            "direction": "ltr",
            "header": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "image",
                  "url": "https://www.img.in.th/images/01af7b75edf0446a9e5f1a74ee7927cd.jpg"
                },
                {
                  "type": "text",
                  "text": "เทศบาลเมืองปากพูน",
                  "weight": "bold",
                  "align": "center",
                  "offsetTop": "20px",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "เลขที่ : ${body.total}",
                  "weight": "bold",
                  "align": "center",
                  "offsetTop": "20px",
                  "contents": []
                }
              ]
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "separator"
                },
                {
                  "type": "text",
                  "text": "เรื่อง : ${body.type}",
                  "weight": "bold",
                  "align": "start",
                  "offsetTop": "10px",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "หัวข้อ : ${body.topic}",
                  "weight": "bold",
                  "align": "start",
                  "offsetTop": "10px",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "คุณ : ${body.name}" ,
                  "weight": "bold",
                  "align": "start",
                  "offsetTop": "10px",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "รายละเอียด: ${body.details}" ,
                  "weight": "bold",
                  "align": "start",
                  "offsetTop": "10px",
                  "contents": []
                },
                ${listimg}
              ]
            },
            "footer": {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "uri",
                    "label": "ดูรายละเอียด",
                    "uri": "https://nr-smartcity-all.netlify.app/compailn/check_details?_id=${body._id}&key=${Number(body.total)}"
                  },
                  "color": "#8CBCF5FF",
                  "height": "sm",
                  "style": "primary"
                }
              ]
            }
          }
        }
      ]
    }`
    const config = {
      method: 'post',
      url: "https://api.line.me/v2/bot/message/push",
      headers: {
        Authorization: "Bearer Wtk1WxYxsr35LWFidG7buMdIGgoxvlVy3EoGHhUC+hT/53pNYVvCVGGmKH9JW0Y+PsNl0nqpP0OhNriqicCzPyCg7bV2Mu2H8QMWmslHjj6MSBCQJ58fdD2TGME1EPlFu9dm2TZ28BWyP16WCb59/AdB04t89/1O/w1cDnyilFU=",
        'Content-Type': 'application/json',
      },
      data: raw,
    };
    await axios(config).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    });
  }

  async addappeal(body: Createappeal): Promise<any> {
    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    var dataSave = null;
    if (body) {
      let filesname = []
      body.img.forEach(file => {
        let base64 = file.split(',')
        filesname.push(this.ImageUpload(base64[1]))
      })
      var data: IAccessAppeal = {
        id: body.id,
        created: body.created = timezone,
        updated: body.updated = timezone,
        day: body.day,
        month: body.month,
        year: body.year,
        time: body.time,
        type: body.type,
        details: body.details,
        topic: body.topic,
        img: filesname,
        gps: body.gps,
        Star: body.Star,
        Comment: body.Comment,
        userID: body.userID
      }
      await this.notify(data.type, data.details, body.topic, body.userID)
      filesname.forEach(async (file,index) => {
         await this.notifyImage(file,`ภาพที่ ${index+1}`,body.topic)
      })
      if (body.topic == 'electric') {
        await this.eletricModel.create(data);
      }
      if (body.topic == 'road') {
        await this.roadModel.create(data);
      }
      if (body.topic == 'plumbing') {
        await this.plumbingModel.create(data);
      }
      if (body.topic == 'tree') {
        await this.treeModel.create(data);
      }
      if (body.topic == 'drainageditch') {
        await this.drainageditchModel.create(data);
      }
      if (body.topic == 'annoying') {
        await this.annoyingModel.create(data);
      }
      if (body.topic == 'garbage') {
        await this.garbageModel.create(data);
      }
      if (body.topic == 'pension') {
        await this.pensionModel.create(data);
      }
      if (body.topic == 'fund') {
        await this.fundModel.create(data);
      }
      if (body.topic == 'education') {
        await this.educationModel.create(data);
      }
      if (body.topic == 'other') {
        await this.otherModel.create(data);
      }
      if (body.topic == 'emergency') {
        await this.emergencyModel.create(data);
      }
      if (body.topic == 'appointment') {
        await this.appointmentModel.create(data);
      }
      if (body.topic == 'test') {
        await this.testModel.create(data);
      }
      if (body.topic == 'paresthesia') {
        await this.paresthesiaModel.create(data);
      }
      if (body.topic == 'Hydrotherapy') {
        await this.HydrotherapyModel.create(data);
      }
      if (body.topic == 'fire') {
        await this.fireModel.create(data);
      }
      dataSave = await this.appealModel.create(data);
      const uid = dataSave.userID
      const userName = await this.UserSmartModel.findOne({ userID: uid })
      const total = await this.appealModel.countDocuments({ userID: uid })
      dataSave.total = total
      dataSave.name = userName.name + ' ' + userName.lastname
      await this.flexSend(dataSave, filesname)

    }

    throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  }

  // async addappointment(body: Createappointment): Promise<appealsmart> {
  //   var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
  //   var dataSave = null;
  //   if (body) {
  //     let filesname = []
  //     body.img.forEach(file => {
  //       let base64 = file.split(',')
  //       filesname.push(this.ImageUpload(base64[1]))
  //     })
  //     var data: IAccessAppeal = {
  //       id: body.id,
  //       created: body.created = timezone,
  //       updated: body.updated = timezone,
  //       day: body.day,
  //       month: body.month,
  //       year: body.year,
  //       time: body.time,
  //       type: body.type,
  //       details: body.details,
  //       topic: body.topic,
  //       img: filesname,
  //       gps: body.gps,
  //       Star: body.Star,
  //       Comment: body.Comment,
  //       userID: body.userID
  //     }
  //     await this.notifyUser(data.type, data.details, body.topic, body.userID, data.day, data.month, data.year, data.time)

  //     if (body.topic == 'appointment') {
  //       await this.appointmentModel.create(data);
  //     }
  //     if (body.topic == 'paresthesia') {
  //       await this.paresthesiaModel.create(data);
  //     }
  //     if (body.topic == 'Hydrotherapy') {
  //       await this.HydrotherapyModel.create(data);
  //     }
  //     dataSave = await this.appealModel.create(data);
  //     const uid = dataSave.userID
  //     const userName = await this.UserSmartModel.findOne({ userID: uid })
  //     const total = await this.appealModel.count({ userID: uid })
  //     dataSave.total = total
  //     dataSave.name = userName.name + ' ' + userName.lastname
  //     await this.flexSend(dataSave, filesname)

  //   }

  //   throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  // }


  async addRes(body: CreateRes, id: string): Promise<appealsmart> {
    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    if (body) {
      var data = await this.appealModel.findOne({ _id: id });
      if (data) {
        if (body.status === "send") {
          data.response_time = timezone
          data.response_message = body.response_message
          this.msgsend(body.response_message, data.userID)

          data.save()
        } else {
          data.response_time = "ไม่ส่งข้อความ"
          data.response_message = ""
          data.save()
        }
      } else {
        throw new HttpException("", HttpStatus.NOT_FOUND)
      }
    } else {
      throw new HttpException("", HttpStatus.BAD_REQUEST)
    }
    throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  }

  async deleteAppeal(id: string): Promise<appealsmart> {
    if (!id) {
      throw new HttpException(ClassConstants.ErrorMessage.ParamiterInvalid, HttpStatus.BAD_REQUEST);
    }
    return await this.appealModel.findOneAndDelete({ _id: id })
  }

  async editAppeal(id: string, user: UpdateAppeal): Promise<any> {
    var data = await this.appealModel.findOne({ _id: id });
    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    try {
      if (data) {
        data.status = data.status == "รอตรวจสอบ" ? "กำลังดำเนินการ" : "เสร็จสิ้น"
        if (data.status == "กำลังดำเนินการ") {
          data.edit = timezone
          data.admin_start = user.id
        } else if (data.status == "เสร็จสิ้น") {
          data.end = timezone
          data.admin_end = user.id
        }
        data.update = timezone

        data.save()
        return new HttpException("แก้ไขข้อมูลสำเร็จ ...", HttpStatus.OK)
      }
      else {
        return new HttpException("not found.", HttpStatus.NOT_FOUND)
      }
    }
    catch (e) {
      throw new HttpException(String(e), HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async addStar(_id: string, body: CreateStar): Promise<any> {
    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    if (body) {
      var data: IAccessStar = {
        updated: body.updated = timezone,
        Star: body.Star,
        Comment: body.Comment
      }
      var edit = await this.appealModel.findOne({ _id });
      if (edit) {
        edit.updated = timezone;
        edit.Star = body.Star;
        edit.Comment = body.Comment;
        edit.save()
      }
    }
    throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  }

  async getLineProfile(uid: String) {
    var url = "https://api.line.me/v2/bot/profile/" + uid
    var userData_line = await (await axios.get(url, {
      headers: {
        Authorization: 'Bearer Wtk1WxYxsr35LWFidG7buMdIGgoxvlVy3EoGHhUC+hT/53pNYVvCVGGmKH9JW0Y+PsNl0nqpP0OhNriqicCzPyCg7bV2Mu2H8QMWmslHjj6MSBCQJ58fdD2TGME1EPlFu9dm2TZ28BWyP16WCb59/AdB04t89/1O/w1cDnyilFU='
      }
    })).data
    return userData_line
  }

  async getPageUserID(query: searchID): Promise<any> {
    var comd: Object = new Object();
    if (query.id) {
      comd['id'] = { $eq: query.id }
    }
    var userData = JSON.parse(JSON.stringify(await this.UserSmartModel.findOne(comd)))
    var userData_line = await this.getLineProfile(query.id)
    return { ...userData, ...userData_line }
  }

  async getSubmit(body: submit, id: string): Promise<any> {
    if (body) {
      let filenames = []
      let end = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
      body.add_img.forEach(element => {
        filenames.push(this.ImageUpload(element))
      });
      let appeal = await this.appealModel.findOne({ _id: id }).exec()
      if (appeal) {
        appeal.updated = end;
        appeal.end = end;
        appeal.detail_edit = body.detail_edit
        appeal.add_img = filenames
        appeal.save()
      }
    } else {
      return HttpStatus.BAD_REQUEST
    }
  }

  async getAppeal(query: searchID): Promise<appealsmart[]> {
    var appeal = JSON.parse(JSON.stringify(await this.appealModel.findOne({ _id: query.id }).exec()));
    var uid = appeal.userID
    var userData = JSON.parse(JSON.stringify(await this.UserSmartModel.findOne({ userID: uid }).exec()));
    delete userData.created
    delete userData.updated
    var userDataLine = await this.getLineProfile(uid)
    userData = { ...userData, ...userDataLine }
    if (appeal.admin_start !== "") {
      let admin_startData = JSON.parse(JSON.stringify(await this.AdminSmartModel.findOne({ _id: appeal.admin_start }).exec()));
      userData.admin_startData = admin_startData
    }
    if (appeal.admin_end !== "") {
      let admin_endData = JSON.parse(JSON.stringify(await this.AdminSmartModel.findOne({ _id: appeal.admin_end }).exec()));
      userData.admin_endData = admin_endData
    }
    return { ...appeal, ...userData }
  }
}
