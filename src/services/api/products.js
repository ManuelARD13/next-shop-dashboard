import axios from "axios"
import endPoints from '@services/api';
import { config } from "process";


const addProduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(
      endPoints.products.addProducts,
      body,
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
  } 
}

const deleteProduct = async (id) => {
  const response = await axios.delete(
    endPoints.products.deleteProduct(id)
  )
  return response
}

const updateProduct = async (id, body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    }
  }
  const response = await axios.put(
    endPoints.products.updateProducts(id), body, config
  )
  return response.data
}

export { addProduct, deleteProduct, updateProduct }