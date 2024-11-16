import React from 'react'

import { Facility_1_Score } from '@/constants'

const Score_Card = () => {
  return (
    <>
    
      <div className="w-[50%] h-[50%] border flex items-center justify-center flex-col gap-2">
        <p>{Object.keys(Facility_1_Score)[0]}</p>
        <p>{Facility_1_Score['Total Billed'].toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </div>          

      <div className="w-[50%] h-[50%] border flex items-center justify-center flex-col gap-2">
        <p>{Object.keys(Facility_1_Score)[1]}</p>
        <p>{Facility_1_Score['Total Paid'].toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </div>          

      <div className="w-[100%] h-[50%] border flex items-center justify-center flex-col gap-2">
        <p>{Object.keys(Facility_1_Score)[2]}</p>
        <p>{Facility_1_Score.OOPM.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </div>

    </>
    
  )
}

export default Score_Card