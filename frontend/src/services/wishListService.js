import axios from "axios";

const base_url = "http://localhost:5000/api";
const BASE_URL = `${base_url}/wishList`;

export const wishListService = {
  getWishListProducts,
  addToWishList,
  deleteFromWishList,
  deleteAllFromWishList,
};

async function getWishListProducts() {
  const res = await axios.get(`${BASE_URL}`);
  return res.data;
}

async function addToWishList(id) {
  const res = await axios.post(`${BASE_URL}/add/${id}`);
  return res.data;
}

async function deleteFromWishList(id) {
  const res = await axios.delete(`${BASE_URL}/delete/${id}`);
  return res.data;
}

async function deleteAllFromWishList() {
  const res = await axios.delete(`${BASE_URL}/deleteAll`);
  console.log("res.data", res.data);
  return res.data;
}
