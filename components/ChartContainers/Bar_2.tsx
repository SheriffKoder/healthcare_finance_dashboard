import React from 'react'
import BarChartComponent from '../Charts/BarChartComponent'

import {colors} from "@/constants";
import { Bar2_CharData, Bar2_label } from '@/constants';


const Bar_2 = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">

        <div className='w-[70%] h-[70%] flex items-center justify-center'>
          <BarChartComponent 
          ChartData={Bar2_CharData} 
          colors={[colors.accent1]}
          label={Bar2_label}/>
        </div>

    </div>
  )
}

export default Bar_2