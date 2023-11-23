import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Read() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await axios.get("http://localhost:3001/users/" + id);
        setData(usersData.data);
      } catch (error) {
        console.log("Error in fetchData:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>VIEWING USER NO. {data.id}</h1>

      <table className="viewusertable">
        <tbody>
          <tr>
            <td className="userdatahead"><strong>User ID:</strong></td>
            <td className="userdata">{data.id}</td>
          </tr>
          <tr>
            <td className="userdatahead"><strong>Name:</strong></td>
            <td className="userdata">{data.name}</td>
          </tr>
          <tr>
            <td className="userdatahead"><strong>Username:</strong></td>
            <td className="userdata">{data.username}</td>
          </tr>
          <tr>
            <td className="userdatahead"><strong>Email:</strong></td>
            <td className="userdata">{data.email}</td>
          </tr>
          <tr>
            <td className="userdatahead"><strong>Password:</strong></td>
            <td className="userdata">{data.password}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Read;
