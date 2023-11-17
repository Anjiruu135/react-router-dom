import React, { useEffect, useState } from 'react'
import getData from '../modules/getData.js';

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
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
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
