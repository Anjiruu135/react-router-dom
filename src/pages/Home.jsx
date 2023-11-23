import React, { useEffect, useState } from 'react'
import getData from '../modules/getData.js';
import deleteData from '../modules/deleteData.js'

function Home() {
  const [data,setData] = useState([])

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const usersData = await getData();
        setData(usersData);
      } catch (error) {
        console.log('Error in fetchData:', error);
      }
    };

    fetchData();
  }, []);

  const userCount = data.length;

  return (
    <div>
      <h1>HOME</h1>
      <h2>Total Users: {userCount}</h2>
      <h2>List of Users</h2>
      <div>
        <table className='userlist'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {
                data.map((d, i) => (
                  <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.username}</td>
                    <td>
                      <button className='homebutton blue' onClick={() => { window.location.href = `/viewuser/${d.id}` }}>View</button>
                      <button className='homebutton orange' onClick={() => { window.location.href = `/updateuser/${d.id}` }}>Update</button>
                      <button className='homebutton red' onClick={e => deleteData(d.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
