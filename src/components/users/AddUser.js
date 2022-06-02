import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  //one func for all input fields
  const inputChangeHandler = (event) => {
    // console.log(event.target.value);
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitFormHandler = async (event) => {
    event.preventDefault();
    // console.log(user);
    await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    navigate("/"); //navigate back to home
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
            className="mt-4 p-4 mx-auto p-4 rounded-2 shadow"
            onSubmit={submitFormHandler}
          >
            <h1 className="text-center mb-4">
              <u>Add User</u>
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
            <div className="d-grid mx-auto mt-4">
              <button className="btn btn-primary btn-lg" type="submit">
                Submit
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default AddUser;

//normally --> for one input field(here name)
//onChange={e => setUser({...user, name: e.target.value})}

//onChange={e => inputChangeHandler(e)} //or
//onChange={inputChangeHandler}

//one func for all input fields-->
//const inputChangeHandler = (event) => {
//  console.log(event.target.value);
//  setUser({...user, [event.target.name]: event.target.value})
