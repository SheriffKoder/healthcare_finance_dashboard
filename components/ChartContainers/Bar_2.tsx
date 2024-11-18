import React from 'react'
import BarChartComponent from '../Charts/BarChartComponent'

import {colors} from "@/constants";
import { Bar2_label } from '@/constants';

import { optionType } from '@/app/page';
import { facilitiesType, myCompany, servicesType } from '@/constants';


type PieDataType = {
  xaxis: string,
  yaxis: number
}

const Bar_2 = ({dashboardOption}:{dashboardOption:optionType}) => {


  // number of patients per option,
  const Bar2_CharData:PieDataType[] = [];


  // number of patients per facility, i.e 
  // i.e number of patients for each service in this facility
  if (dashboardOption.type === "facility") {

    let thisFacility = {} as facilitiesType;

    // find in my company this facility object.
    myCompany.forEach((facility)=> {
      if (facility.name === dashboardOption.key) {
        thisFacility=facility;
      }
      // console.log(facility.name);
    })

    thisFacility.services.map((service:servicesType)=> {
      const numberOfPatients = service.patients.length;
        
      Bar2_CharData.push({xaxis:service.LOC, yaxis:numberOfPatients});
        // numberOfPatients.push({xaxis:patient.name, yaxis:patient.paid});
    })

  }
 

  // number of patients for each facility in this payer category
  if (dashboardOption.type === "payer") {
    // get all the patients with their facility -- this payer

    myCompany.forEach((facility)=> {

        let patientCount = 0;
        let index = 0;
        facility.services.forEach((service)=> {

            const filtered = service.patients.filter((patient)=> (
              patient.payer === dashboardOption.key
            ))
            patientCount = patientCount + filtered.length;
            // console.log(facility.name, patientCount);

            Bar2_CharData[index] = {xaxis:facility.name, yaxis:patientCount};
            index++;

        })


    })
   
  
  }

  
  // number of patients for each facility in this year
  if (dashboardOption.type === "year") {
    myCompany.forEach((facility)=> {

      let patientCount = 0;
      let index = 0;

      facility.services.forEach((service)=> {

          const filtered = service.patients.filter((patient)=> (
            +patient.DOS.toISOString().slice(0,4) === +dashboardOption.key
          ))
          
          patientCount = patientCount + filtered.length;
          // console.log(facility.name, patientCount);

          Bar2_CharData[index] = {xaxis:facility.name, yaxis:patientCount};
          index++;

      })


    })

  }

  // console.log(Bar2_CharData);

  




  return (
    <div className="w-full h-full flex flex-col items-center
    p-[1rem] rounded-[10px] gap-4">
       
       <h5 className="text_sub w-full text-start flex gap-1">
         
         <span>Number of patients</span>
         <span>
         {dashboardOption.type === "facility" ? "in" : ""}
         {dashboardOption.type === "payer" ? "from" : ""}
         {dashboardOption.type === "year" ? "in" : ""}
         </span>
         <span>
         {dashboardOption.key}
         </span>
       </h5>

       <div className='w-full h-[80%] flex items-center justify-center md2:justify-start'>
         <BarChartComponent 
         ChartData={Bar2_CharData} 
         colors={[colors.accent2]}
         label={Bar2_label}/>
       </div>

   </div>
  )
}

export default Bar_2