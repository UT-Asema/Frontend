import React from "react";
import { useEffect, useState } from "react";
import { generateStructure, generateUI } from "./generatorUtils/generate";

import { calculateDeltas } from "./generatorUtils/positions";
import { store } from "../../store/store";
import { useSelector } from "react-redux";
import { calculateDirVector } from "./generatorUtils/positions";
import { addZoom } from "../../store/roadmapNew";
const Generator = ({ editing }) => {
  const { roadmapNew } = useSelector((state) => state);

  useEffect(() => {
    addZoom();
    generateStructure();
    calculateDeltas();
    generateUI(editing);
  }, [roadmapNew, editing]);

  return (
    <>
      <g id="lines-group"></g>
      <g id="boxes-group"></g>
      <g id="buttonsTop-group"></g>
      <g id="buttonsBottom-group"></g>
      <g id="buttonsLeft-group"></g>
      <g id="buttonsRight-group"></g>
    </>
  );
};

export default Generator;
