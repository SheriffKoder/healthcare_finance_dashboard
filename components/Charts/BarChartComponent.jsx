'use client'
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChartComponent({ ChartData, colors, label }) {

  const options = {
    // Remove background grid lines
    scales: {
      
      x: {
          grid: {
            // offset: true,
            // beginAtZero: true,
            // grid: {
              display: false,
            // }
            
          }
      },
      y: {
        grid: {
          // offset: true,
          // beginAtZero: true,
          // grid: {
            display: false,
          // }
        }
    }
  },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (data) {
            return label+ ": " + data.formattedValue;
          },
        },
      },
      datalabels: {
        // formatter: function (value) {
        //    //custom money icon
        //   return "₺" + new Intl.NumberFormat("tr-TR").format(value);
        // },
        color: "white",
        font: {
          weight: 'bold',
          size:14,
          family: 'poppins'
        },
      },
    },
  };
  // The following colors will be used sequentially for the chart bars
  // const backgroundColors = [
  //   // "#000000", "#002B49", "#0067A0"
  // ];
  const backgroundColors = colors;

  const borderColors = [
      // 'rgb(255, 0, 0)',
      // 'rgb(255, 0, 0)',
      // 'rgb(255, 0, 0)',
    ]


  const data = {
    labels: ChartData.map((item) => item.xaxis),
    datasets: [
      {

        label: ChartData.map((item) => item.yaxis),
        data: ChartData.map((item) => item.yaxis),
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
        borderRadius: "5",
        maxBarThickness: "30",
        

      },
    ],
  };

  return <Bar data={data} options={options} />

}