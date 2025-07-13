// index.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js"; // ✅ Make sure you export app from app.js
import { DB_NAME } from "./const.js";

dotenv.config({
  path: "./.env"
});

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";
const PORT = process.env.PORT || 5000;

(async () => {
  try {
    const dbConn = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);
    console.log("✅ MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1); // Exit app if DB fails
  }
})();
