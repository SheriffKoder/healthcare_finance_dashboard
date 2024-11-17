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
      totalNumberOfPatients = totalNumberOfPatients + 1;
        if (patient.paid >= patient.billed) successPatients = successPatients + 1;
    })

    successRate = (successPatients / totalNumberOfPatients)*100;
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
      totalNumberOfPatients = totalNumberOfPatients + 1;
      if (patient.paid >= patient.billed) successPatients = successPatients + 1;
    })

    successRate = (successPatients / totalNumberOfPatients)*100;
    // console.log(successRate);

  }



 





  return (
    <div className="w-full h-full flex items-center justify-center flex-col">

        <div className='w-[70%] h-[70%] flex items-center justify-center'>
          <CircularProgress progress={successRate}
          Colors={[colors.accent1, colors.accent1]}/>
        </div>
        <span># Patients: {totalNumberOfPatients}</span>
        <span># success P: {successPatients}</span>

    </div>
  )
}

export default Gauge_1