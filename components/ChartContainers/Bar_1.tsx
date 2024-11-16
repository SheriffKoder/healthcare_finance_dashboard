import React from 'react'
import BarChartComponent from '../Charts/BarChartComponent';
import {colors} from "@/constants";
import { Bar1_CharData, Bar1_label } from '@/constants';


const Bar_1 = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">

        <div className='w-[70%] h-[70%] flex items-center justify-center'>
          <BarChartComponent 
          ChartData={Bar1_CharData} 
          colors={[colors.accent1]}
          label={Bar1_label}/>
        </div>

    </div>
  )
}

export default Bar_1