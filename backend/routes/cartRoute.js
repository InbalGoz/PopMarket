import express from "express";
const router = express.Router();
import {
  getUserCartProducts,
  addProductToCart,
  deleteCartProduct,
  deleteAllCartProduct,
} from "../controllers/cartController.js";
//import { protect, admin } from "../middleware/authMiddleware.js";

router.get("/", getUserCartProducts);
router.post("/add/:id", addProductToCart);
router.delete("/delete/:id", deleteCartProduct);
router.delete("/deleteAll", deleteAllCartProduct);

export default router;
