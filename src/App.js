import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NotFound from './components/pages/NotFound';
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import { Routes, Route } from "react-router-dom";
import ViewUser from "./components/users/ViewUser";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/users/add' element={<AddUser />} />
        <Route path='/users/edit/:id' element={<EditUser />} />
        <Route path='/users/view/:id' element={<ViewUser />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
