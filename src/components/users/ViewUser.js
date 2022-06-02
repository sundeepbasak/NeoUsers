import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const response = await fetch(`http://localhost:4000/users/${id}`);
    const data = await response.json();
    setUser(data);
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div class="col-lg-6 mx-auto">

          <div className="mt-2">
            <Link to="/" className="btn btn-dark">
              Back Home
            </Link>
          </div>

          <div class="mt-4 card shadow p-4 rounded-2">
            <h1 className="text-center mb-4">
              <u>View User</u>
            </h1>
            <ul className="list-group list-group-flush gap-2 border border-2 rounded-2 fs-5">
              <li className="list-group-item">UserId : {user.id}</li>
              <li className="list-group-item">Name : {user.name}</li>
              <li className="list-group-item">Email : {user.email}</li>
              <li className="list-group-item">Phone : {user.phone}</li>
            </ul>
            <div className="pb-4"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ViewUser;
