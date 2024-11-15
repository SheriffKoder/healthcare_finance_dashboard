"use client"

import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChartComponent ({ChartData}) {
  const data = {
    labels: ChartData.map((item) => item.companyName),
    datasets: [
      {
        data: ChartData.map((item) => item.progressPaymentPrice),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <Pie data={data} />
  )
}