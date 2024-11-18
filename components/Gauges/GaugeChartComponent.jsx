"use client"

import PathPercentage from "react-svg-path-percentage";


export default function GaugeChartComponent ({percentage}) {

  const style = {
    fill: "transparent",
    fillOpacity: 1,
    stroke: "rgba(0,0,0,0.2)",
    strokeWidth: 25,
    strokeLinecap: "round"
  };

  const gaugeColor = "rgba(0,0,233,0.9)";

  

  const Svg3 = () => {

    return (
      // <svg
      //   xmlns="http://www.w3.org/2000/svg"
      //   version="1.1"
      //   preserveAspectRatio="xMidYMid meet"
      // >
        <svg id="paths" 
        xmlns="http://www.w3.org/2000/svg" viewBox="100 10 150 120" width="200" height="120"         >
          <path d="M100 100 A 40 40 90 0 1 250 100" style={style} />
          <PathPercentage percentage={percentage}>
            <path
              d="M100 100 A 40 40 90 0 1 250 100"
              style={{
                ...style,
                strokeWidth: 16,
                transition: "all 0.5s",
                stroke: gaugeColor,
              }}
            />
          </PathPercentage>
          <text>{percentage}</text>
        </svg>
      // </svg>
    );
  };

  return (
    <Svg3/>
  )
}