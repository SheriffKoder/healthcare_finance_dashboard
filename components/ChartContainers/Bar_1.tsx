import React from 'react'
import BarChartComponent from '../Charts/BarChartComponent';
import {colors} from "@/constants";
import { Bar1_label } from '@/constants';


import { optionType } from '@/app/page';
import { facilitiesType, myCompany, patientType, servicesType } from '@/constants';
import { getAllPatients } from '@/Helpers/functions';


type PieDataType = {
  xaxis: string,
  yaxis: number
}

const Bar_1 = ({dashboardOption}:{dashboardOption:optionType}) => {

  // top payers by revenue, i.e paid

  let Bar1_CharData:PieDataType[] = [];
  let allPatients1:PieDataType[] = [];

  // when displaying a facility,
  // we want to get into all of its patients,
  // and collect their name + their revenue
  // an an object line this {xaxis: "Payer1", yaxis: "10"},
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
      service.patients.map((patient:patientType)=> {
        
        allPatients1.push({xaxis:patient.name, yaxis:patient.paid});
      })
    })
  }
 

  // we will go through all patients,
  // get the patients with this payer,
  // put them in an object
  // sort, and limit

  if (dashboardOption.type === "payer") {

    // 
    let allPatients = getAllPatients(myCompany);

    // console.log(allPatients);

    // get all patients with this payer
    const filteredPatients = allPatients.filter((patient)=> (
      patient.payer === dashboardOption.key
    ))

    // get their total billed and paid
    filteredPatients.forEach((patient)=> {
      allPatients1.push({xaxis:patient.name, yaxis:patient.paid});
    })
  
   

  }

  // we will go through all patients,
  // get the patients who paid in this year
  // put them in an object
  // sort, and limit
  if (dashboardOption.type === "year") {
     // 
     const allPatients = getAllPatients(myCompany);

     // console.log(allPatients);
 
     // get all patients who paid this year
     const filteredPatients = allPatients.filter((patient)=> (
      +patient.DOS.toISOString().slice(0,4) === +dashboardOption.key
     ))
 
      // put them in an object
      filteredPatients.forEach((patient)=> {
       allPatients1.push({xaxis:patient.name, yaxis:patient.paid});
     })

  }

  // console.log(allPatients1);
  // once got all patients for the selected category, 
  // sort by their payment higher to lower
  allPatients1 = allPatients1.sort((a, b) => b.yaxis - a.yaxis);
  // console.log(allPatients1);

  // get max 5 patients
  Bar1_CharData = allPatients1.slice(0,5);


  return (
    <div className="w-full h-full flex flex-col items-center
     p-[1rem] rounded-[10px] gap-4">
        
        <h5 className="text_sub w-full text-start flex gap-1">
          
          <span>Top payers</span>
          <span>
          {dashboardOption.type === "facility" ? "for" : ""}
          {dashboardOption.type === "payer" ? "from" : ""}
          {dashboardOption.type === "year" ? "in" : ""}
          </span>
          <span>
          {dashboardOption.key}
          </span>
        </h5>

        <div className='w-full h-[80%] flex items-center justify-center md2:justify-start'>
          <BarChartComponent 
          ChartData={Bar1_CharData} 
          colors={[colors.accent2]}
          label={Bar1_label}/>
        </div>

    </div>
  )
}

export default Bar_1