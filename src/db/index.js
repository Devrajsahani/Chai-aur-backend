//require('dotenv').config({path: './env'})
import dotenv from "dotenv"

import mongoose from"mongoose";
import {DB_NAME} from "../const";
import connectDB from "./db";

dotenv.config({
    path:'./env'
})


const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB host: ${connectionInstance.connection.host}`);


    } catch(error){
        console.log("MONGODB connection error", error);
        process.exit(1)
    } // handleing the error,
}
export default connectDB

// environment variable mein changes karte hi wapas se run karna padta hai isko koi fix nahi hai toh kuch nahi kar sakte!!
