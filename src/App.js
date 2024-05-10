import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Ecommerce, Orders, Employees, Customers } from "./pages";
import "./App.css";

// import Login from "./pages/Auth/Login";
// import SignUp from "./pages/Auth/SignUp";
import Preloader from "../src/components/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Display preloader for at least 3 seconds

    return () => clearTimeout(timer); // Clear timeout on component unmount
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          {/* dashboard */}
          <Route path="/" element={<Ecommerce />} />
        <Route path="/dashboard" element={<Ecommerce />} />


          {/* pages */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/customers" element={<Customers />} />

          {/* Auth Pages */}
          {/* <Route path="/sign-up" element={<Login />} />
          <Route path="/sign-in" element={<SignUp />} /> */}
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
