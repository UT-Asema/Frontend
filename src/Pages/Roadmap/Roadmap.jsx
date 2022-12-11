import React from "react";
import { useEffect, useState } from "react";
import * as d3 from "d3";
import Generator from "./Generator";
import { store } from "../../store/store";
import { useDispatch } from "react-redux";
import { findNode } from "./generatorUtils/utils";
import { addNode } from "../../store/roadmapNew";
import { useSelector } from "react-redux";

const ShowRoadmap = () => {
  const dispatch = useDispatch();
  const { roadmapNew } = useSelector((state) => state);

  const [showDetails, setshowDetails] = useState(roadmapNew.showDetails);
  const [DetailsID, setDetailsID] = useState(roadmapNew.selectedNode);
  const [node, setNode] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    d3.select("body").attr("class", "overflow-hidden");
    return () => {
      d3.select("body").attr("class", "");
    };
  }, []);

  useEffect(() => {
    setshowDetails(roadmapNew.showDetails);
  }, [roadmapNew.showDetails]);

  useEffect(() => {
    setDetailsID(roadmapNew.selectedNode);
    setNode(findNode(roadmapNew.selectedNode));
  }, [roadmapNew.selectedNode]);
  console.log(node);
  let testReducer = () => {
    dispatch(addNode());
  };

  let toggleEdit = () => {
    setEditing(true);
  };

  return (
    <div className="border-2 h-full w-full flex">
      <div className="w-64 h-full border-2 ">
        <div>menu var</div>
        {!editing && <button onClick={toggleEdit}>edit nodes</button>}
        {editing && <button onClick={toggleEdit}>save edits</button>}
        {editing && <button onClick={toggleEdit}>cancel edits</button>}
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
      {showDetails && (
        <div
          id="data-div"
          className=" border-2 border-black bg-green-600 absolute right-0 w-60 h-full"
        >
          {DetailsID}
          <div className="title">--{node.resources.title}</div>
          <div className="body">--{node.resources.paragraph}</div>
          <div className="Resources">--{node.resources.links}</div>
        </div>
      )}
    </div>
  );
};

export default ShowRoadmap;
