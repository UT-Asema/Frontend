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
import { useParams } from "react-router";

import { createPost } from "../../api/requests";

const ShowRoadmap = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const { roadmapNew } = useSelector((state) => state);

  const [showDetails, setshowDetails] = useState(roadmapNew.showDetails);
  const [DetailsID, setDetailsID] = useState(roadmapNew.selectedNode);
  const [node, setNode] = useState("");
  const [editing, setEditing] = useState(false);
  const [CanEdit, setCanEdit] = useState(id == 0);
  const [displayButtons, setdisplayButtons] = useState(true);

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

  // console.log(node);
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
    <div className="border-2 h-full w-full flex bg-[#f6d9f3]">
      <div className="w-96 h-full border-2 bg-[#1D142C]">
        <div className="flex justify-center w-full">
          <div className="relative mt-20 font-sans bg-gray-50 inline-block text-center justify-center font-bold text-xl rounded-xl p-3">
            Create Your Own!
          </div>
        </div>
        <div className="flex justify-center w-full">
          {CanEdit && (
            <div>
              <div className="flex justify-center content-center">
                <button
                  onClick={() => {
                    setdisplayButtons((e) => {
                      // console.log(e);
                      return !e;
                    });
                  }}
                  className="m-10 mt-20 relative  font-sans bg-gray-50 inline-block text-center justify-center font-bold text-xl rounded-xl p-3"
                >
                  {displayButtons ? "Edit" : "Save"}
                </button>
              </div>

              <button
                onClick={() => {
                  let data = roadmapNew;
                  console.log(data);
                  data = JSON.stringify(data);
                  createPost("loremipsum", "desc", data);
                }}
                className="m-10 mt-20 relative  font-sans bg-gray-50 inline-block text-center justify-center font-bold text-xl rounded-xl p-3"
              >
                Save to database
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-full">
        <svg
          id="root-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <g id="root-group">
            <Generator
              editing={displayButtons}
              setEditing={setdisplayButtons}
            />
          </g>
        </svg>
      </div>
      {showDetails && (
        <div
          id="data-div"
          className=" w-72 border-2 border-black bg-white shadow-xl absolute text-center right-0 h-full"
        >
          {/* {DetailsID} */}
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
                  class="border-2 border-rose-500"
                />
              </div>
              <div className=" m-10">
                <input
                  type="text"
                  value={node.resources.paragraph}
                  onChange={(e) => {
                    //
                    // console.log(e.target.value);s
                    changeParagraph(e.target.value);
                  }}
                  className="paragraph"
                  class="border-2 border-rose-500"
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
                  class="border-2 border-rose-500"
                />
              </div>
            </>
          )}
          {editing && (
            <button
              onClick={() => {
                toggleEdit();
              }}
              class="borde-2 py-1 w-36 justify-center hover:scale-110 duration-300 rounded-md hover:text-white border-[#ba45b4] bg-[#ba45b4] font-semibold"
            >
              Save changes
            </button>
          )}
          {!editing && CanEdit && (
            <button
              onClick={() => {
                toggleEdit();
              }}
              class="borde-2 m-14 w-36 py-1 hover:scale-110 duration-300 justify-center rounded-md hover:text-white border-[#ba45b4] bg-[#ba45b4] font-semibold"
            >
              Edit data
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ShowRoadmap;
