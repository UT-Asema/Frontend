import { store } from "../../../store/store";
import * as d3 from "d3";
import { dispatch, easeLinear } from "d3";
import { updateNodes } from "../../../store/roadmapNew";
import { addNode, setNode } from "../../../store/roadmapNew";
import { flipDetails } from "../../../store/roadmapNew";

export const generateStructure = () => {
  let roadmap = store.getState().roadmapNew;
  let nodes = [...roadmap.nodes];
  // nodes = nodes.map((el) => {
  //   return {
  //     ...el,
  //     x: el.x + 200,
  //     y: el.y + 200,
  //   };
  // });
  //console.log(nodes);
  let rootElement = d3.selectAll("#boxes-group");
  rootElement
    .selectAll("rect")
    .data(nodes, (data) => {
      return data.id;
    })
    .enter()
    .append("rect")
    .attr("opacity", 0)
    .attr("stroke-width", 5)
    .attr("fill", "white")
    .attr("width", (data) => data.width)
    .attr("height", (data) => data.height)
    .attr("x", (data) => data.x)
    .attr("y", (data) => data.y);

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
    .attr("stroke-width", 5);

  rootElement
    .selectAll("rect")

    .data(nodes, (data) => {
      return data.id;
    })
    .on("click", (e, data) => {
      store.dispatch(flipDetails());
      store.dispatch(setNode(data.id));
    });

  rootElement
    .selectAll("text")
    .data(nodes, (data) => {
      return data.id;
    })
    .join("text")

    .transition()
    .duration(150)
    .ease(easeLinear)
    .attr("x", (data) => data.x + 50)
    .attr("y", (data) => data.y + 20)
    .text((data) => `${data.id}`);
};

export const generateUI = () => {
  let roadmap = store.getState().roadmapNew;
  let nodes = [...roadmap.nodes];

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
      console.log("clicked", data);
      store.dispatch(
        addNode({
          y: data.y - 100,
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
      console.log("clicked", data);
      store.dispatch(
        addNode({
          y: data.y,
          x: data.x - 100,
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
      console.log("clicked", data);
      store.dispatch(
        addNode({
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
      console.log("clicked", data);
      store.dispatch(
        addNode({
          y: data.y,
          x: data.x + data.width + 100,
        })
      );
    });
};
