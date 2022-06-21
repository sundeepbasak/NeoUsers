import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //   console.log(id);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  //one func for all input fields
  const inputChangeHandler = (event) => {
    // console.log(event.target.value);
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitFormHandler = async (event) => {
    event.preventDefault();
    // console.log(user);
    await fetch(`https://fake-api-json-server-sundeep.herokuapp.com/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    navigate("/"); //navigate back to home
  };

  //load existing user data from server based on id
  const loadUser = async () => {
    const response = await fetch(`https://fake-api-json-server-sundeep.herokuapp.com/users/${id}`);
    const data = await response.json();
    setUser(data);
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-6 mx-auto">

          <div className="mt-2">
            <Link to="/" className="btn btn-dark">
              Back Home
            </Link>
          </div>
          
          <form
            className="mt-4 p-4 rounded-2 shadow"
            onSubmit={submitFormHandler}
          >
            <h1 className="text-center mb-4">
              <u>Edit User</u>
            </h1>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Full Name"
                name="name"
                value={user.name}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Email"
                name="email"
                value={user.email}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="tel"
                className="form-control form-control-lg"
                placeholder="Enter Phone Number"
                name="phone"
                value={user.phone}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="d-grid mx-auto mt-4 mb-2">
              <button className="btn btn-warning btn-lg" type="submit">
                Update User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;

//*before
//link: http://localhost:4000/users/${id}

//*after
//link : https://fake-api-json-server-sundeep.herokuapp.com/users/${id}