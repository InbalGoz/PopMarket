import mongoose from "mongoose";

const wishListSchema = mongoose.Schema(
  {
    userId: { type: String, required: true, ref: "User" },
    wishListProducts: [],
  },
  { timestamps: true }
);

const WishList = mongoose.model("WishList", wishListSchema);

export default WishList;
