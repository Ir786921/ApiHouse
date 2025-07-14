import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
const UserSchema = new mongoose.Schema({
    id:{
        type: Number,
        required : true,
        unique : true
    },
    name :{
        type : String,
        required : true,
        maxLength : 10,
        minLength :5,
        default :"imran"


    },
    UserName :{
        type : String,
        required : true,
        maxLength : 8,
        minLength : 4,
        unique : true

    },
    email : {
        type :String,
        required : true,
        unique : true

    },
    password : {
        type :String,
        required : true,
        minLength : 6,
        maxLength: 10 
    },
    phone :{
        type : Number,
        maxLength : 10,
        minLength : 10,
        required :true,
    },
    city : {
        type : String,
        required : true,
        default : "Texas"
    },
    Position :{
        type :String,
        required : true,
    }


})

const User = mongoose.model.User || mongoose.model("User",UserSchema);
export default User;