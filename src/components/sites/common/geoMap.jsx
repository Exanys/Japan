import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import * as d3 from "d3";
import useResizeObserver from "../../../utils/useResizeObserver";

function GeoMap({ data }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  let wid = window.screen.width;
  const getDevice = () => {
    
    let dev;
    dev = wid < 768 ? true : false;
    return dev;
  };

  const [prefecture, setPrefecture] = useState(null);
  const [island, setIsland] = useState(null);
  const [device] = useState(getDevice());

  const configureStates = (p) => {
    setPrefecture(p);
    islandName(p);
  };

  const changeUrl = (pref) => {
    axios
      .get(`https://japan-site.herokuapp.com/api/islands/pref/${pref}`)
      .then((island) => {
        let ori = window.location.origin;
        let url = `${ori}/island/${island.data}`;
        window.location.replace(url);
      })
      .catch((error) => console.log(error));
  };

  const label = () => {
    return (
      <div className="text-center bg-white text-danger p-2 rounded">
        <h1 className={"display-" + (device ? "" : "2")}>Island: {island}</h1>
        <h2 className={"display-" + (device ? "" : "3")}>
          Prefecture: {prefecture}
        </h2>
      </div>
    );
  };

  const islandName = (pref) => {
    axios
      .get(`https://japan-site.herokuapp.com/api/islands/pref/${pref}`)
      .then((island) => {
        setIsland(island.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (data) {
      let probDim = null;
      probDim = wrapperRef.current.getBoundingClientRect();
      let { width, height } = dimensions || probDim;
      height = device ? 350 : height;

      const svg = d3
        .select(svgRef.current)
        .attr("width", width)
        .attr("height", height);

      let xym = d3.geoAlbers();
      let path = d3.geoPath().projection(xym)

      xym.rotate([-134, -25]);
      xym.translate([width / 3, -(width * 0.85)]);
      xym.parallels([24.6, 43.6]);
      xym.scale(width * 3);

      svg
        .selectAll("path")
        .data(data.features[0])
        .enter()
        .append("path")
        .attr("d", path)
        .style("fill", function () {
          return "#ffffff";
        })
        .on("mouseover", function (e) {
          d3.select(this).style("fill", "#03254c");
          //console.log(e.target.__data__.properties.name);
          let name = e.target.__data__.properties.name;
          configureStates(name);
        })
        .on("click", (e) => {
          let name = e.target.__data__.properties.name;
          changeUrl(name);
        })
        .on("mouseout", function (e) {
          d3.select(this).style("fill", "#ffffff");
        });
    }
  }, [data, dimensions, device, wid]);



  return (
    <div ref={wrapperRef}>
      {prefecture && label()}
      {data !== null && (
        <div id="d3demo" style={{ height: device ? "300px" : "" }}>
          <svg ref={svgRef}></svg>
        </div>
      )}
    </div>
  );
}

export default GeoMap;
