import { store } from "../../../store/store";
import { modifySubnode } from "../../../store/roadmap";

export const calculateSizes = () => {
  let { roadmap } = store.getState();
  let padding = roadmap.padding;
  //console.log(padding);

  for (let node of roadmap.nodes) {
    calculateNodeSize(node);
  }

  function calculateNodeSize(node) {
    let sizeX = 0;
    let sizeY = 0;
    let newNode = { ...node };
    if (node.subnodesCounter == 0) {
      sizeX = node.width + padding;
      sizeY = node.height + padding;
      newNode.sizeX = sizeX;
      newNode.sizeY = sizeY;
    } else {
      let sizeXLeft = 0;
      let sizeYLeft = 0;
      let sizeYRight = 0;
      let sizeXRight = 0;

      sizeX = node.width + padding;
      sizeY = node.height + padding;

      for (let subnode of node.subnodes) {
        subnode = calculateNodeSize(subnode);
        let dir = subnode.LinksTo;
        if (dir == "LEFT") {
          // adding corresponding sizes to left part
          sizeXLeft = sizeXLeft + subnode.sizeX;
          sizeYLeft = Math.max(sizeYLeft, subnode.sizeY);
          // we assume all nodes have been calculated already
        }
        if (dir == "RIGHT") {
          sizeXRight = sizeXRight + subnode.sizeX;
          sizeYRight = Math.max(sizeYRight, subnode.sizeY);
        }
      }

      sizeY = Math.max(sizeY, sizeYLeft, sizeYRight) + padding;
      sizeX = sizeX + sizeXLeft + sizeXRight + padding;
      newNode.sizeY = sizeY;
      newNode.sizeX = sizeX;
    }
    store.dispatch(
      modifySubnode({
        id: node.id,
        sizeX,
        sizeY,
      })
    );

    return newNode;
  }
  //appending sizes to all elements
};

export const calculatePositions = () => {
  // calculating position based on previous box sizes
  let { roadmap } = store.getState();
  let idx = 0;
  let positionX = 0;
  let positionY = 0;
  for (let node of roadmap.nodes) {
    positionX = 0;
    positionY = 0;
    let newNode = { ...node };
    positionX = 0;
    if (idx != 0) {
      positionY =
        roadmap.nodes[idx - 1].positionY +
        roadmap.nodes[idx - 1].sizeY / 2 +
        newNode.sizeY / 2;
    } else {
      newNode.positionX = 0;
    }

    calculatePosition(newNode);
  }

  function calculatePosition(node) {
    let positionX = 0;
    let positionY = 0;
    let newNode = { ...node };

    if (node.subnodesCounter == 0) {
      return newNode;
    } else {
      for (let subnode of node.subnodes) {
        subnode = calculatePosition(subnode);
        let dir = subnode.LinksTo;
        if (dir == "LEFT") {
        }
        if (dir == "RIGHT") {
        }
      }
    }
    store.dispatch(
      modifySubnode({
        id: node.id,
        positionX,
        positionY,
      })
    );

    return newNode;
  }
};
