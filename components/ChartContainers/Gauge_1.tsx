import React from 'react'
import {colors} from "@/constants";
import CircularProgress from '../Gauges/circularProgress/page';


import { optionType } from '@/app/page';
import { facilitiesType, myCompany, patientType, servicesType } from '@/constants';
import { getAllPatients } from '@/Helpers/functions';



const Gauge_1 = ({dashboardOption}:{dashboardOption:optionType}) => {

  // console.log(dashboardOption);

  // Payment percentage - individual
  // (amount paid / amount due) x100
  // let us say that this is for customer count..

 
  let successRate = 100;

  let successPatients = 0;
  let totalNumberOfPatients = 0;



  // get the total number of patients who paid their dues in the selected facility
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
        
        totalNumberOfPatients = totalNumberOfPatients + 1;
        if (patient.paid >= patient.billed) successPatients = successPatients + 1;

      })
    })

    successRate = (successPatients / totalNumberOfPatients)*100;
    // console.log(successRate);


  }

  // get the total number of patients who paid their dues having the selected payer in their object
  if (dashboardOption.type === "payer") {

    // 
    const allPatients = getAllPatients(myCompany);

    // console.log(allPatients);

    // get all patients with this payer
    const filteredPatients = allPatients.filter((patient)=> (
      patient.payer === dashboardOption.key
    ))

    // get their total billed and paid
    filteredPatients.forEach((patient)=> {
      totalNumberOfPatients = totalNumberOfPatients + 1;
        if (patient.paid >= patient.billed) successPatients = successPatients + 1;
    })

    successRate = (successPatients / totalNumberOfPatients)*100;
    // console.log(successRate);

   

  }

  // get the total number of patients who paid their dues in the selected year
  if (dashboardOption.type === "year") {
    // get all patients
    const allPatients = getAllPatients(myCompany);

    // find patients who are within this year
    const filteredPatients = allPatients.filter((patient)=> (
      +patient.DOS.toISOString().slice(0,4) === +dashboardOption.key
    ))

    // get their total billed and paid
    filteredPatients.forEach((patient)=> {
      totalNumberOfPatients = totalNumberOfPatients + 1;
      if (patient.paid >= patient.billed) successPatients = successPatients + 1;
    })

    successRate = (successPatients / totalNumberOfPatients)*100;
    // console.log(successRate);

  }



 





  return (
    <div className="w-full h-full flex flex-row p-[1em] glass_card
    rounded-[10px]">

        <div className="flex flex-col gap-1 w-[60%]">

          <h4 className="text_main">Payment percentage</h4>
          <p className="text_sub">Total paid patients</p>
          <p className="num_lg">{successPatients} / {totalNumberOfPatients}</p>

        </div>

        <div className='flex items-center justify-center flex-1'>
          <CircularProgress progress={successRate}
          Colors={[colors.accent1, colors.accent2]}/>
        </div>


    </div>
  )
}

export default Gauge_1