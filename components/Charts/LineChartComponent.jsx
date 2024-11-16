"use client"
import React from "react";

import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,

);






export default function LineChartComponent({
  ChartData1, 
  ChartData2, 
  Labels,
  Colors,
}) {

  const data = {
    // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    labels: ChartData1.map((item) => item.xaxis),
    datasets: [
      {
        label: Labels.firstDataSet,
        data: ChartData1.map((item) => item.yaxis),
        fill: false,
        backgroundColor: Colors[0],
        borderColor: Colors[0]
      },
      {
        label: Labels.secondDataSet,
        data: ChartData2.map((item) => item.yaxis),
        fill: false,
        backgroundColor: Colors[1],
        borderColor: Colors[1]
      }
    ]
  };


  return (
      <Line data={data} />
  );
}