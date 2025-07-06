import axios from "axios";

const base_api_url = `${window.location.origin}/api`;

export default {

  getAllProducts:() => axios.get(`${base_api_url}/products`),
  deleteProduct:(id) => axios.delete(`${base_api_url}/product/${id}`),
  storeProduct:(data) => axios.post(`${base_api_url}/product`, data),
  showProduct:(id) => axios.get(`${base_api_url}/product/${id}`),
  updateProduct:(id, data) => axios.put(`${base_api_url}/product/${id}`, data),
}