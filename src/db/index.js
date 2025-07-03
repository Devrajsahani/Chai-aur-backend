import mongoose from"mongoose";
import {DB_NAME} from "../constants";


const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

    } catch(error){
        console.log("MONGODB connection error", error);
        process.exit(1)
    } // handleing the error,
}

// environment variable mein changes karte hi wapas se run karna padta hai isko koi fix nahi hai toh kuch nahi kar sakte!!
