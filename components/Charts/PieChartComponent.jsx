"use client"

import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChartComponent ({
  ChartData,
  Colors,}) {



    const options = {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (data) {
              return "Amount received: " + data.formattedValue;
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

  const data = {
    // labels: ChartData.map((item) => item.xaxis),
    datasets: [
      {
        data: ChartData.map((item) => item.yaxis),
        backgroundColor: Colors,
        borderWidth: 0,
      },
    ],
  };

  return (
    <Pie data={data} options={options}/>
  )
}