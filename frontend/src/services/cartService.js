import axios from "axios";

const base_url = "http://localhost:5000/api";
const BASE_URL = `${base_url}/cart`;

export const cartService = {
  getCartProducts,
  addToCart,
  deleteFromCart,
  deleteAllFromCart,
};

async function getCartProducts() {
  const res = await axios.get(`${BASE_URL}`);
  console.log("res.data", res.data);
  return res.data;
}

async function addToCart(id) {
  const res = await axios.post(`${BASE_URL}/add/${id}`);
  return res.data;
}

async function deleteFromCart(id) {
  const res = await axios.delete(`${BASE_URL}/delete/${id}`);
  return res.data;
}

async function deleteAllFromCart() {
  const res = await axios.delete(`${BASE_URL}/deleteAll`);
  return res.data;
}
