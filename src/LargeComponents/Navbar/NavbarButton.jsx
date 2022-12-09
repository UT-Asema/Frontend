import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const NavbarButton = ({ name, pageLink }) => {
  return (
    <div className=" m-4">
      <Link to={pageLink}>{name}</Link>
    </div>
  );
};

export default NavbarButton;
