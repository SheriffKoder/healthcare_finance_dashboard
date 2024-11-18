
import {colors} from "@/constants";
import { Line1Labels } from '@/constants';



import React from 'react'
import LineChartComponent from "../Charts/LineChartComponent";

import { optionType } from '@/app/page';
import { facilitiesType, myCompany, patientType, servicesType } from '@/constants';
import { getAllPatients } from '@/Helpers/functions';


type PieDataType2 = {
  xaxis: number,
  yaxis: number
}

const Line_1 = ({dashboardOption}:{dashboardOption:optionType}) => {

  // Trends for charges and payments over time
  // billed over time (line1) vs paid over time (line2)
  // in the format of an array containing {xaxis: "year", yaxis: amount}

  const total_billed:PieDataType2[] = [];
  const total_paid:PieDataType2[] = [];


  // for this selected facility,
  // go through all the patients
  // put in the respective year's object (line1) property the amount paid and in another object (line2) the amount billed
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

        const dateOfService = +patient.DOS.toISOString().slice(0,4)
        let exists = false;

        // find first if this year exists in one of the arrays object
        total_billed.map((row)=> {
          if (+row.xaxis === dateOfService) {
            exists = true;
            row.yaxis = row.yaxis + patient.billed;
          }
          })

        total_paid.map((row)=> {
          if (+row.xaxis === dateOfService) {
            row.yaxis = row.yaxis + patient.paid;
          }
        })

        if (exists === false) {
        // if this year does not exist, store a new object        
        total_billed.push({xaxis:dateOfService, yaxis:patient.billed});
        total_paid.push({xaxis:dateOfService, yaxis:patient.paid});

        }

      })
    })

    sortByHighestYear(total_billed);
    sortByHighestYear(total_paid);

  }

  // go through all the patients
  // find the ones with this payer
  // put in the respective year's object (line1) property the amount paid and in another object (line2) the amount billed
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

      const dateOfService = +patient.DOS.toISOString().slice(0,4)
      let exists = false;

      // find first if this year exists in one of the arrays object
      total_billed.map((row)=> {
        if (+row.xaxis === dateOfService) {
          exists = true;
          row.yaxis = row.yaxis + patient.billed;
        }
        })

      total_paid.map((row)=> {
        if (+row.xaxis === dateOfService) {
          row.yaxis = row.yaxis + patient.paid;
        }
      })

      if (exists === false) {
      // if this year does not exist, store a new object        
      total_billed.push({xaxis:dateOfService, yaxis:patient.billed});
      total_paid.push({xaxis:dateOfService, yaxis:patient.paid});

      }
    })

    sortByHighestYear(total_billed);
    sortByHighestYear(total_paid);

  }

  // for the selected date - upto this year
  // go through all the patients
  // find the ones who paid upto this year
  // put in the respective year's object (line1) property the amount paid and in another object (line2) the amount billed
  if (dashboardOption.type === "year") {
    // 
    const allPatients = getAllPatients(myCompany);

    // console.log(allPatients);

    // get all patients with payments before this year
    const filteredPatients = allPatients.filter((patient)=> (
      +patient.DOS.toISOString().slice(0,4) <= +dashboardOption.key
    ))

    console.log(filteredPatients);

    // get their total billed and paid
    filteredPatients.forEach((patient)=> {

      // get from the date only the year
      const dateOfService = +patient.DOS.toISOString().slice(0,4)
      let exists = false;

      // determine first, if this year already exists in one of the arrays object to update and not create an new object
      total_billed.map((row)=> {
        if (+row.xaxis === dateOfService) {
          exists = true;
          row.yaxis = row.yaxis + patient.billed;
        }
      })

      total_paid.map((row)=> {
        if (+row.xaxis === dateOfService) {
          row.yaxis = row.yaxis + patient.paid;
        }
      })

      // if this year does not exist, store a new object        
      if (exists === false) {
      total_billed.push({xaxis:dateOfService, yaxis:patient.billed});
      total_paid.push({xaxis:dateOfService, yaxis:patient.paid});

      }
    })

    sortByHighestYear(total_billed);
    sortByHighestYear(total_paid);

  }

  function sortByHighestYear (arr:PieDataType2[]) {
    arr.sort((a,b)=> {
      return a.xaxis - b.xaxis;
    })
  }




  return (
    <div className="w-full h-full flex flex-col
    gap-6
    p-[1em] px-[1.5em] pb-[1.5em] glass_card2 trans_anim
    rounded-[10px]">

        <h3 className="text_main_lg">Trends for charges and payments</h3>

        <div className='w-full h-[80%] flex items-center justify-center my-auto'>
        <LineChartComponent 
        ChartData1={total_billed} // Line 1
        ChartData2={total_paid}   // Line 2
        Labels={Line1Labels}
        Colors={[colors.accent1, colors.accent2]} // Color for line 1 and color for line 2
        />

        </div>

    </div>
  )
}

export default Line_1