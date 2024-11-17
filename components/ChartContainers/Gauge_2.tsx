import React from 'react'
import BarChartComponent from '../Charts/BarChartComponent';
import {colors} from "@/constants";
import CircularProgress from '../Gauges/circularProgress/page';


import { optionType } from '@/app/page';
import { facilitiesType, myCompany, patientType, servicesType } from '@/constants';
import { getAllPatients } from '@/Helpers/functions';

const Gauge_2 = ({dashboardOption}:{dashboardOption:optionType}) => {


  // Payment collection rate - broad range from all customers
  // (Total amount collected / total amount due) x100
  // value sum

  let successRate = 100;

  let total_paid = 0;
  let total_billed = 0;




  if (dashboardOption.type === "facility") {



    // we want to get the total number of patients who paid their dues
    let thisFacility = {} as facilitiesType;

    // find in my company this facility object.
    myCompany.forEach((facility)=> {
      if (facility.name === dashboardOption.key) {
        thisFacility=facility;
      }
      // console.log(facility.name);
    })

    // console.log(thisFacility);


    thisFacility.services.map((service:servicesType)=> {
      service.patients.map((patient:patientType)=> {
        
        total_billed = total_billed + patient.billed;
        if (patient.paid >= patient.billed) total_paid = total_paid + patient.paid;

      })
    })

    successRate = (total_paid / total_billed)*100;
    // console.log(successRate);


  }
 
  if (dashboardOption.type === "payer") {

    // 
    let allPatients = getAllPatients(myCompany);

    // console.log(allPatients);

    // get all patients with this payer
    let filteredPatients = allPatients.filter((patient)=> (
      patient.payer === dashboardOption.key
    ))

    // get their total billed and paid
    filteredPatients.forEach((patient)=> {
      total_billed = total_billed + patient.billed;
      if (patient.paid >= patient.billed) total_paid = total_paid + patient.paid;
  })

    successRate = (total_paid / total_billed)*100;
    // console.log(successRate);

   

  }

  if (dashboardOption.type === "year") {
    // get all patients
    let allPatients = getAllPatients(myCompany);

    // find patients who are within this year
    let filteredPatients = allPatients.filter((patient)=> (
      +patient.DOS.toISOString().slice(0,4) === +dashboardOption.key
    ))

    // get their total billed and paid
    filteredPatients.forEach((patient)=> {
      total_billed = total_billed + patient.billed;
      if (patient.paid >= patient.billed) total_paid = total_paid + patient.paid;
  })

    successRate = (total_paid / total_billed)*100;
    // console.log(successRate);

  }



  return (
    <div className="w-full h-full flex items-center justify-center">

        <div className='w-[70%] h-[70%] flex items-center justify-center flex-col'>
          <CircularProgress progress={successRate}
          Colors={[colors.accent1, colors.accent1]}/>
          <span>total_billed: {total_billed}</span>
          <span>total_paid: {total_paid}</span>
        </div>

    </div>
  )
}

export default Gauge_2