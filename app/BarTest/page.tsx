import React from 'react'
import BarChartComponent from "@/components/Charts/BarChartComponent";


const chartData = [
    {companyName: "john", progressPaymentPrice: "2"},
    {companyName: "smith", progressPaymentPrice: "3"},
    {companyName: "john", progressPaymentPrice: "2"},
    {companyName: "john", progressPaymentPrice: "2"},

]

const Visual_test = () => {
  return (
    <main className='w-full min-h-[100vh] bg-white text-red-500
    flex items-center justify-center'>
        <div className='w-[300px] h-[300px] px-2 border-2
        flex items-center justify-center rounded-xl'>
            <BarChartComponent ChartData={chartData}/>
        </div>
    </main>
    )
}

export default Visual_test