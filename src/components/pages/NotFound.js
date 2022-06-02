import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>
        404 | <span className="fw-light">Page Not Found</span>{" "}
      </h1>
      <div className="py-4">
        <Link to="/" className="btn btn-dark">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
