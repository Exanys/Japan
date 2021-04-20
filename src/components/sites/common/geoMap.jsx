import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import * as d3 from "d3";
import useResizeObserver from "../../../utils/useResizeObserver";

function GeoMap({ data }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);


  const [prefecture, setPrefecture] = useState(null);
  const [island, setIsland] = useState(null);

  let probDim = null;


  useEffect(() => {
    if (data) {
        probDim =wrapperRef.current.getBoundingClientRect();
     const { width, height } =
      dimensions || probDim;

      const svg = d3
        .select(svgRef.current)
        .attr("width", width)
        .attr("height", height)

      let xym = d3.geoAlbers();
      let path = d3.geoPath().projection(xym);

      xym.rotate([-134, -25]);
      xym.translate([width / 3, -(width * 0.85)]);
      xym.parallels([24.6, 43.6]);
      xym.scale(width * 3);

    svg.selectAll("path").data(data.features[0])
    .enter().append("path")
    .attr("d", path)
    .style("fill", function() { return "#44aaee" })
    .on("mouseover", function(e){d3.select(this).style("fill", "#5522aa");
let name =e.path[0].__data__.properties.name;
configureStates(name)})
    .on("click", e => {
        let name =e.path[0].__data__.properties.name;
        changeUrl(name)})
    .on("mouseout", function(e){d3.select(this).style("fill", "#44aaee");})

    }
  },[data, dimensions]);

  const changeUrl = (pref) =>{
    axios
    .get(`http://localhost:5000/api/islands/pref/${pref}`)
    .then((island) => {
        let ori = window.location.origin;
        let url = `${ori}/island/${island.data}`;
        window.location.replace(url);
        })
    .catch((error) => console.log(error));
  }

  const configureStates = (p) => {
    setPrefecture(p);
    islandName(p);
  };

  const label = () => {
    return (
      <div>
        <h1 className="display-2">Island: {island}</h1>
        <h1 className="display-3">Prefecture: {prefecture}</h1>
      </div>
    );
  };

  const islandName = (pref) => {
       axios
        .get(`http://localhost:5000/api/islands/pref/${pref}`)
        .then((island) => {
            setIsland(island.data);})
        .catch((error) => console.log(error));
  };

  return (
    <div ref={wrapperRef}>
      {prefecture && label()}
      {data !== null && (
        <div id="d3demo"   style={{ marginBottom: "2rem" }}>
          <svg ref={svgRef}></svg>
        </div>
      )}
    </div>
  );
}

export default GeoMap;