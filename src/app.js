import express from "express"
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
const app= express()
app.use(corsP({
    origin: process.env.CORS_ORIGIN,
    credentials:true,
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("Public"));
app.use(cookieParser()); // till now this feature is not being used so much in the backend but in future we may use it.


export { app }