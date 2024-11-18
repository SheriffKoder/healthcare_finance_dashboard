import React from 'react'
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



  // get the total amount paid in the selected facility
  if (dashboardOption.type === "facility") {



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

  // get the total amount payed by patients having the selected payer in their object
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
      total_billed = total_billed + patient.billed;
      if (patient.paid >= patient.billed) total_paid = total_paid + patient.paid;
  })

    successRate = (total_paid / total_billed)*100;
    // console.log(successRate);

   

  }

  // get the total amount paid in the selected year
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
      if (patient.paid >= patient.billed) total_paid = total_paid + patient.paid;
  })

    successRate = (total_paid / total_billed)*100;
    // console.log(successRate);

  }



  return (
    <div className="w-full h-full flex flex-row p-[1em] glass_card
    rounded-[10px]">

        <div className="flex flex-col gap-1 w-[60%]">

          <h4 className="text_main">Payment conversion</h4>
          <p className="text_sub">Total paid / billed</p>
          {/* // put a thousands comma */}
          <p className="num_lg">${total_paid.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")} / ${total_billed.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>

        </div>

        <div className='flex items-center justify-center flex-1'>
          <CircularProgress progress={successRate}
          Colors={[colors.accent1, colors.accent1]}/>
        </div>
    </div>


  )
}

export default Gauge_2
