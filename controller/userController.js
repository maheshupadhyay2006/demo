import UserData from "../model/crudmodel.js";

class myclass{
    static getdata=async(req,res)=>{
let result=await UserData.find()
res.json(result)
    }


static createData=async(req,res)=>{
     try{
let{name,age,city,email}=req.body
if(name=='' || age=='' || city=='' || email=='')
    {
        res.json({'msg':'field empty'})
    }
    else{
        UserData.insertMany({
            name:name,
            age:age,
            city:city,
            email:email
        })
        res.json({'msg':'data insert'});
    }

     }
     catch(err){
        console.log(err);
     }
}


}

export default myclass