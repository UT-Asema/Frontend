import { store } from "../../../store/store";

export const findNode = () => {
  let state = store.getState().roadmap;
  let nodes = state.nodes;
  let foundNode = false;
  let iterateNodes = (node) => {
    if (node.id == id || foundNode == true) {
      foundNode = true;
      return node;
    }
    if (node.subnodesCounter == 0) {
      return false;
    }
    for (let subnode of node.subnodes) {
      let node = iterateNodes(subnode);
      if (node !== false) {
        return node;
      }
    }
    return false;
  };

  for (let node of nodes) {
    let node = iterateNodes(node);
    if (node !== false) {
      return node;
    }
  }
  console.log("nodeid not found!!!!");
  console.log(node);
  return false;
};
