import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import validate from "../validation";

export default function AddUser() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [users, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  const { name, username, email, phone } = users;
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const onInputChange = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
  };

  

  const onSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(users));
    setIsSubmit(true);
    //  axios.put(`http://localhost:3001/users/${id}`, users);
    // navigate("/");
  };

  useEffect(  async () => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      await axios.put("http://localhost:3001/users", users);
      navigate("/");
      
    }
  }, [formError]);
  // useEffect(async () => {
  //   if (Object.keys(formError).length === 0 && isSubmit) {
  //     await axios.put("http://localhost:3001/users", users);
  //     navigate("/");
  //   }
  // }, [formError]);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  };
  return (
    <>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit Information</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3  ">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
              <p>{formError.name}</p>
            </div>
            <div className="mb-3 ">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your UserName"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
              <p>{formError.username}</p>
            </div>
            <div className="mb-3 ">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
              <p>{formError.email}</p>
            </div>
            <div className="mb-3 ">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
              <p>{formError.phone}</p>
            </div>
            <div className="text-center">
              <button className="btn btn-warning" type="submit">Edit User Info</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
