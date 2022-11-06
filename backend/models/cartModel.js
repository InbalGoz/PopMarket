import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
  {
    userId: { type: String, required: true, ref: "User" },
    cartProducts: [],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
