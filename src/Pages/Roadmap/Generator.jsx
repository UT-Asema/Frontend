import React from "react";
import { useEffect, useState } from "react";
import { generateStructure, generateUI } from "./generatorUtils/generate";

import { calculateDeltas } from "./generatorUtils/positions";
import { store } from "../../store/store";
import { useSelector } from "react-redux";
import { calculateDirVector } from "./generatorUtils/positions";
import { addZoom } from "../../store/roadmapNew";
const Generator = () => {
  const { roadmapNew } = useSelector((state) => state);
  // useEffect(() => {
  //   let res = calculateDirVector({ x: 0, y: 0 }, { x: 1, y: 1 });
  //   console.log(res);
  // }, []);

  useEffect(() => {
    // calculateSizes();
    // calculatePositions();
    // generateStructure2();
    addZoom();
    generateStructure();
    calculateDeltas();
    generateUI();
  }, [roadmapNew]);

  return (
    <>
      <g id="boxes-group"></g>
      <g id="buttonsTop-group"></g>
      <g id="buttonsBottom-group"></g>
      <g id="buttonsLeft-group"></g>
      <g id="buttonsRight-group"></g>
    </>
  );
};

export default Generator;
