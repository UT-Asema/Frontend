import { store } from "../../../store/store";
import * as d3 from "d3";
import { easeLinear } from "d3";
import { updateNodes } from "../../../store/roadmapNew";

export const calculateDirVector = (pos1, pos2) => {
  let dx = pos2.x - pos1.x;
  let dy = pos2.y - pos1.y;
  let distance = Math.sqrt(dx * dx + dy * dy);
  let lng = 300;
  let force = 40;
  force = Math.min(force, 10000);
  let x = 0;
  let y = 0;

  if (distance < lng) {
    let angle = Math.atan2(dy, dx);
    x = force * Math.cos(angle);
    y = force * Math.sin(angle);
  } else {
    x = 0;
    y = 0;
  }

  return {
    x,
    y,
  };
};

let calculateDirVector2 = (pos1, pos2) => {
  let distance = {
    x: Math.abs(pos1.x - pos2.x),
    y: Math.abs(pos1.y - pos2.y),
  };
  let lng = 150;

  if (
    Math.sqrt(
      (pos1.x - pos2.x) * (pos1.x - pos2.x) +
        (pos1.y - pos2.y) * (pos1.y - pos2.y)
    ) >= lng
  ) {
    distance.x = 150;
    distance.y = 150;
  }

  distance.x = lng - distance.x;
  distance.y = lng - distance.y;

  if (distance.x < 0) {
    distance.x = 0;
  }
  if (distance.y < 0) {
    distance.y = 0;
  }
  let delta = 0.4;

  let vector = {
    x: 0,
    y: 0,
  };

  if (pos1.x > pos2.x) {
    // negative X
    vector.x = distance.x;
  } else {
    vector.x = -distance.x;
  }

  if (pos1.y > pos2.y) {
    vector.y = distance.y;
  } else {
    vector.y = -distance.y;
  }
  vector.x *= delta;
  vector.y *= delta;
  return vector;
};

let validChange = (coord) => {
  return Math.abs(coord.x) > 1 || Math.abs(coord.y) > 1;
};

let copyObj = (obj) => {
  let newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
};

export const calculateDeltas = () => {
  // console.log("running");
  // console.log("calculating delta");
  let roadmap = store.getState().roadmapNew;
  let map = roadmap.nodeMapping;
  let nodes = [...roadmap.nodes];
  let newNodes = [];
  // new nodes editable now

  newNodes = [...nodes].map((el) => {
    return { ...el };
  });

  let distanceDiff = false;

  let presentIDS = {};
  for (let node1 of newNodes) {
    presentIDS[node1.id] = 1;
  }
  let queue = [...newNodes].map((el) => {
    return { ...el };
  });

  let fall = 0;
  // console.log("newnodes", newNodes);
  let mx = 0;

  while (queue.length > 0) {
    fall += 1;
    // if (fall > 100) {
    //   console.log("fai;ed");
    //   return;
    // }
    // taking out queue node
    mx = Math.max(mx, queue.length);
    let oldNodes = [...newNodes].map((el) => {
      return { ...el };
    });
    // console.log(presentIDS);
    let forward = { ...queue.splice(0, 1)[0] };
    presentIDS[forward] -= 1;
    let nearbyNodes = [...forward.nearNodes].map((el) => oldNodes[map[el]]);
    // console.log("old", nearbyNodes);
    for (let nearby in oldNodes) {
      let nearbyNode = { ...oldNodes[nearby] };
      if (nearbyNode.id === forward.id) {
        continue;
      }
      let pos1 = {
        x: forward.x,
        y: forward.y,
      };
      let pos2 = {
        x: nearbyNode.x,
        y: nearbyNode.y,
      };
      // console.log(pos1, pos2);
      let vectorDir = calculateDirVector(pos1, pos2);
      // console.log(vectorDir);
      // console.log(forward.id, nearbyNode.id, pos1, pos2);
      if (validChange(vectorDir)) {
        distanceDiff = true;
        // push in both directions
        // console.log("oorwa", forward);

        forward.x -= vectorDir.x;
        forward.y -= vectorDir.y;
        // console.log("oorwa", forward);

        // console.log("f1", nearbyNode);
        // console.log("f1", nearbyNode);

        nearbyNode.x += vectorDir.x;
        nearbyNode.y += vectorDir.y;

        // console.log("f2", nearbyNode);
        // console.log("f2", nearbyNode);

        // // updating values in newNodes
        let indexNearby = roadmap.nodeMapping[nearbyNode.id];
        let indexForward = roadmap.nodeMapping[forward.id];
        // console.log(indexNearby, indexForward);
        // console.log(newNodes[indexForward]);

        newNodes[indexNearby] = { ...nearbyNode };
        newNodes[indexForward] = { ...forward };

        // console.log(newNodes[indexForward]);

        if (presentIDS[nearbyNode.id] > 0) {
          // console.log("is present");
        } else {
          queue.push({ ...nearbyNode });
          presentIDS[nearbyNode.id] += 1;
        }
      }
    }
    // console.log("new", newNodes);

    // console.log("\n");
  }
  // console.log("mx", mx);
  // console.log(newNodes);

  // console.log(power, newNodes.length);
  // console.log(fall);
  if (distanceDiff) {
    store.dispatch(updateNodes({ nodes: newNodes }));
  }
};
