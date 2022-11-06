import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  if (products) {
    res.status(201).json(products);
  } else {
    res.status(404);
    throw new Error("Products not found");
  }
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.status(201).json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  console.log("req body", req.body);
  const {
    id,
    image,
    name,
    collectionType,
    collectionNumber,
    dimensions,
    weight,
    nameOfSeller,
    rating,
    price,
    countInStock,
  } = req.body;

  const product = await Product.findById(req.body.id);

  if (product) {
    product.image = image;
    product.name = name;
    product.collectionType = collectionType;
    product.collectionNumber = collectionNumber;
    product.dimensions = dimensions;
    product.weight = weight;
    product.nameOfSeller = nameOfSeller;
    product.rating = rating;
    product.price = price;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.status(201).json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getPopularProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(4);
  if (products) {
    res.status(201).json(products);
  } else {
    res.status(404);
    throw new Error("Products not found");
  }
});

const getOtherProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ collectionType: { $eq: "Other" } });
  if (products) {
    res.status(201).json(products);
  } else {
    res.status(404);
    throw new Error("Products not found");
  }
});

const getSpecialProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({
    collectionType: { $eq: "Special Edition" },
  });
  if (products) {
    res.status(201).json(products);
  } else {
    res.status(404);
    throw new Error("Products not found");
  }
});

const getNewProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 }).limit(3);
  if (products) {
    res.status(201).json(products);
  } else {
    res.status(404);
    throw new Error("Products not found");
  }
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  getPopularProducts,
  getOtherProducts,
  getSpecialProducts,
  getNewProducts,
  // createProduct,
  updateProduct,
};

/*

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample brand",
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});
*/
