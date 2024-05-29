import mongoose from "mongoose";

let connectdb=async(data)=>{
    { useNewUrlParser: true, useUnifiedTopology: true },
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
