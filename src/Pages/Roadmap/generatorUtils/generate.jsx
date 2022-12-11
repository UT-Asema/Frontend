import { store } from "../../../store/store";
import * as d3 from "d3";
import { dispatch, easeLinear } from "d3";
import { updateNodes } from "../../../store/roadmapNew";
import { addNode, setNode } from "../../../store/roadmapNew";
import { flipDetails } from "../../../store/roadmapNew";
import { findNode } from "./utils";

export const generateStructure = () => {
  let roadmap = store.getState().roadmapNew;
  let nodes = [...roadmap.nodes];

  let rootElement = d3.selectAll("#boxes-group");
  rootElement
    .selectAll("rect")
    .data(nodes, (data) => {
      return data.id;
    })
    .enter()
    .append("rect")
    .attr("opacity", 0)
    .attr("stroke-width", 3)
    .attr("fill", "white")
    .attr("width", (data) => data.width)
    .attr("height", (data) => data.height)
    .attr("x", (data) => data.x)
    .attr("y", (data) => data.y)
    .attr("rx", 15);

  rootElement
    .selectAll("rect")

    .data(nodes, (data) => {
      return data.id;
    })
    .attr("r", 20)
    .transition()
    .duration(150)
    .ease(easeLinear)
    .attr("opacity", 1)
    .attr("x", (data) => data.x)
    .attr("y", (data) => data.y)
    .attr("width", (data) => data.width)
    .attr("height", (data) => data.height)
    .attr("stroke", "black")
    .attr("className", "")
    .attr("stroke-width", 3)
    .attr("rx", 15);

  rootElement
    .selectAll("rect")

    .data(nodes, (data) => {
      return data.id;
    })
    .on("click", (e, data) => {
      store.dispatch(flipDetails());
      store.dispatch(setNode(data.id));
    });
  // console.log(nodes);
  rootElement
    .selectAll("text")
    .data(nodes, (data) => {
      return data.id;
    })
    .join("text")
    .attr("x", (data) => data.x + 50)
    .attr("y", (data) => data.y + 50)
    .transition()
    .duration(150)
    .ease(easeLinear)

    .text((data) => `${data.resources.title}`);

  let connections = [...roadmap.connections].map((el) => {
    return {
      id: el.id,
      node1: findNode(el.x),
      node2: findNode(el.y),
    };
  });

  rootElement = d3.selectAll("#lines-group");
  rootElement
    .selectAll("line")
    .data(connections, (data) => {
      return data.id;
    })
    .enter()
    .append("line")
    .attr("opacity", 1)
    .attr("stroke-width", 2)
    .attr("stroke", "white")

    .attr("x1", (data) => data.node1.x + 100)
    .attr("y1", (data) => data.node1.y + 50)

    .attr("x2", (data) => data.node2.x + 100)
    .attr("y2", (data) => data.node2.y + 50);

  rootElement
    .selectAll("line")
    .data(connections, (data) => {
      return data.id;
    })
    .transition()
    .duration(150)
    .ease(easeLinear)
    .attr("opacity", 1)
    .attr("stroke-width", 4)
    .attr("stroke", "white")

    .attr("x1", (data) => data.node1.x + 100)
    .attr("y1", (data) => data.node1.y + 50)

    .attr("x2", (data) => data.node2.x + 100)
    .attr("y2", (data) => data.node2.y + 50);
};

export const generateUI = (clear) => {
  let roadmap = store.getState().roadmapNew;
  let nodes = [...roadmap.nodes];
  if (clear) {
    nodes = [];
  }

  let rootElement = d3.selectAll("#buttonsTop-group");
  rootElement
    .selectAll("circle")
    .data(nodes, (data) => {
      return data.id;
    })
    .enter()
    .append("circle")
    .attr("opacity", 0)
    .attr("stroke-width", 2)
    .attr("fill", "black")

    .attr("cx", (data) => data.x + data.width / 2)
    .attr("cy", (data) => data.y);

  rootElement
    .selectAll("circle")
    .data(nodes, (data) => {
      return data.id;
    })
    .attr("r", 10)
    .transition()
    .duration(150)
    .ease(easeLinear)
    .attr("opacity", 1)
    .attr("cx", (data) => data.x + data.width / 2)
    .attr("cy", (data) => data.y)
    .attr("width", (data) => data.width)
    .attr("height", (data) => data.height)
    .attr("stroke", "black")
    .attr("className", "")
    .attr("stroke-width", 5);

  rootElement
    .selectAll("circle")
    .data(nodes, (data) => {
      return data.id;
    })
    .join("circle")
    .on("click", (e, data) => {
      // console.log("clicked", data);
      store.dispatch(
        addNode({
          id: data.id,
          y: data.y - 100 - data.height,
          x: data.x,
        })
      );
    });

  rootElement = d3.selectAll("#buttonsLeft-group");
  rootElement
    .selectAll("circle")
    .data(nodes, (data) => {
      return data.id;
    })
    .enter()
    .append("circle")
    .attr("opacity", 0)
    .attr("stroke-width", 2)
    .attr("fill", "black")

    .attr("cx", (data) => data.x)
    .attr("cy", (data) => data.y + data.height / 2);

  rootElement
    .selectAll("circle")
    .data(nodes, (data) => {
      return data.id;
    })
    .attr("r", 10)
    .transition()
    .duration(150)
    .ease(easeLinear)
    .attr("opacity", 1)
    .attr("cx", (data) => data.x)
    .attr("cy", (data) => data.y + data.height / 2)
    .attr("width", (data) => data.width)
    .attr("height", (data) => data.height)
    .attr("stroke", "black")
    .attr("className", "")
    .attr("stroke-width", 5);

  rootElement
    .selectAll("circle")
    .data(nodes, (data) => {
      return data.id;
    })
    .join("circle")
    .on("click", (e, data) => {
      // console.log("clicked", data);
      store.dispatch(
        addNode({
          id: data.id,
          y: data.y,
          x: data.x - 100 - data.width,
        })
      );
    });

  rootElement = d3.selectAll("#buttonsBottom-group");
  rootElement
    .selectAll("circle")
    .data(nodes, (data) => {
      return data.id;
    })
    .enter()
    .append("circle")
    .attr("opacity", 0)
    .attr("stroke-width", 2)
    .attr("fill", "black")

    .attr("cx", (data) => data.x + data.width / 2)
    .attr("cy", (data) => data.y + data.height);

  rootElement
    .selectAll("circle")
    .data(nodes, (data) => {
      return data.id;
    })
    .attr("r", 10)
    .transition()
    .duration(150)
    .ease(easeLinear)
    .attr("opacity", 1)
    .attr("cx", (data) => data.x + data.width / 2)
    .attr("cy", (data) => data.y + data.height)
    .attr("width", (data) => data.width)
    .attr("height", (data) => data.height)
    .attr("stroke", "black")
    .attr("className", "")
    .attr("stroke-width", 5);

  rootElement
    .selectAll("circle")
    .data(nodes, (data) => {
      return data.id;
    })
    .join("circle")
    .on("click", (e, data) => {
      // console.log("clicked", data);
      store.dispatch(
        addNode({
          id: data.id,
          y: data.y + data.height + 100,
          x: data.x,
        })
      );
    });

  rootElement = d3.selectAll("#buttonsRight-group");
  rootElement
    .selectAll("circle")
    .data(nodes, (data) => {
      return data.id;
    })
    .enter()
    .append("circle")
    .attr("opacity", 0)
    .attr("stroke-width", 2)
    .attr("fill", "black")

    .attr("cx", (data) => data.x + data.width)
    .attr("cy", (data) => data.y + data.height / 2);

  rootElement
    .selectAll("circle")
    .data(nodes, (data) => {
      return data.id;
    })
    .attr("r", 10)
    .transition()
    .duration(150)
    .ease(easeLinear)
    .attr("opacity", 1)

    .attr("cx", (data) => data.x + data.width)
    .attr("cy", (data) => data.y + data.height / 2)
    .attr("width", (data) => data.width)
    .attr("height", (data) => data.height)
    .attr("stroke", "black")
    .attr("className", "")
    .attr("stroke-width", 5);

  rootElement
    .selectAll("circle")
    .data(nodes, (data) => {
      return data.id;
    })
    .join("circle")
    .on("click", (e, data) => {
      // console.log("clicked", data);
      store.dispatch(
        addNode({
          id: data.id,
          y: data.y,
          x: data.x + data.width + 100,
        })
      );
    });
};
