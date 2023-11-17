import React from 'react'
import axios from 'axios';

export const postData = async (values) => {
    try {
      const response = await axios.post('http://localhost:3001/users', values);
      return response.data;
    }
    catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };

export default postData
