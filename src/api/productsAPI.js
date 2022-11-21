import axios from 'axios'

const productsApi = axios.create({
  baseURL: 'http://localhost:3001/products'
})

export const getProducts = async () => {
  const res = await productsApi.get("/");
  return res.data;
};

export const createProduct = (product) => productsApi.post("/", product);

// ? POR QUE NO SE COMPORTAN DE LA MISMA MANERA?
// export const createProduct = (product) => {
//   productsApi.post('/', product);
// }

