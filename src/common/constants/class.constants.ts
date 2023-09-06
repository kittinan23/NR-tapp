export class ClassConstants {

    public static Database = {   
        Schema:{
            ZOOM_ACCOUN:"zoom_account",
            ZOOM_MEETING:"zoom_meeting",
            HOSTGROUPS : "hostgroups",
            HOSTGROUPS_BY : "hostgroups_by",
            EVENTS : "events",
            USERS : "users"
        }     
    }
    public static DatabaseUTL = "mongodb+srv://Jirapat36:x6ook*mongo@demo-test.sd7ci.mongodb.net/zoom-api-manage?retryWrites=true&w=majority"

    public static OAuth2 = {

        CLIENT_ID : "794664142729-tn52eg2tq50929o6j4tkudik8hpmpp2j.apps.googleusercontent.com",
        CLEINT_SECRET : "g1aOJqnsp1znTps_e6eHMhpm",
        REDIRECT_URI :"https://developers.google.com/oauthplayground",
        REFRESH_TOKEN : "1//04zWanwawl93rCgYIARAAGAQSNwF-L9IrkHoq1hu-iBAOn8qFvxJplzyLSyjMc10Ynscu6tTaW5qmYtgy0CFGta6IyjtJWQcCGNc"
    }

    
    public static SetAccountURL = {
        NEW_ACCOUNT : "http://08ae05ef1260.ngrok.io/configpassword",
        RESET_PASSWORD : "http://08ae05ef1260.ngrok.io/password"
    }
    
    public static ErrorMessage = {
        Success: "Success",
        ParamiterInvalid: "Paramiter invalid",
        LimitEdirectory: (n) => { return `E-directory has exceeded its limit ${n}.`; },
    }
    public static Message = {
        CreateSuccess: "Create succeeded!",
        UpdateSuccess: "Update data succeeded!",
        UpdatePasswordSuccess: "Update password succeeded!",
        UploadImageSuccess: "Upload image succeeded!",
        AddEmailSuccess: "Add email succeeded!",
        DeleteDataSuccess: "Delete data succeeded!",
    }
    public static API_URL = {
        UserImage: "http://localhost:9136/users/load-image/",
    }
    public static Zoom = {
        TimeZone: "Asia/Bangkok",
        API: {
            UserInfo: "https://api.zoom.us/v2/users/",
            MeetingList: "https://api.zoom.us/v2/users/",
            MeetingInfo: "https://api.zoom.us/v2/meetings/",
            MeetingCreate: "https://api.zoom.us/v2/users/",
            MeetingParticipants:"https://api.zoom.us/v2/past_meetings/",
            MeetingUpdate:"https://api.zoom.us/v2/meetings/",
            DeleteMeeting:"https://api.zoom.us/v2/meetings/",
            ListRole : "https://api.zoom.us/v2/roles"
        },
        Token : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IjNZQ1h3S3BEVE51WnFLcXBPUDR3SFEiLCJleHAiOjE2MDk4Mjc4NzAsImlhdCI6MTYwOTIyMzA2OX0.lYPeTcoBabR7PVDj2JJ-sIOkeWeaaby9bDkWYp7XtQE",
        StatusMeeting : {
            Waiting : "waiting",
            End : "end",
            Live : "live",
            stat : ["waiting", "end", "live"]
        },
        CreateType : {
            Api:"api",
            Manual:"manual"
        }
    }

    public static TypeUpload = {
        Image : "images",
        File : "files"
    }

    public static GeoJSON = {
        Type:{
            POINT:"Point",
            POLYGON:"Polygon"
        },
        KM:1000,
    }

    public static Languages = {
        DefaultLanguages : "en"
    }

    public static DateFormat = {
        DateTime: "DD-MM-YYYY HH:mm:ss",
        Date: "DD-MM-YYYY",
        Time: "HH:mm:ss",
        TimeHM: "HH:mm",
        DateTimeHM: "DD-MM-YYYY HH:mm"
    }
    
}
