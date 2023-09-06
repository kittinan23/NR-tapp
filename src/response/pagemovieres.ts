export class TestResponseMovie {
    page: Number;
    total: Number;
    data: Array<DataTestResponseMovie>

}
export class DataTestResponseMovie {
    _id: string;
    firstname: string;
    lastname: string;
    movie: string;
    movietitle: string;
    date: string;
    showtime: string;
    seat: string;
    theatre: string;

}