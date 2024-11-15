import React from 'react'
import LineChartComponent from "@/components/Charts/LineChartComponent";


const ChartData1 = [
    {companyName: "john", progressPaymentPrice: "2"},
    {companyName: "smith", progressPaymentPrice: "3"},
    {companyName: "john", progressPaymentPrice: "2"},
    {companyName: "john", progressPaymentPrice: "2"},

]

const ChartData2 = [
    {companyName: "john", progressPaymentPrice: "3"},
    {companyName: "smith", progressPaymentPrice: "5"},
    {companyName: "john", progressPaymentPrice: "1"},
    {companyName: "john", progressPaymentPrice: "6"},

]

const Visual_test = () => {
  return (
    <main className='w-full min-h-[100vh] bg-white text-red-500
    flex items-center justify-center'>
        <div className='w-[300px] h-[300px] px-2 border-2
        flex items-center justify-center rounded-xl'>
            <LineChartComponent ChartData1={ChartData1} ChartData2={ChartData2}/>
        </div>
    </main>
    )
}

export default Visual_test