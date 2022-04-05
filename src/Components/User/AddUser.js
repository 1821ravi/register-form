import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validate from "../validation";

export default function AddUser() {
  let navigate = useNavigate();
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
  };

  useEffect(async () => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      await axios.post("http://localhost:3001/users", users);
      navigate("/");
    }
  }, [formError]);

  // const validate = (values) => {
  //   let errors = {};

  //   if (!values.name) {
  //     errors.name = "Name is required";
  //   }
  //   if (!values.username) {
  //     errors.username = "Username is required";
  //   }
  //   if (!values.email) {
  //     errors.email = "Email is required";
  //   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //     errors.email = "Email is invalid";
  //   }
  //   if (!values.phone) {
  //     errors.phone = "Phone number is required";
  //   } else if (phone.length > 10) {
  //     errors.phone = "Enter Valid Number";
  //   }
  //   return errors;
  // };

  return (
    <>
      <div className="container col-6">
        <div className="w-75 mx-auto shadow p-5 ">
          <h2 className="text-center mb-4">Add A User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3 ">
              <label htmlFor="" className="fw-bold">
                Name
              </label>
              <input
                type="text"
                className="form-control "
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
              {/* {formError.name && <p className="error">{ formError.name}</p> } */}
              <p>{formError.name}</p>
            </div>
            <label htmlFor="" className="fw-bold">
              UserName
            </label>
            <div className="mb-3 ">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your UserName"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
              {/* {formError.username&& <p className="error">{ formError.username}</p> } */}
              <p>{formError.username}</p>
            </div>
            <label htmlFor="" className="fw-bold">
              Email
            </label>
            <div className="mb-3 ">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
              {/* {formError.email && <p className="error">{ formError.email}</p> } */}
              <p>{formError.email}</p>
            </div>
            <div className="mb-3 ">
              <label htmlFor="" className="fw-bold">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
              {/* {formError.phone && <p className="error">{ formError.phone}</p> } */}
              <p>{formError.phone}</p>
            </div>
            <div className="text-center">
              <button className="btn btn-primary" type="submit">
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
