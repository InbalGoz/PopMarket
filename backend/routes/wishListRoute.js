import express from "express";
const router = express.Router();
import {
  getUserFavoriteProducts,
  addProductToWishList,
  deleteWishListProduct,
  deleteAllWishListProduct,
} from "../controllers/wishListController.js";
//import { protect, admin } from "../middleware/authMiddleware.js";

router.get("/", getUserFavoriteProducts);
router.post("/add/:id", addProductToWishList);
router.delete("/delete/:id", deleteWishListProduct);
router.delete("/deleteAll", deleteAllWishListProduct);

export default router;
