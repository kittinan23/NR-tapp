import { ObjectID } from "typeorm";

export interface IAccesscontrol {
    id: string;
    created: string;
    updated: string;
    floor: string;
    room: string;
    bednumber: string;
    prefix: string;
    firstname: string;
    lastname: string;
    idcard: string;
    birthday: string;
    age: string;
    // position: string;
    sex: string;
    occupation: string;
    tel: string;
    firstday: string;
    lastday: string;
    status: string;
    // password: string;
    temperature: string;
    upperpressure: string;
    lowerpressure: string;
    bloodoxygen: string;
    pulse: string;
    bloodsugar: string;
    note: string;
}

export class IUserSmart {
    id: string;
    created: string;
    updated: string;
    prefix: string;
    name: string;
    lastname: string;
    sex: string;
    blood: string;
    telephone: string;
    housenumber: string;
    group: string;
    alley: string;
    road: string;
    province: string;
    district: string;
    sub_district: string;
    zipcode: string;
    userID: string;
}

export class IAdminSmart {
    id: string;
    created: string;
    updated: string;
    name: string;
    userid: string;
    password: string;
}

export class IemployeeSmart {
    id: string;
    created: string;
    updated: string;
    name: string;
    password: string;
}
export interface Iuser {
    id: string;
    created: string;
    updated: string;
    floor: string;
    room: string;
    bednumber: string;
    prefix: string;
    firstname: string;
    lastname: string;
    idcard: string;
    birthday: string;
    age: number;
    // position: string;
    sex: string;
    weight: number;
    height: number;
    nationality: string;
    religion: string;
    occupation: string;
    housenumber: string;
    group: number;
    tumbon: string;
    amphoe: string;
    junwad: string;
    // email: string;
    tel: string;
    firstday: string;
    lastday: string;
}
export interface IAccessCar {
    id: string;
    created: string;
    updated: string;
    serialnumber: string;
    Chassisnumber: string;
    station: string;
    type: string;
    brand: string;
    generation: string;
    model: string;
    color: string;
    status: string;
    year: string;
    price: string;
    registrationnumber: string;
    storagelocation: string;
    user: string;

}
export interface IBookOrder {
    id: string;
    nameStore: string;
    Orderdate: string;
    status: string;
    image: string;
    serialNumber: string;
    user: string;
    orderid: string;

}

export interface IBookRes {
    response_time: string;
    response_message: string;


}

export interface IBookAppeal {
    id: string;
    type: string;
    details: string;
    status: string;
    orderAppeal: string;
}
export interface IAccessDelivery {
    id: string;
    name: string;
    type: string;
    price: string;
    created: string;
    updated: String;
    image: String;
    restaurant: string;
    Restaurantname: string;
}
export interface IAccessRestaurant {
    id: string;
    name: string;
    created: string;
    status: String;
    image: String;
    pass: String;
}
export interface IAccessOrder {
    id: string;
    Restaurantname: string;
    image: string;
    created: string;
    updated: String;
    // orderdate: string;
    // pass: string;
    // status: string;
}

export interface IAccessApply {
    id: string;
    created: string;
    updated: string;
    type: string;
    details: string;
    topic: string;
}

export interface IAccesshealth {
    id: string;
    created: string;
    updated: string;
    weight: string;
    height: string;
    waistline: string;
    upper_blood1: string;
    lower_blood1: string;
    upper_blood2: string;
    lower_blood2: string;
    blood_sugar: string;
    BMI: string;
    proportion: string;
    userID: string;
}

type gps = {
    lat: Number,
    lng: Number
}

export interface IAccessAppeal {
    id: string;
    created: string;
    updated: string;
    day: string;
    month: string;
    year: string;
    time: string;
    type: string;
    details: string;
    topic: string;
    img: Array<String>
    gps: gps,
    Star: number,
    Comment: string,
    // usersmartID:string,
    userID: string;

}

export interface IAccessappointment {
    id: string;
    created: string;
    updated: string;
    day: string;
    month: string;
    year: string;
    time: string;
    type: string;
    details: string;
    topic: string;
    img: Array<String>
    gps: gps,
    Star: number,
    Comment: string,
    // usersmartID:string,
    userID: string;

}

export interface IAccessPetition {
    id: string;
    created: string;
    updated: string;
    type: string;
    topic: string;
}

export interface IAccessProtest {
    id: string;
    created: string;
    updated: string;
    type: string;
    topic: string;
    name: string;
    userID: string;
}

export interface IAccessdisease {
    id: string;
    created: string;
    updated: string;
    cardID: string;
    hospital: string;
    day: string;
    month: string;
    year: string;
    elderly: string;
    bedridden_patient: string;
    handicapped: string;
    congenital_disease: string;
    diabetes: string;
    lung_disease: string;
    kidney_disease: string;
    immunodeficiency: string;
    liver_disease: string;
    migraine: string;
    high_blood: string;
    thalassemia: string;
    heart_disease: string;
    allergy: string;
    epilepsy: string;
    other: string;
    userID: string;
}

export interface IAccessStar {
    // id: string;
    updated: string;
    Star: string;
    Comment: string;
}

export interface IAccesshappy {
    id: string;
    created: string;
    updated: string;
    happy1: string;
    happy2: string;
    happy3: string;
    happy4: string;
    happy5: string;
    happy6: string;
    happy7: string;
    happy8: string;
    happy9: string;
    happy10: string;
    happy11: string;
    happy12: string;
    happy13: string;
    happy14: string;
    happy15: string;
    happy_total: string;
    userID: string;
}

export interface IAccessdementia {
    id: string;
    created: string;
    updated: string;
    dementia1: string;
    dementia2: string;
    dementia3: string;
    dementia4: string;
    dementia5: string;
    dementia6: string;
    dementia7: string;
    dementia8: string;
    dementia9: string;
    dementia10: string;
    dementia11: string;
    dementia12: string;
    dementia13: string;
    dementia14: string;
    dementia_total: string;
    userID: string;
}

export interface IAccesshappyAll {
    id: string;
    created: string;
    updated: string;
    happyTotal: string;
    userID: string;
}

export interface IAccessstress {
    id: string;
    created: string;
    updated: string;
    stress1: string;
    stress2: string;
    stress3: string;
    stress4: string;
    stress5: string;
    stress6: string;
    stress7: string;
    stress8: string;
    stress9: string;
    stress10: string;
    stress11: string;
    stress12: string;
    stress13: string;
    stress14: string;
    stress15: string;
    stress16: string;
    stress17: string;
    stress18: string;
    stress19: string;
    stress20: string;
    stress_total: string;
    userID: string;
}

export class IAccessemployee {

    id: string;
    created: string;
    updated: string;
    affiliation: string;
    position: string;
    division: string;
    cotton: string;
    Employmenttype: String;
    hospital: String;
    prefix: string;
    name: string;
    lastname: string;
    sex: string;
    age: string;
    IDcard: string;
    nickname: string;
    status: string;
    tel: string;
    address: string;
    treatmentrights: string;
    job99: string;
    covid12: string;
    treatmentrights99: string;
    weight: string;
    height: string;
    BMI: string;
    proportion: string;
    waistline: string;
    congenital_disease: string;
    other_congenital_disease: string;
    sick: string;
    other_sick: string;
    accident: string;
    other_accident: string;
    job_position: string;
    working_life: string;
    hours_work: string;
    day_work: string;
    department: string;
    ot: string;
    eating_behavior1: string;
    eating_behavior2: string;
    eating_behavior3: string;
    drinking_alcohol1: string;
    drinking_alcohol2: string;
    smoke_often1: string;
    smoke_often2: string;
    exercise1: string;
    exercise2: string;
    exercise3: string;
    exercise4: string;
    covid1: string;
    covid2: string;
    Strain1: string;
    Strain2: string;
    Strain3: string;
    Strain4: string;
    Strain5: string;
    Strain6: string;
    Strain7: string;
    Strain8: string;
    Strain9: string;
    Strain10: string;
    Strain11: string;
    Strain12: string;
    Strain13: string;
    Strain14: string;
    Strain15: string;
    Strain16: string;
    Strain17: string;
    Strain18: string;
    Strain19: string;
    Strain20: string;
    debt_information: string;
    happy1: string;
    happy2: string;
    happy3: string;
    happy4: string;
    happy5: string;
    happy6: string;
    happy7: string;
    happy8: string;
    happy9: string;
    happy10: string;
    happy11: string;
    happy12: string;
    happy13: string;
    happy14: string;
    happy15: string;
    memory1: string;
    memory2: string;
    memory3: string;
    memory4: string;
    memory5: string;
    memory6: string;
    memory7: string;
    memory8: string;
    memory9: string;
    memory10: string;
    memory11: string;
    memory12: string;
    memory13: string;
    memory14: string;
    sumHappy: string;
    sumMemory: string;
    sumStrain: string;
    userID: string;
}

export class IAccesslifesurvey {

    id: string;
    created: string;
    updated: string;
    sex: string;
    age: string;
    religion: string;
    parent: string;
    timemonth: string;
    education: string;
    living: string;
    identity1: string;
    identity2: string;
    identity3: string;
    identity4: string;
    identity5: string;
    identity6: string;
    identity7: string;
    identity8: string;
    identity9: string;
    identity10: string;
    identity11: string;
    identity12: string;
    identity13: string;
    identity14: string;
    identity15: string;
    family16: string;
    family17: string;
    family18: string;
    family19: string;
    family20: string;
    family21: string;
    family22: string;
    family23: string;
    intellect24: string;
    intellect25: string;
    intellect26: string;
    intellect27: string;
    intellect28: string;
    intellect29: string;
    intellect30: string;
    intellect31: string;
    intellect32: string;
    intellect33: string;
    intellect34: string;
    friend35: string;
    friend36: string;
    friend37: string;
    friend38: string;
    friend39: string;
    friend40: string;
    community41: string;
    community42: string;
    community43: string;
    community44: string;
    community45: string;
    community46: string;
    community47: string;
    community48: string;
    sumidentity: string;
    sumfamily: string;
    sumintellect: string;
    sumfriend: string;
    sumcommunity: string;
    userID: string;
}