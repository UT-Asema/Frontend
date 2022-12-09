import React from "react";
import Leftpart from "./leftpart";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <Leftpart />
      <div className="flex">
        <NavbarButton name={"Home"} pageLink={"Home"} />
        <NavbarButton name={"explore"} pageLink={"explore"} />
        <NavbarButton name={"login"} pageLink={"login"} />
        <NavbarButton name={"Signup"} pageLink={"Signup"} />
        <NavbarButton name={"CreateRoadmap"} pageLink={"CreateRoadmap"} />
      </div>
    </div>
  );
  s;
};

export default Navbar;
