import axios from "axios";

const base_url = "http://localhost:5000/api";
const BASE_URL = `${base_url}/products`;

export const productService = {
  getAllProducts,
  getProduct,
  deleteProduct,
  getPopularProducts,
  getNewProducts,
  getSpecialProducts,
  getOtherProducts,
  updateProduct,
};

async function getAllProducts() {
  const res = await axios.get(`${BASE_URL}`);
  return res.data;
}

async function getPopularProducts() {
  const res = await axios.get(`${BASE_URL}/popular`);
  return res.data;
}

async function getNewProducts() {
  const res = await axios.get(`${BASE_URL}/new`);
  return res.data;
}

async function getSpecialProducts() {
  const res = await axios.get(`${BASE_URL}/special`);
  return res.data;
}

async function getOtherProducts() {
  const res = await axios.get(`${BASE_URL}/other`);
  return res.data;
}

async function getProduct(productId) {
  const res = await axios.get(`${BASE_URL}/product/${productId}`);
  return res.data;
}

async function updateProduct(newProduct) {
  const res = await axios.put(
    `${BASE_URL}/editProduct/${newProduct.id}`,
    newProduct
  );
  console.log("res update product", res.data);
  return res.data;
}

async function deleteProduct(productId) {
  const res = await axios.delete(`${BASE_URL}/${productId}`);
  return res.data;
}
