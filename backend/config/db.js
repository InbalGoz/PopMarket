import mongoose from "mongoose";
import dotenv from "dotenv"; //?
dotenv.config(); //?
/* 
----------------------------------------- 
Connecting to MongoDB
----------------------------------------- 
*/
const connectDB = async () => {
  const mongoUrl = process.env.DB_URL;
  mongoose.connect(mongoUrl);
  const db = mongoose.connection; // connection == DB
  db.on("error", console.log.bind(console, "connection error"));
  db.once("open", (callback) => {
    console.log("connection succeeded");
  });
};

export default connectDB;
