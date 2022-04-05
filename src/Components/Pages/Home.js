import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';

export default function Home() {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    dbUsers();
    
  }, []);


  const dbUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUsers(result.data.reverse());
  };
  const deleteUser = async (id) => {
    if(window.confirm("Are you Sure"))
    await axios.delete(`http://localhost:3001/users/${id}`);
    dbUsers();
  };

  return (
    <>
      <div className="container my-5">
        <div className="py-4">
          <table className="table border shadow ">
            <thead className="table-dark text-center">
              <tr>
                <th scope="col">#</th>
                {/* <th scope="col">profile</th> */}
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className=" text-center">
              {user.map((ruser, sno) => (
                
                <tr key={sno}>
                  <th scope="row">{sno + 1}</th>
                  {/* <img className="" src={user} alt="" /> */}
                  <td > {ruser.name}</td>
                  <td>{ruser.username}</td>
                  <td>{ruser.email}</td>
                  <td>{ruser.phone}</td>

                  <td>
                    <Link
                      className="btn btn-warning mx-2"
                      to={`/users/edituser/${ruser.id}`}
                    >
                      Edit
                    </Link>
                    <Link className="btn btn-danger mx-2" to="/" onClick={()=> deleteUser(ruser.id)}>
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
