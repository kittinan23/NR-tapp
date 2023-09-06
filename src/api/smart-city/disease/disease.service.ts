import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Createappeal, CreateApplyDto, CreatediseaseDto, CreatehealthDto } from 'src/dto/create';
import { TestRestponseType } from 'src/response/test.updateresponse';
import moment = require('moment-timezone');
import { IAccessAppeal, IAccessApply, IAccesscontrol, IAccessdisease, IAccesshealth } from 'src/database/accesscontrol.interface';
import { ClassConstants } from 'src/common/constants/class.constants';
import { UpdateApply, UpdatediseaseDto, Updatehealth } from 'src/dto/update';
import { searchApply, searchUserdisease, searchUserHealth } from 'src/interfaces/paginate';
import { DataResponseuserIDdisease, DataResponseuserIDhealth, DataTestResponseType, ResponseuserID, ResponseuserIDdisease, ResponseuserIDhealth, TestResponseApply, TestResponseType } from 'src/response/pagerespon';
import { appealsmart } from '../Appeal/appeal.schema';
import { diseasesmart } from './disease.schema';


@Injectable()
export class diseaseService {

  constructor(
    @InjectModel(diseasesmart.name) private readonly diseaseModel: Model<any>,
    // @InjectModel(appealsmart.name) private readonly appealModel: Model<any>,

  ) { }

  async getdiseaseAll(): Promise<diseasesmart[]> {
    return this.diseaseModel.find().exec();
    //return this.catModel.find({firstname:/tiph/}).exec();
  }

  async addhealth(body: CreatediseaseDto): Promise<any> {
    var timezone = moment().tz("Asia/Bangkok").format("DD-MM-YYYY HH:mm:ss")
    if (body) {
      var data: IAccessdisease = {
        id: body.id,
        created: body.created = timezone,
        updated: body.updated = timezone,
        cardID: body.cardID,
        hospital: body.hospital,
        day: body.day,
        month: body.month,
        year: body.year,
        elderly: body.elderly,
        bedridden_patient: body.bedridden_patient,
        handicapped: body.handicapped,
        congenital_disease: body.congenital_disease,
        diabetes: body.diabetes,
        lung_disease: body.lung_disease,
        kidney_disease: body.kidney_disease,
        immunodeficiency: body.immunodeficiency,
        liver_disease: body.liver_disease,
        migraine: body.migraine,
        high_blood: body.high_blood,
        thalassemia: body.thalassemia,
        heart_disease: body.heart_disease,
        allergy: body.allergy,
        epilepsy: body.epilepsy,
        other: body.other,
        userID: body.userID
      }
      const row = await this.diseaseModel.countDocuments({ userID: body.userID })
      if(row<=0){
        await this.diseaseModel.create(data)
      }else{
        var edit = await this.diseaseModel.findOne({ userID: body.userID });
        if(edit){
          edit.updated  = timezone;
          edit.cardID = body.cardID;
          edit.hospital = body.hospital;
          edit.day = body.day;
          edit.month = body.month;
          edit.year = body.year;
          edit.elderly = body.elderly;
          edit.bedridden_patient = body.bedridden_patient;
          edit.handicapped = body.handicapped;
          edit.congenital_disease = body.congenital_disease;
          edit.diabetes = body.diabetes;
          edit.lung_disease = body.lung_disease;
          edit.kidney_disease = body.kidney_disease;
          edit.immunodeficiency = body.immunodeficiency;
          edit.liver_disease = body.liver_disease;
          edit.migraine = body.migraine;
          edit.high_blood = body.high_blood;
          edit.thalassemia = body.thalassemia;
          edit.heart_disease = body.heart_disease;
          edit.allergy = body.allergy;
          edit.epilepsy = body.epilepsy;
          edit.other = body.other;
          edit.save()
        }
      }
    }
    throw new HttpException("บันทึกข้อมูลสำเร็จ ...", HttpStatus.OK)
  }

  async deletehealth(id: string): Promise<diseasesmart> {
    if (!id) {
      throw new HttpException(ClassConstants.ErrorMessage.ParamiterInvalid, HttpStatus.BAD_REQUEST);
    }
    return await this.diseaseModel.findOneAndDelete({ _id: id })
  }

  async getPageApply(query: searchApply): Promise<any> {
    var comd: Object = new Object();
    if (query.topic) {
      comd['topic'] = { $regex: query.topic }
    }
    var datalimit = await this.diseaseModel.find(comd);
    let details = []
    let type = ""
    if (datalimit && datalimit.length > 0) {
      datalimit.forEach(data => {
        type = data.type
        details.push(data.details)
      });
    }
    return {
      type: type,
      details: details
    }
  }

  async finddata(query:searchUserdisease): Promise<any> {

    // const skippedItems = (query.page - 1) * query.limit;

    var comd: Object = new Object();

    if (query.userID) {
      comd['userID'] = { $eq: query.userID }
    }

    var res: ResponseuserIDdisease = new ResponseuserIDdisease();
    res.data = new Array<DataResponseuserIDdisease>();

    var total = await this.diseaseModel.find(comd).countDocuments();
    res.total = total;

    var datalimit = await this.diseaseModel.find(comd);

    if (datalimit && datalimit.length > 0) {

      datalimit.forEach(data => {
        var dataOut: DataResponseuserIDdisease = new DataResponseuserIDdisease();

        dataOut._id = data._id;
        dataOut.created = data.created;
        dataOut.updated = data.updated;
        dataOut.cardID  = data.cardID;
        dataOut.hospital  = data.hospital;
        dataOut.day = data.day;
        dataOut.month = data.month;
        dataOut.year = data.year;
        dataOut.elderly = data.elderly;
        dataOut.bedridden_patient = data.bedridden_patient;
        dataOut.handicapped = data.handicapped;
        dataOut.congenital_disease = data.congenital_disease;
        dataOut.diabetes = data.diabetes;
        dataOut.lung_disease = data.lung_disease;
        dataOut.kidney_disease = data.kidney_disease;
        dataOut.immunodeficiency = data.immunodeficiency;
        dataOut.liver_disease = data.liver_disease;
        dataOut.migraine = data.migraine;
        dataOut.high_blood = data.high_blood;
        dataOut.thalassemia = data.thalassemia;
        dataOut.heart_disease = data.heart_disease;
        dataOut.allergy = data.allergy;
        dataOut.epilepsy = data.epilepsy;
        dataOut.other = data.other;
        dataOut.userID = data.userID;

        res.data.push(dataOut);
      });
    }
    return res
  }
}