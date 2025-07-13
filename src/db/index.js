// connectDB.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "../const.js";

dotenv.config({
  path: "./.env" // Use .env (with dot)
});

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\n✅ MongoDB connected! DB host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
