import axios from "axios";

const base_api_url = "http://127.0.0.1:8000/api";

export default {

  getAllProducts:() => axios.get(`${base_api_url}/products`),
  deleteProduct:(id) => axios.delete(`${base_api_url}/product/${id}`),

}