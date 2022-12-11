import React from "react";
import Leftpart from "./leftpart";
import NavbarButton from "./NavbarButton";
import {useState, useEffect} from 'react';
import * as p from "../../api/requests";

const Navbar = () => {
  let data = window.data

  const [show, setshow] = useState(data.loggedIn)
  useEffect(() => {
    setshow((e) => data.loggedIn);
  }, [data.loggedIn])
  console.log("show", show)
  return (
    <div className="flex justify-between text-[#E2E8F0] bg-[#1C142B]">
      <Leftpart />
      <div className="flex items-center text-lg">
        <NavbarButton name={"Home"} pageLink={"Home"} />
        <NavbarButton name={"Explore"} pageLink={"explore"} />
        <NavbarButton name={"CreateRoadmap"} pageLink={"Roadmap/0"} />
        {!show && <>
          <NavbarButton name={"Signup"} pageLink={"Signup"} />
          <div className=" border-[#7F05B0] border-4 relative flex items-center h-1/2 justify-center mr-3">
            <NavbarButton name={"Login"} pageLink={"login"} />
          </div>
        </>}
      </div>
    </div>
  );
  s;
};

export default Navbar;
