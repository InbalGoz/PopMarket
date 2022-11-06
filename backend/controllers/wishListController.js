import asyncHandler from "express-async-handler";
import WishList from "../models/wishListModel.js";
import Product from "../models/productModel.js";

// @desc    Fetch all cart products
// @route   GET /api/wishList
// @access  Public
const getUserFavoriteProducts = asyncHandler(async (req, res) => {
  //const {userId} = req.body
  const userId = "6367987c3f4100bf6a962751";
  const wishList = await WishList.findOne({ userId });

  if (wishList) {
    res.status(201).json(wishList.wishListProducts);
  } else {
    res.status(201).json([]);
  }
});

// @desc    add a product to wishList
// @route   POST /api/wishList
//needs to added it all to the wishList
const addProductToWishList = asyncHandler(async (req, res) => {
  const userId = "6367987c3f4100bf6a962751";
  const productId = req.params.id;
  const product = await Product.findById(productId);

  let wishList = await WishList.findOne({ userId });

  if (wishList) {
    const itemIndex = wishList.wishListProducts.findIndex(
      (p) => p._id.toString() === productId
    );
    if (itemIndex > -1) {
      wishList.wishListProducts = wishList.wishListProducts.map((item) =>
        item === product ? product : item
      );
    } else {
      wishList.wishListProducts.push(product);
    }
    wishList = await wishList.save();
    return res.status(201).send(wishList.wishListProducts);
  } else {
    //no wishList for user , create new one
    const newWishList = await WishList.create({
      userId,
      wishListProducts: [product],
    });
    return res.status(201).send(newWishList.wishListProducts);
  }
});

// @desc    Delete a product from wishList
// @route   DELETE /api/wishList/:id
const deleteWishListProduct = asyncHandler(async (req, res) => {
  const userId = "6367987c3f4100bf6a962751";
  let wishList = await WishList.findOne({ userId });
  const productId = req.params.id;

  //const product = await Product.findById(req.params.id);

  const wishListItemRemoved = wishList.wishListProducts.filter(
    (p) => p._id.toString() !== productId
  );
  wishList.wishListProducts = wishListItemRemoved;
  wishList = await wishList.save();
  return res.status(201).send(wishList.wishListProducts);
});

// @desc    Delete all user cart products
// @route   DELETE /api/wishList/deleteAll
const deleteAllWishListProduct = asyncHandler(async (req, res) => {
  const userId = "6367987c3f4100bf6a962751";
  await WishList.findOne({ userId }).deleteMany(); // dlete all the wishlist object
  // return res.status(201).send(wishList.wishListProducts);
});

export {
  getUserFavoriteProducts,
  addProductToWishList,
  deleteWishListProduct,
  deleteAllWishListProduct,
};
