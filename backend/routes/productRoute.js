import express from "express";
const router = express.Router();
import {
  getProducts,
  getPopularProducts,
  getOtherProducts,
  getSpecialProducts,
  getNewProducts,
} from "../controllers/productController.js";
//import { protect, admin } from "../middleware/authMiddleware.js";

router.get("/", getProducts);
router.get("/popular", getPopularProducts);
router.get("/special", getSpecialProducts);
router.get("/other", getOtherProducts);
router.get("/new", getNewProducts);

export default router;
