import React, { useRef, useEffect, useState } from "react";
import { select, geoPath, geoAlbers} from "d3";

function GeoChart({data}) {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        const svg = select(svgRef.current);
        const xym = geoAlbers();
        xym.origin([134, 25])
        xym.translate([350, 745])
        xym.parallels([24.6, 43.6])
        xym.scale(1980)
        const path = geoPath().projection(xym);
        svg.selectAll("path").data(data.features)
        .enter().append("path")
        .attr("d", path)
        .style("fill", function() { return "#44aaee" })
        .on("mouseover", function(e){d3.select(this).style("fill", "#5522aa");
    setSelectedCountry(e);})
        .on("mouseout", function(e){d3.select(this).style("fill", "#44aaee");
        setSelectedCountry(null);})
    },[data])

    return (
        <div  style={{ marginBottom: "2rem" }}>
        <svg ref={svgRef}></svg>
      </div>
    )
}

export default GeoChart
