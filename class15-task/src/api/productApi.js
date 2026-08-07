import axios from "axios";

export const getdata = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data
    };