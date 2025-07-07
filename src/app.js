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
app.use(express.urlencoded({extended: true}))


export { app }