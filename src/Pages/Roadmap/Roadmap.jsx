import React from "react";
import { useEffect, useState } from "react";
import * as d3 from "d3";
import Generator from "./Generator";
import { store } from "../../store/store";
import { useDispatch } from "react-redux";

import { modifySubnode } from "../../store/roadmap";

const ShowRoadmap = () => {
  const dispatch = useDispatch();

  const [showDetails, setshowDetails] = useState(false);
  const [DetailsID, setDetailsID] = useState(0);

  useEffect(() => {
    d3.select("body").attr("class", "overflow-hidden");
    return () => {
      d3.select("body").attr("class", "");
    };
  }, []);

  let testReducer = () => {
    dispatch(
      modifySubnode({
        sizeX: 1050,
        sizeY: 1005,
        id: 4,
      })
    );
  };

  return (
    <div className="border-2 h-full w-full flex">
      <div className="w-64 h-full border-2">
        <div>menu var</div>
        <button onClick={testReducer}>testReducer</button>
      </div>
      <div className="w-full h-full">
        <svg
          id="root-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <g id="root-group">
            <Generator />
          </g>
        </svg>
      </div>
      <div className=" hidden border-2 border-black bg-green-600 absolute right-0 w-60 h-full">
        Here goes additional detail
      </div>
    </div>
  );
};

export default ShowRoadmap;
