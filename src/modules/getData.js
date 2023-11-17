import React from 'react'
import axios from 'axios';

export const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      return response.data;
    }
    catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

export default getData
