import { store } from "../../../store/store";

export const findNode = (id) => {
  let state = store.getState().roadmapNew;
  let nodes = state.nodes;
  for (let node of nodes) {
    if (node.id == id) {
      return node;
    }
  }
  return false;
};
