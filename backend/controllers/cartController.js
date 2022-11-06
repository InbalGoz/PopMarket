import asyncHandler from "express-async-handler";
import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";

// @desc    Fetch all cart products
// @route   GET /api/cart
// @access  Public
const getUserCartProducts = asyncHandler(async (req, res) => {
  //const {userId} = req.body
  const userId = "6367987c3f4100bf6a962751";
  const cart = await Cart.findOne({ userId });

  if (cart) {
    res.status(201).json(cart.cartProducts);
  } else {
    res.status(201).json([]);
  }
});

// @desc    add a product to cart
// @route   POST /api/cart
//needs to added it all to the cart
const addProductToCart = asyncHandler(async (req, res) => {
  const userId = "6367987c3f4100bf6a962751";
  const productId = req.params.id;
  const product = await Product.findById(productId);

  let cart = await Cart.findOne({ userId });

  if (cart) {
    const itemIndex = cart.cartProducts.findIndex(
      (p) => p._id.toString() === productId
    );
    if (itemIndex > -1) {
      cart.cartProducts = cart.cartProducts.map((item) =>
        item === product ? product : item
      );
    } else {
      cart.cartProducts.push(product);
    }
    cart = await cart.save();
    return res.status(201).send(cart.cartProducts);
  } else {
    //no cart for user , create new one
    const newCart = await Cart.create({ userId, cartProducts: [product] });
    return res.status(201).send(newCart.cartProducts);
  }
});

// @desc    Delete a product from cart
// @route   DELETE /api/cart/:id
const deleteCartProduct = asyncHandler(async (req, res) => {
  const userId = "6367987c3f4100bf6a962751";
  let cart = await Cart.findOne({ userId });
  const productId = req.params.id;

  //const product = await Product.findById(req.params.id);

  const cartItemRemoved = cart.cartProducts.filter(
    (p) => p._id.toString() !== productId
  );
  cart.cartProducts = cartItemRemoved;
  cart = await cart.save();
  return res.status(201).send(cart.cartProducts);
});

// @desc    Delete all user cart products
// @route   DELETE /api/cart/deleteAll
const deleteAllCartProduct = asyncHandler(async (req, res) => {
  // await Cart.deleteMany();
  const userId = "6367987c3f4100bf6a962751";
  await Cart.findOne({ userId }).deleteMany();
});

export {
  getUserCartProducts,
  addProductToCart,
  deleteCartProduct,
  deleteAllCartProduct,
};
