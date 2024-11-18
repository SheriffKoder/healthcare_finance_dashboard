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

  // get the total paid, billed and achieved OOPM sum for the selected facility
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
    // get the total billed amount from all
    // the patients inside all the services
    // as we have the services, now iterate over the patients
    // to gather the billed amount

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
 
    // get the total paid, billed and achieved OOPM sum for the selected payer
  if (dashboardOption.type === "payer") {

    // we want to do the same for the payers
    // you should find all patients who are having this payer
    // then store in their property their total billed, paid, OOPM

    // so you want to go through all the patients in your company
    // and reach the key having patients

    const allPatients = getAllPatients(myCompany);

    // console.log(allPatients);

    // get all patients with this payer
    const filteredPatients = allPatients.filter((patient)=> (
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

    // get the total paid, billed and achieved OOPM sum for the selected year
  if (dashboardOption.type === "year") {

    // get all patients
    const allPatients = getAllPatients(myCompany);

    // find patients who are within this year
    const filteredPatients = allPatients.filter((patient)=> (
      +patient.DOS.toISOString().slice(0,4) === +dashboardOption.key
    ))

    // get their total billed and paid
    filteredPatients.forEach((patient)=> {
      total_billed = total_billed + patient.billed;
      total_paid = total_paid + patient.paid;
    })

    // we want all the patients' OOPM in this year
    total_OOPM = yearOOPM(myCompany, dashboardOption.key);

  }


  return (
    <>
    
      <div className="w-[50%] h-[50%] border pl-[1em] pt-[2em] glass_card glass_card_hover
      rounded-tl-[10px]">
        <p className="text_sub">Total Billed</p>
        <p className="num_lg">${(total_billed).toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </div>          

      <div className="w-[50%] h-[50%] border pl-[1em] pt-[2em] glass_card glass_card_hover
      rounded-tr-[10px]" style={{borderLeft: "none"}}>
        <p className="text_sub">Total Paid</p>
        <p className="num_lg">${(total_paid).toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </div>          

      <div className="w-[100%] h-[50%] border pl-[1em] pt-[2em] glass_card glass_card_hover
      rounded-b-[10px]" style={{borderTop: "none"}}>
        <p className="text_sub">Total Out of pocket maximum achieved (OOPM)</p>
        <p className="num_lg">${(total_OOPM).toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </div>

    </>
    
  )
}

export default Score_Card