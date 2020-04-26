import axios from 'axios';

export const loadData = async () => {
  try {
    const response = await axios.get('/api/cartmart');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};