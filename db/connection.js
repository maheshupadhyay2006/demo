import mongoose from "mongoose";

let connectdb=async(data)=>{
   try{
    let db_option={
        dbName:"ducat"
    }
await mongoose.connect(data,db_option)
console.log("on");
   }
   catch(err){
    console.log(err);
   }
}
export default connectdb