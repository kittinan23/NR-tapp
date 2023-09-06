export class TestResponseType {
    page: Number;
    total: Number;
    data: Array<DataTestResponseType>

}
export class DataTestResponseType {
    _id: string;
    created: string;
    updated: string;
    bednumber: string;
    prefix: string;
    firstname: string;
    lastname: string;
    idcard: string;
    birthday: string;
    age: string;
    sex: string;
    occupation: string;
    tel: string;
    firstday:string;
    lastday:string;
    status:string;
    temperature:string;
    upperpressure:string;
    lowerpressure:string;
    bloodoxygen:string;
    pulse:string;
    bloodsugar:string;
    note:string;
}

export class TestResponseTypeCar {
    page: Number;
    total: Number;
    data: Array<DataTestResponseTypeCar>

}
export class DataTestResponseTypeCar {
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

}

export class TestResponseApply {
    topic: string;
    // page: Number;
    // total: Number;
    // data: Array<DataTestResponseApply>
}
export class ResponseSmart {
    page: Number;
    total: Number;
    data: Array<DataResponseSmart>

}
export class DataResponseSmart {
    _id: string;
    created: string;
    updated: string;
    prefix: string;
    name: string;
    lastname: string;
    sex: string;
    telephone: string;
    housenumber:string;
    group:string;
    alley:string;
    road:string;
    province:string;
    district:string;
    sub_district:string;
    zipcode:string;
    userID:string;
}

export class ResponseuserIDApply {
    page: Number;
    total: Number;
    data: Array<DataResponseuserIDApply>

}
export class DataResponseuserIDApply {
    _id: string;
    created: string;
    updated: string;
    prefix: string;
    name: string;
    lastname: string;
    sex: string;
    telephone: string;
    housenumber:string;
    group:string;
    alley:string;
    road:string;
    province:string;
    district:string;
    sub_district:string;
    zipcode:string;
    userID:string;
}

export class Responsestatus {
    page: Number;
    total: Number;
    data: Array<DataResponsestatus>

}
export class DataResponsestatus {
    _id: string;
    created: string;
    updated: string;
    type: string;
    details: string;
    topic: string;
    status: string;
    img: string;
}


export class ResponseuserID {
    page: Number;
    total: Number;
    data: Array<DataResponseuserID>

}
export class DataResponseuserID {
    _id: string;
    created: string;
    updated: string;
    status: string;
    type: string;
    details: string;
    topic: string;
    gps: string;
    userID:string;
    Star: string;
    Comment:string;
    img: Array<String>;
}

export class ResponseuserIDhealth {
    page: Number;
    total: Number;
    data: Array<DataResponseuserIDhealth>

}
export class DataResponseuserIDhealth {
    _id: string;
    created: string;
    updated: string;
    weight: string;
    height: string;
    waistline: string;
    upper_blood1: string;
    lower_blood1: string;
    upper_blood2:string;
    lower_blood2: string;
    blood_sugar: string;
    BMI: string;
    proportion: string;
    userID: string;
}

export class ResponseuserIDdisease {
    page: Number;
    total: Number;
    data: Array<DataResponseuserIDdisease>

}
export class DataResponseuserIDdisease {
    _id: string;
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

export class ResponseuserIDprotest {
    page: Number;
    total: Number;
    data: Array<DataResponseuserIDprotest>

}
export class DataResponseuserIDprotest {
    _id: string;
    created: string;
    updated: string;
    status: string;
    type: string;
    topic: string;
    name: string;
    userID:string;
}

export class ResponseuserIDhappy {
    page: Number;
    total: Number;
    data: Array<DataResponseuserIDhappy>

}
export class DataResponseuserIDhappy {
    _id: string;
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
    userID: string;
}

export class ResponseuserIDdementia {
    page: Number;
    total: Number;
    data: Array<DataResponseuserIDdementia>

}
export class DataResponseuserIDdementia {
    _id: string;
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
    userID: string;
}

export class ResponseuserIDAppeal {
    page: Number;
    total: Number;
    data: Array<DataResponseuserIDAppeal>

}
export class DataResponseuserIDAppeal {
    _id: string;
    created: string;
    updated: string;
    status: string;
    img: string;
    type: string;
    details: string;
    topic: string;
    gps: string;
}

export class ResponseuserIDstress {
    page: Number;
    total: Number;
    data: Array<DataResponseuserIDstress>

}
export class DataResponseuserIDstress {
    _id: string;
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
    userID: string;
}

export class ResponseEmploy {
    page: Number;
    total: Number;
    data: Array<DataResponseEmploy>

}
export class DataResponseEmploy {
    _id: string;
    created: string;
    updated: string;
    prefix:string;
    name: string;
    lastname: string;
    affiliation: string;
    position:string;
    division:string;
    cotton:string;
    userID:string;
}
