import React from 'react'
import BarChartComponent from '../Charts/BarChartComponent';
import {colors} from "@/constants";
import { Gauge1_CharData } from '@/constants';
import CircularProgress from '../Gauges/circularProgress/page';


const Gauge_1 = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">

        <div className='w-[70%] h-[70%] flex items-center justify-center'>
          <CircularProgress progress={Gauge1_CharData}
          Colors={[colors.accent1, colors.accent1]}/>
        </div>

    </div>
  )
}

export default Gauge_1