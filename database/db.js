import mongoose from "mongoose";




const Connection=async(URL) =>{
    
    try{
    await mongoose.connect(URL,{useNewUrlParser:true});
    console.log("Database connected successfully");
    }
    catch(error)
    {
        console.log(`Error:`,error.message);
    }
}
export default Connection;