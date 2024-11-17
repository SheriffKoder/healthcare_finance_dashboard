import React from 'react'
import GaugeTest from "@/components/Gauges/GaugeChartComponent";


const ChartData = [
    {companyName: "john", progressPaymentPrice: "2"},
    {companyName: "smith", progressPaymentPrice: "3"},

]

import { myCompany } from '@/constants';

const Visual_test = () => {

    console.log(myCompany);
  return (
    <main className='w-full min-h-[100vh] bg-[#000000] text-red-500
    flex items-center justify-center'>
        <div className='w-[300px] h-[300px] px-2 border-2
        flex flex-col items-center justify-center rounded-xl'>
            <GaugeTest percentage={90}/>
            Hello
        </div>
    </main>
    )
}

export default Visual_test