import { createSlice, current } from "@reduxjs/toolkit";
// inJson nodes go left
// nextnodes go down
import * as d3 from "d3";
import { store } from "./store";
let generateNode = ({ id, x, y, width, height }) => {
  return {
    id: id,
    title: "node1",
    height: height,
    width: width,

    anchors: [
      { x: -width, y: -height },
      { x: width, y: -height },
      { x: -width, y: height },
      { x: width, y: height },
    ],
    nearNodes: [],
    resources: {
      title: id,
      paragraph: "width",
      links: "height",
    },

    x: x,
    y: y,
  };
};

export const addZoom = () => {
  var svg = d3.select("#root-svg");

  svg.call(
    d3
      .zoom()
      .scaleExtent([1 / 3, 3])
      .on("zoom", zoomed)
  );
  svg.on("dblclick.zoom", null);
  function zoomed() {
    d3.select("#root-group").attr("transform", d3.zoomTransform(this));
  }
};

let initState = () => {
  let width = 100;
  let height = 50;
  let initialState = {
    nodeID: 1,
    lng: 150,
    lineID: 0,
    padding: 0,
    width: 100,
    height: 50,
    user: "",

    showDetails: false,
    selectedNode: 0,
    nodeMapping: { 0: 0 },
  };
  let nodes = [generateNode({ x: 200, y: 200, id: 0, width, height })];
  let connections = [];
  initialState.nodes = nodes;
  initialState.connections = connections;
  return initialState;
};

const initialState = initState();

export const roadmapNewSlice = createSlice({
  name: "roadmapNew",
  initialState,
  reducers: {
    loadRoadmap: (state, action) => {
      state.nodes = action.payload;
    },
    addNode: (state, action) => {
      // adding a subnode based on the direction
      const { x, y } = action.payload;
      let newNode = generateNode({
        x,
        y,
        height: state.height,
        width: state.width,
        id: state.nodeID,
      });

      for (let node in state.nodes) {
        // console.log("node taken", node);
        let stateNode = state.nodes[node];
        let dis = Math.sqrt(
          (newNode.x - stateNode.x) * (newNode.x - stateNode.x) +
            (newNode.y - stateNode.y) * (newNode.y - stateNode.y)
        );
        if (dis < state.lng) {
          newNode.nearNodes.push(stateNode.id);
          state.nodes[node].nearNodes.push(newNode.id);
        }
      }
      state.nodeID += 1;
      state.nodes = [newNode, ...state.nodes];
      let idx = 0;
      for (let node of state.nodes) {
        state.nodeMapping[node.id] = idx;
        idx += 1;
      }
    },
    flipDetails: (state, action) => {
      state.showDetails = !state.showDetails;
    },
    setNode: (state, action) => {
      state.selectedNode = action.payload;
    },
    updateNodes: (state, action) => {
      // console.log(action.payload);
      state.nodes = action.payload.nodes;
    },
    updateRoadmap: (state, action) => {
      let newRoadmap = action.payload;
      for (let prop in newRoadmap) {
        state[prop] = newRoadmap[prop];
      }
    },
    updateNodeData: (state, action) => {
      const { resources, id } = action.payload;
      let nodes = state.nodes;
      let newNodes = [];
      for (let node of nodes) {
        if (node.id === id) {
          newNodes.push({
            ...node,
            resources: resources,
          });
        } else {
          newNodes.push(node);
        }
      }
      state.nodes = newNodes;
    },
    removeNode: (state, action) => {
      // removing subnode
    },

    modifySubnode: (state, action) => {},
  },
});

export const {
  addNode,
  modifySubnode,
  setNode,
  updateNodeData,
  updateNodes,
  flipDetails,
} = roadmapNewSlice.actions;
export default roadmapNewSlice.reducer;
