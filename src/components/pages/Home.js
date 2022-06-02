import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const response = await fetch("http://localhost:4000/users");
    const data = await response.json();
    setUserData(data.reverse()); //reverse the order of the data
  };

  const deleteUserHandler = async (id) => {
    await fetch(`http://localhost:4000/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    loadUsers();
  };

  return (
    <div className="container py-4">
      <div className="mb-3 d-flex align-items-center justify-content-between">
        <h1>User Details</h1>
        <div>
          <Link to="/users/add" className="btn btn-primary btn-lg">
            Add User
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-hover table-bordered shadow align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">SNo.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Link
                      to={`/users/view/${user.id}`}
                      className="btn btn-outline-primary m-1"
                    >
                      View
                    </Link>
                    <Link
                      to={`/users/edit/${user.id}`}
                      className="btn btn-outline-warning m-1"
                    >
                      Edit
                    </Link>
                    <Link to="#"
                      className="btn btn-outline-danger m-1"
                      onClick={() => deleteUserHandler(user.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
