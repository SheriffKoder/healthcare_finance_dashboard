import React from 'react'
import BarChartComponent from '../Charts/BarChartComponent'

import {colors} from "@/constants";
import { Pie1_CharData, PieColors } from '@/constants';
import PieChartComponent from '../Charts/PieChartComponent';


const Pie_1 = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">

        <div className='w-[70%] h-[70%] flex gap-4 items-center justify-center'>
          
        <div className='flex flex-col gap-2'>
          {Pie1_CharData.map((item, index) => 
            <div key={index} className='flex flex-row gap-1 items-center justify-center'>
              <p>{item.xaxis}</p>
              <span className='h-4 w-4 rounded-full'
              style={{background:PieColors[index]}}></span>
            </div>
          )}
          </div>
          
          <PieChartComponent 
          ChartData={Pie1_CharData} 
          Colors={PieColors}
          />


          
        </div>

    </div>
  )
}

export default Pie_1