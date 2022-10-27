import express from "express";
const router = express.Router();
import { getProducts } from "../controllers/productController.js";
//import { protect, admin } from "../middleware/authMiddleware.js";

router.get("/", getProducts);

export default router;
