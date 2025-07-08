import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    id:{
        type : Number,
        unique:true,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    description : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        required : true, 
        default : "incomplete"
    },
    priority: String,

},{timestamps:true});

const Tasks = mongoose.models.Tasks ||  mongoose.model("Tasks",TaskSchema);

export default Tasks;