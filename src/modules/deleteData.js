import React from 'react'
import axios from 'axios';

export const deleteData = (id) => {
    const confirmDelete = window.confirm("Would you like to delete?");
    
    if (confirmDelete) {
      return axios.delete(`http://localhost:3001/users/${id}`)
        .then(res => {
            res.data;
            location.reload();
        })
        .catch(err => {
          console.log(err);
          throw err; // rethrow the error so it can be handled elsewhere if needed
        });
    }
  
    return Promise.resolve(); // Resolve with no value if user cancels
  };

export default deleteData
