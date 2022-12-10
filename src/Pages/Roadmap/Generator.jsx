import React from "react";
import { useEffect } from "react";
import { calculateSizes, calculatePositions } from "./generatorUtils/positions";

const Generator = () => {
  useEffect(() => {
    calculateSizes();
    calculatePositions();
  }, []);

  return (
    <>
      <g>
        <cicle></cicle>
      </g>
    </>
  );
};

export default Generator;
