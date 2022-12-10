import { createSlice, current } from "@reduxjs/toolkit";
// inJson nodes go left
// nextnodes go down
const initialState = {
  nodeID: 0,
  lineID: 0,
  padding: 10,
  nodes: [
    {
      id: 0,
      LinksTo: "TOP",
      title: "node1",
      height: 50,
      width: 100,
      sizeX: 0,
      sizeY: 0,
      subnodesCounter: 2,
      subnodes: [
        {
          id: 3,
          LinksTo: "LEFT",
          title: "node1",
          height: 50,
          width: 100,
          sizeX: 0,
          sizeY: 0,
          subnodesCounter: 2,
          subnodes: [
            {
              id: 6,
              LinksTo: "LEFT",
              title: "node1",
              height: 50,
              width: 100,
              sizeX: 0,
              sizeY: 0,
              subnodesCounter: 1,
              subnodes: [
                {
                  id: 7,
                  LinksTo: "LEFT",
                  title: "node1",
                  height: 50,
                  width: 100,
                  sizeX: 0,
                  sizeY: 0,
                  subnodesCounter: 0,
                  subnodes: [],
                },
              ],
            },
            {
              id: 8,
              LinksTo: "LEFT",
              title: "node1",
              height: 50,
              width: 100,
              sizeX: 0,
              sizeY: 0,
              subnodesCounter: 0,
              subnodes: [],
            },
          ],
        },
        {
          id: 4,
          LinksTo: "RIGHT",
          title: "node1",
          height: 50,
          width: 100,
          sizeX: 0,
          sizeY: 0,
          subnodesCounter: 0,
          subnodes: [],
        },
      ],
    }, // these go down
    {
      id: 1,
      LinksTo: "TOP",
      title: "node1",
      height: 50,
      width: 100,
      padding: 10,
      sizeX: 0,
      sizeY: 0,
      subnodesCounter: 0,
      subnodes: [],
    }, // these go down
    {
      id: 2,
      LinksTo: "TOP",
      title: "node1",
      height: 50,
      width: 100,
      padding: 10,
      sizeX: 0,
      sizeY: 0,
      subnodesCounter: 0,
      subnodes: [],
    }, // these go down
  ],
};

export const roadmapSlice = createSlice({
  name: "roadmap",
  initialState,
  reducers: {
    loadRoadmap: (state, action) => {
      state.nodes = action.payload;
    },
    addSubnode: (state, action) => {
      // adding a subnode based on the direction
    },
    removeSubnode: (state, action) => {
      // removing subnode
    },
    modifySubnode: (state, action) => {
      let foundNode = false;
      let props = action.payload;
      let id = props.id;

      let nodes = state.nodes;

      let newNodes = [];

      let iterateNodes = (node) => {
        let newSubnodes = [];
        if (node.id == id) {
          // node.sizeX = props.sizeX;
          // node.sizeY = props.sizeY;
          for (let property in props) {
            node[property] = props[property];
          }
          foundNode = true;
          return node;
        }
        if (node.subnodesCounter == 0) {
          return node;
        }
        for (let subnode of node.subnodes) {
          newSubnodes.push(iterateNodes(subnode));
        }
        node.subnodes = newSubnodes;

        return node;
      };

      for (let node of nodes) {
        newNodes.push(iterateNodes(node));
      }
      if (!foundNode) {
        console.log("node not found");
      }
      state.nodes = newNodes;
    },
  },
});

export const { loadRoadmap, modifySubnode } = roadmapSlice.actions;
export default roadmapSlice.reducer;
