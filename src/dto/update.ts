import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateApply {
    id: string;
    created: string;
    updated: string;
    type: string;
    details: string;
    topic: string;
    // img: string;
}

export class Updatehealth {
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
}

export class UpdateAppeal {
    id: string;
}

export class UpdatePetition {
    id: string;
    created: string;
    updated: string;
    topic: string;
    type: string;
}

export class UpdateProtest {
    id: string;
    created: string;
    updated: string;
    topic: string;
    type: string;
    name: string;
    status: string;
}
export class UpdateUser {
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

    lastday:string;

    // @IsNotEmpty()
    status:string;

    temperature:string;

    upperpressure:string;

    lowerpressure:string;

    bloodoxygen:string;

    pulse:string;

    bloodsugar:string;

    note:string;
    
}
export class UpdateUserAdmin {
    id: string;
    userid: string;
    password: string;
}
export class UpdateDataCar {

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
export class UpdateOrder {
    id: string;
    nameStore: string;
    Orderdate: string;
    status: string;
    image:string;
    serialNumber:string;
}
export class UpdateUserDelivery {
    id: string;
    name:string;
    type:string;
    price:string;
    image:string;
    created: string;
    updated: String;
}
export class UpdateUserRes {
    id: string;
    name:string;
    // type:string;
    // price:string;
    image:string;
    created: string;
    updated: String;
}
export class UpdateOrderDelivery {
    id: string; 
    Restaurantname: string;
    foodname: string;
    orderdate: string;
    price: string;
    created:string;
    updated:string;
}

export class UpdatediseaseDto {

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