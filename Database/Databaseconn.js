const mongoose=require("mongoose");


const MONGO_URL=process.env.MONGO_URL;
const connectdb=async () =>{

    try{
        const connect=await mongoose.connect(MONGO_URL);
        console.log("server connected to database");
    }
    catch(err){
        console.log(err);
    }

}
module.exports=connectdb;