import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  async function fecthData() {
    const response = await axios.get(endpoint);
    +setData(response.data);
  }

  useEffect(() => {
    try {
      fecthData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return data;
};

export default useFetch;
