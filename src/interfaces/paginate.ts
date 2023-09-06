export class Paginate {
    page: number;
    limit: number;
    floor:string;
    room:string;
    bednumber: string;
    // firstname: string;
    // lastname: string;
    // nickname: string;
    // fromday: string;
    // toDay: string;
}

export class searchDataSmart {
    // page: number;
    // limit: number;
    province:string;
    district:string;
    sub_district: string;
}

export class searchuserIDApply {
    userID:string;
}

export class searchID {
    id:string;
}

export class searchUser {
    userID:string;
}

export class searchProtest {
    userID:string;
}

export class searchUserHealth {
    userID:string;
}

export class searchHealthData {
    field:string;
    keyword:string;
}
export class searchStatus {
    // page: number;
    // limit: number;
    status:string;
    topic:string;
}

export class searchuserID {
    userID: string;
}
export class searchApply {
    topic: string;
}

export class searchEmploy {
    affiliation: string;
    division: string;
}

export class searchpetition {
    topic: string;
}
export class SearchCar {
    page: number;
    limit: number;
    serialnumber: string;
}
export class PaginateMovie {
    page: number;
    limit: number;
    firstname: string;
    lastname: string;
    movie: string;
    movietitle: string;
    date: string;
    showtime: string;
    seat: string;
    theatre: string;
}
export class PaginateDelivery {
    page: number;
    limit: number;
    name: string;
    minPrice: number;
    maxPrice: number;
    Restaurantname: string;
}
export class PaginateOrder {
    page: number;
    limit: number;
    Restaurantname: string;
}

export class searchUserdisease {
    userID:string;
}

export class searchDataAppeal {
    // page: number;
    // limit: number;
    _id:string;
}