export class TestRestponseType {
    id: string;
    created: string;
    updated: String;
    floor:string;
    room:string;
    bednumber: string;
    prefix: string;
    firstname: string;
    lastname: string;
    idcard: string;
    birthday: string;
    age: number;
    sex: string;
    occupation: string;
    tel: string;
    firstday: string;
    lastday: string;
    status: string;

}
export class TestRestponseBed {
    id: string;
    bednumber: string;
    // Orderdate: string;
    status: string;
    // image:string;
    // serialNumber:string;
    // user:string;
    // orderid:string;
}
export class TestRestponseOrder {
    id: string;
    nameStore: string;
    Orderdate: string;
    status: string;
    image:string;
    serialNumber:string;
    user:string;
    orderid:string;
}
export class TestDelivery {
    id: string;
    name: string;
    type: string;
    price: string;
    created: string;
    updated: String;
    image:String;
    restaurant:string;
    Restaurantname:string;
}
export class TestRes {
    id: string;
    name: string;
    created: string;
    status: String;
    image:String;
    pass:String;
}
export class TestOrder {
    id: string; 
    Restaurantname: string;
    image: String;
    orderdate: string;
    pass: string;
    status: string;
    created: string;
    updated: String; 
}