import React from "react";
import { useEffect, useState } from "react";
import * as d3 from "d3";
import Generator from "./Generator";
import { store } from "../../store/store";
import { useDispatch } from "react-redux";
import { findNode } from "./generatorUtils/utils";
import { addNode } from "../../store/roadmapNew";
import { useSelector } from "react-redux";
import { updateNodeData } from "../../store/roadmapNew";
const ShowRoadmap = () => {
  const dispatch = useDispatch();
  const { roadmapNew } = useSelector((state) => state);

  const [showDetails, setshowDetails] = useState(roadmapNew.showDetails);
  const [DetailsID, setDetailsID] = useState(roadmapNew.selectedNode);
  const [node, setNode] = useState("");
  const [editing, setEditing] = useState(false);
  const [CanEdit, setCanEdit] = useState(true);

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
  }, [roadmapNew.selectedNode, roadmapNew.nodes]);

  console.log(node);
  let testReducer = () => {
    dispatch(addNode());
  };

  let toggleEdit = () => {
    if (editing == false) {
      // transfer roadmap to proto roadmap
    }
    setEditing((e) => !e);
  };

  let changeTitle = (value) => {
    let resources = { ...node.resources };
    resources.title = value;
    dispatch(updateNodeData({ resources, id: DetailsID }));
  };
  let changeLink = (value) => {
    let resources = { ...node.resources };
    resources.links = value;
    dispatch(updateNodeData({ resources, id: DetailsID }));
  };
  let changeParagraph = (value) => {
    let resources = { ...node.resources };
    resources.paragraph = value;
    dispatch(updateNodeData({ resources, id: DetailsID }));
  };

  return (
    <div className="border-2 h-full w-full flex">
      <div className="w-72 h-full border-2 ">
        <div>menu var</div>
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
          {!editing && CanEdit && (
            <button
              onClick={() => {
                toggleEdit();
              }}
            >
              Edit data
            </button>
          )}
          {editing && (
            <button
              onClick={() => {
                toggleEdit();
              }}
            >
              Save changes
            </button>
          )}

          {DetailsID}
          {!editing && (
            <>
              <div className="title">--{node.resources.title}</div>
              <div className="body">--{node.resources.paragraph}</div>
              <div className="Resources">--{node.resources.links}</div>
            </>
          )}
          {editing && (
            <>
              <div className=" m-10">
                <input
                  type="text"
                  value={node.resources.title}
                  onChange={(e) => {
                    //
                    changeTitle(e.target.value);
                  }}
                  className="title"
                />
              </div>
              <div className=" m-10">
                <input
                  type="text"
                  value={node.resources.paragraph}
                  onChange={(e) => {
                    //
                    console.log(e.target.value);
                    changeParagraph(e.target.value);
                  }}
                  className="paragraph"
                />
              </div>
              <div className=" m-10">
                <input
                  type="text"
                  value={node.resources.links}
                  onChange={(e) => {
                    //
                    changeLink(e.target.value);
                  }}
                  className="Links"
                />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ShowRoadmap;
