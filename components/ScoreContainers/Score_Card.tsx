import React from 'react'

import { optionType } from '@/app/page';

import { facilitiesType, myCompany, patientType, servicesType } from '@/constants';
import { getAllPatients, yearOOPM } from '@/Helpers/functions';
import { PayerOOPM } from '@/Helpers/functions';



const Score_Card = ({dashboardOption}:{dashboardOption:optionType}) => {

  // console.log(dashboardOption);
  let total_billed = 0;
  let total_paid = 0;
  let total_OOPM = 0;

  // This component should get back the passed facility,
  // console.log(dashboardOption.key);

  if (dashboardOption.type === "facility") {

    let thisFacility = {} as facilitiesType;

    // find in my company this facility object.
    myCompany.forEach((facility)=> {
      if (facility.name === dashboardOption.key) {
        thisFacility=facility;
      }
      // console.log(facility.name);
    })

    // console.log(thisOption);

    ////////////////////////////////////////////////////////////
    // For this facility, what is the total billed amount
    // now i want to get the total billed amount from all
    // the patients inside all the services
    // so i've the services now, i want to iterate over the patients
    // gather the billed amount

    thisFacility.services.map((service:servicesType)=> {
      // console.log(service);
      total_OOPM = total_OOPM + service.OOPM
      service.patients.map((patient:patientType)=> {
        // console.log(patient);
        total_billed = total_billed + patient.billed;
        total_paid = total_paid + patient.paid;

      })
    })
  }
 
  if (dashboardOption.type === "payer") {

    // we want to do the same for the payers
    // you should find all patients who are having this payer
    // then store in their property their total billed, paid, OOPM

    // so you want to go through all the patients in your company
    // i want to reach the key having patients

    let allPatients = getAllPatients(myCompany);

    // console.log(allPatients);

    // get all patients with this payer
    let filteredPatients = allPatients.filter((patient)=> (
      patient.payer === dashboardOption.key
    ))
    // console.log(filteredPatients);

    // get their total billed and paid
    filteredPatients.forEach((patient)=> {
      total_billed = total_billed + patient.billed;
      total_paid = total_paid + patient.paid;
    })

    // what is the OOPM here?
    // the total max for all the services used by this payer.
    // go through all the services, 
    // if this service has a payer equal this payer,
    // update the max
    total_OOPM = PayerOOPM(myCompany, dashboardOption.key);

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
      total_paid = total_paid + patient.paid;
    })

    // we want all the patients' oopm in this year
    total_OOPM = yearOOPM(myCompany, dashboardOption.key);

  }





  




  return (
    <>
    
      <div className="w-[50%] h-[50%] border flex items-center justify-center flex-col gap-2">
        <p>Total Billed</p>
        <p>{total_billed.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </div>          

      <div className="w-[50%] h-[50%] border flex items-center justify-center flex-col gap-2">
        <p>Total Paid</p>
        <p>{total_paid.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </div>          

      <div className="w-[100%] h-[50%] border flex items-center justify-center flex-col gap-2">
        <p>OOPM</p>
        <p>{total_OOPM.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </div>

    </>
    
  )
}

export default Score_Card