import React from "react";
import { useEffect } from "react";
import * as d3 from "d3";

const ShowRoadmap = () => {
  useEffect(() => {
    d3.select("body").attr("class", "overflow-hidden");
    return () => {
      d3.select("body").attr("class", "");
    };
  }, []);

  return (
    <div className="border-2 h-full w-full flex">
      <div className="w-64 h-full border-2">Menu bar</div>
      <div className="w-full h-full">
        <svg
          id="root-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <g id="root-group"></g>
        </svg>
      </div>
    </div>
  );
};

export default ShowRoadmap;
