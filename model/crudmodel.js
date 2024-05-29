import mongoose from "mongoose";


let cruddata=new mongoose.Schema({
    name:{type:String,require:true},
    age:{type:Number,require:true},
    city:{type:String,require:true},
    email:{type:String,require:true}
})
let UserData=mongoose.model('user',cruddata)

export default UserData