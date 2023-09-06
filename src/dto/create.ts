import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";


export class CreateApplyDto {

    id: string;
    created: string;
    updated: string;

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    details: string;

    @IsNotEmpty()
    topic: string;

    // img: string;
}

type gps = {
    lat: Number,
    lng: Number
}

type status = {
    wait: 'รอการตรวจสอบ'
}
export class Createappeal {

    id: string;
    created: string;
    updated: string;

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    details: string;

    @IsNotEmpty()
    topic: string;

    @IsNotEmpty()
    img: Array<String>;

    gps: gps;

    Star: number;

    Comment: string;

    status: 'รอการตรวจสอบ';

    userID: string;

    admin_start: string;

    admin_end: string;

    edit: string;

    detail_edit: string;

    add_img: Array<string>;

    day: string;

    month: string;

    year: string;

    time: string;
}

export class Createappointment {

    id: string;
    created: string;
    updated: string;

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    details: string;

    @IsNotEmpty()
    topic: string;

    @IsNotEmpty()
    img: Array<String>;

    gps: gps;

    Star: number;

    Comment: string;

    status: 'รอการตรวจสอบ';

    userID: string;

    admin_start: string;

    admin_end: string;

    edit: string;

    detail_edit: string;

    add_img: Array<string>;

    day: string;

    month: string;

    year: string;

    time: string;
}

export class CreateRes {
    status: string;
    response_message: string;
}

export class submit {

    detail_edit: string;
    add_img: Array<string>;
}

export class CreateStar {

    id: string;
    created: string;
    updated: string;
    Star: string;
    Comment: string;
    userID: string;
}
export class CreatePetition {

    id: string;
    created: string;
    updated: string;

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    topic: string;

    // img: string;
}

export class CreateProtest {

    id: string;
    created: string;
    updated: string;
    type: string;
    topic: string;
    name: string;
    status: string;
    userID: string;
    // img: string;
}


export class CreateUserSmart {
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

export class CreateAdminSmart {
    id: string;
    created: string;
    updated: string;
    name: string;
    userid: string;
    password: string;
}
export class CreateUserDto {
    id: string;
    created: string;
    updated: string;

    floor: string;
    room: string;

    // @IsNotEmpty()
    bednumber: string;

    // @IsNotEmpty()
    prefix: string;

    // @IsNotEmpty()
    firstname: string;

    // @IsNotEmpty()
    lastname: string;

    // @IsNotEmpty()
    idcard: string;

    // @IsNotEmpty()
    birthday: string;

    // @IsNotEmpty()
    age: string;

    // @IsNotEmpty()
    sex: string;

    // @IsNotEmpty()
    occupation: string;

    // @IsNotEmpty()
    // @MinLength(10)
    // @MaxLength(10)
    tel: string;

    firstday: string;

    lastday: string;

    // @IsNotEmpty()
    status: string;

    temperature: string;

    upperpressure: string;

    lowerpressure: string;

    bloodoxygen: string;

    pulse: string;

    bloodsugar: string;

    note: string;

}

export class CreateUser {
    id: string;
    created: string;
    updated: string;
    floor: string;
    room: string;
    prefix: string;
    firstname: string;
    lastname: string;
    idcard: string;
    bednumber: string;
    birthday: string;
    age: number;
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
    email: string;
    tel: string;
    firstday: string;
    lastday: string;
}
export class CreateCarDto {
    id: string;
    created: string;
    updated: string;
    @IsNotEmpty()
    serialnumber: string;

    @IsNotEmpty()
    Chassisnumber: string;

    @IsNotEmpty()
    station: string;

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    brand: string;

    @IsNotEmpty()
    generation: string;

    @IsNotEmpty()
    model: string;

    @IsNotEmpty()
    color: string;

    @IsNotEmpty()
    status: string;

    @IsNotEmpty()
    year: string;

    @IsNotEmpty()
    price: string;

    @IsNotEmpty()
    registrationnumber: string;

    @IsNotEmpty()
    storagelocation: string;


}
export class CreateBed {
    id: string;
    bednumber: string;
    // Orderdate: string;
    status: string;
    // image: string;
    // serialNumber: string;
}

export class CreateOrderDto {
    id: string;
    nameStore: string;
    Orderdate: string;
    status: string;
    image: string;
    serialNumber: string;
    // Order: string;
    // Orderdate: string;
    // Status: string;
    // movietitle: string;
    // Orderdate: string;
    // showtime: string;
    // seat: string;
    // theatre: string;
}

export class CreateOrderAppealDto {
    id: string;
    type: string;
    details: string;
    status: string;
    orderAppeal: string;
}
export class CreateUserDelivery {
    id: string;
    name: string;
    type: string;
    price: string;
    created: string;
    updated: String;
    image: string;
    Restaurantname: string;
}
export class CreateUserRes {
    id: string;
    name: string;
    pass: string;
    status: string;
    image: string;
    created: string;
}

export class CreateOrderDelivery {
    id: string;
    Restaurantname: string;
    image: string;
    pass: string;
    orderdate: string;
    status: string;
    created: string;
    updated: String;
}

export class CreatehealthDto {

    id: string;
    created: string;
    updated: string;

    @IsNotEmpty()
    weight: string;

    @IsNotEmpty()
    height: string;

    @IsNotEmpty()
    waistline: string;

    @IsNotEmpty()
    upper_blood1: string;

    @IsNotEmpty()
    lower_blood1: string;

    @IsNotEmpty()
    upper_blood2: string;

    @IsNotEmpty()
    lower_blood2: string;

    blood_sugar: string;

    BMI: string;

    proportion: string;

    userID: string;
}

export class CreatediseaseDto {

    id: string;
    created: string;
    updated: string;

    @IsNotEmpty()
    cardID: string;

    @IsNotEmpty()
    hospital: string;

    @IsNotEmpty()
    day: string;

    @IsNotEmpty()
    month: string;

    @IsNotEmpty()
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

export class CreatehappyDto {

    id: string;
    created: string;
    updated: string;

    @IsNotEmpty()
    happy1: string;

    @IsNotEmpty()
    happy2: string;

    @IsNotEmpty()
    happy3: string;

    @IsNotEmpty()
    happy4: string;

    @IsNotEmpty()
    happy5: string;

    @IsNotEmpty()
    happy6: string;

    @IsNotEmpty()
    happy7: string;

    @IsNotEmpty()
    happy8: string;

    @IsNotEmpty()
    happy9: string;

    @IsNotEmpty()
    happy10: string;

    @IsNotEmpty()
    happy11: string;

    @IsNotEmpty()
    happy12: string;

    @IsNotEmpty()
    happy13: string;

    @IsNotEmpty()
    happy14: string;

    @IsNotEmpty()
    happy15: string;

    happy_total: string;

    userID: string;
}

export class CreateydementiaDto {

    id: string;
    created: string;
    updated: string;

    @IsNotEmpty()
    dementia1: string;

    @IsNotEmpty()
    dementia2: string;

    @IsNotEmpty()
    dementia3: string;

    @IsNotEmpty()
    dementia4: string;

    @IsNotEmpty()
    dementia5: string;

    @IsNotEmpty()
    dementia6: string;

    @IsNotEmpty()
    dementia7: string;

    @IsNotEmpty()
    dementia8: string;

    @IsNotEmpty()
    dementia9: string;

    @IsNotEmpty()
    dementia10: string;

    @IsNotEmpty()
    dementia11: string;

    @IsNotEmpty()
    dementia12: string;

    @IsNotEmpty()
    dementia13: string;

    @IsNotEmpty()
    dementia14: string;

    dementia_total: string;

    userID: string;
}

export class CreatehappyAllDto {

    id: string;
    created: string;
    updated: string;
    happyTotal: string;
    userID: string;
}

export class CreatestressDto {

    id: string;
    created: string;
    updated: string;

    @IsNotEmpty()
    stress1: string;

    @IsNotEmpty()
    stress2: string;

    @IsNotEmpty()
    stress3: string;

    @IsNotEmpty()
    stress4: string;

    @IsNotEmpty()
    stress5: string;

    @IsNotEmpty()
    stress6: string;

    @IsNotEmpty()
    stress7: string;

    @IsNotEmpty()
    stress8: string;

    @IsNotEmpty()
    stress9: string;

    @IsNotEmpty()
    stress10: string;

    @IsNotEmpty()
    stress11: string;

    @IsNotEmpty()
    stress12: string;

    @IsNotEmpty()
    stress13: string;

    @IsNotEmpty()
    stress14: string;

    @IsNotEmpty()
    stress15: string;

    @IsNotEmpty()
    stress16: string;

    @IsNotEmpty()
    stress17: string;

    @IsNotEmpty()
    stress18: string;

    @IsNotEmpty()
    stress19: string;

    @IsNotEmpty()
    stress20: string;

    stress_total: string;

    userID: string;
}

export class CreateemployeeDto {

    id: string;
    created: string;
    updated: string;

    affiliation: string;

    Employmenttype: String;

    hospital: String;

    position: string;

    division: string;

    cotton: string;

    prefix: string;

    name: string;

    lastname: string;

    IDcard: string;

    nickname: string;

    status: string;

    sex: string;

    tel: string;

    age: string;

    address: string;

    treatmentrights: string;

    treatmentrights99: string;

    weight: string;

    height: string;

    proportion: string;

    BMI: string;

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

    job99: string;

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

    covid12: string;

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

export class CreatelifesurveyDto {

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