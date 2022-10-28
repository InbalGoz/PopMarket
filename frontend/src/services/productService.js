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
};

async function getAllProducts() {
  const res = await axios.get(`${BASE_URL}`);
  console.log("res service --", res.data);
  return res.data;
}

async function getPopularProducts() {
  const res = await axios.get(`${BASE_URL}/popular`);
  console.log("res service --", res.data);
  return res.data;
}

async function getNewProducts() {
  const res = await axios.get(`${BASE_URL}/new`);
  console.log("res service --", res.data);
  return res.data;
}

async function getSpecialProducts() {
  const res = await axios.get(`${BASE_URL}/special`);
  console.log("res service --", res.data);
  return res.data;
}

async function getOtherProducts() {
  const res = await axios.get(`${BASE_URL}/other`);
  console.log("res service --", res.data);
  return res.data;
}

async function getProduct(productId) {
  const res = await axios.get(`${BASE_URL}/${productId}`);
  return res.data;
}

async function deleteProduct(productId) {
  const res = await axios.delete(`${BASE_URL}/${productId}`);
  return res.data;
}
