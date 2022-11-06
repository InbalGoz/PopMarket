import express from "express";
//import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import productRoutes from "./routes/productRoute.js";
import cartRoutes from "./routes/cartRoute.js";
import wishListRoutes from "./routes/wishListRoute.js";

dotenv.config();

connectDB();

const app = express();

//const mongoUrl = process.env.DB_URL;

const PORT = process.env.PORT || 5000;

app.use(cors());
//app.use(express.json({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wishList", wishListRoutes);

/*
//conecting to database
mongoose.connect(mongoUrl);
const db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error"));
db.once("open", (callback) => {
  console.log("connection succeeded");
});
*/

app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
