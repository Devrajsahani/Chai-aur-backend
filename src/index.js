import mongoose from "mongoose"
import{DB_NAME} from "./const.js";

import express from"express"
const app = express()


// (
//     function connectDB(){
    
// }
// )()

// for this we will use fe method in order to carry out the operation 
( async ()=> {
    try{
    //    await monogoose.connect (`${process.env.MONGODB_URI}/${DB_NAME}`) // with this line of code we are connecting the mongoose to the database that is the mongodb
       await mongoose.connect (`mongodb+srv://sahanidevraj:12345@cluster0.vrxft8k.mongodb.net/dev`) // with this line of code we are connecting the mongoose to the database that is the mongodb
       app.on("error",()=>{
        console.log ("ERR:",error);
        throw error
       })// this is used when the express is not working.

       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on the port ${process.env.PORT}`);
       })

    } catch(error ){
        console.error("ERROR:",error)
        throw error
    }
}) ()

// if we try to analyse this code then we will know that we have used a lot of things like where to throw the error when that method is not found, how to use try catch, await and listen 