import React from "react";
// import Button from "./Button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div style={{'display':"flex" , justifyContent:'space-between' , alignItems:'center'}}>
       <h2>  BrandName </h2>
        <navlinks>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/products">Products</Link>
      </navlinks>
    </div>
  );
};

export default Navigation;
