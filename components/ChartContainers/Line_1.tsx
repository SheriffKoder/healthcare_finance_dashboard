
import {colors} from "@/constants";
import { Line1_CharData1, Line1_CharData2, Line1Labels } from '@/constants';



import React from 'react'
import LineChartComponent from "../Charts/LineChartComponent";



const Line_1 = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">

        <div className='w-[70%] h-[70%] flex items-center justify-center'>
        <LineChartComponent 
        ChartData1={Line1_CharData1} 
        ChartData2={Line1_CharData2}
        Labels={Line1Labels}
        Colors={[colors.accent1, colors.accent2]}
        />

        </div>

    </div>
  )
}

export default Line_1