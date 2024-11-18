import React from 'react'

import { PieColors } from '@/constants';
import PieChartComponent from '../Charts/PieChartComponent';


import { optionType } from '@/app/page';
import { facilitiesType, myCompany, patientType, servicesType } from '@/constants';
import { getAllPatients } from '@/Helpers/functions';


type pieCharDataType = {
  xaxis: string,
  yaxis: number,
}

const Pie_1= ({dashboardOption}:{dashboardOption:optionType}) => {

// How much each service got paid
  let Pie1_CharData:pieCharDataType[] = []
  let allServicesPay = 0;

  // go through each service in this facility,
  
  if (dashboardOption.type === "facility") {

    let thisFacility = {} as facilitiesType;

    // find in my company this facility object.
    myCompany.forEach((facility)=> {
      if (facility.name === dashboardOption.key) {
        thisFacility=facility;
      }
    })


    // sum of all payments from the patients in each service in this facility
    // once done with a service, store its paid with its name in an object
    thisFacility.services.map((service:servicesType, index:number)=> {

      let serviceTotalPaid = 0;

      service.patients.map((patient:patientType)=> {
        serviceTotalPaid = serviceTotalPaid + patient.paid;
      })

      Pie1_CharData[index] = {xaxis: service.LOC, yaxis: serviceTotalPaid};

    })

  
  }
 
  // how much each service got paid from this payer
  if (dashboardOption.type === "payer") {

    // go though each service in all facilities
    // in each service go into it patients
    // if this patient has this payer, add to sum
    let i = 0;

    myCompany.forEach((facility)=> {

      // once done with a service, store its paid with its name in an object
      facility.services.map((service:servicesType, index:number)=> {
      // console.log(service.LOC);

        let serviceTotalPaid = 0;


        service.patients.map((patient:patientType)=> {
          // console.log(patient.memberId);
          if (patient.payer === dashboardOption.key) {
            serviceTotalPaid = serviceTotalPaid + patient.paid;

          }
        })
        Pie1_CharData[i] = {xaxis: service.LOC, yaxis: serviceTotalPaid};
        i++;

      })

    })
  }

  if (dashboardOption.type === "year") {

    // go though each service in all facilities
    // in each service go into it patients
    // if this patient paid in this date, add to sum
    let i = 0;

    myCompany.forEach((facility)=> {

    // once done with a service, store its paid with its name in an object
    facility.services.map((service:servicesType, index:number)=> {
      // console.log(service.LOC);

      let serviceTotalPaid = 0;


      service.patients.map((patient:patientType)=> {
        // console.log(patient.memberId);
        if (+patient.DOS.toISOString().slice(0,4) === +dashboardOption.key) {
          serviceTotalPaid = serviceTotalPaid + patient.paid;

        }
      })
      Pie1_CharData[i] = {xaxis: service.LOC, yaxis: serviceTotalPaid};
      i++;

    })

  })

  }


  Pie1_CharData.forEach((item)=>(
    allServicesPay = allServicesPay + item.yaxis
  ));





  return (
    <div className="w-full h-full flex flex-col glass_card p-[1rem] rounded-[10px]
    ">
            <h4 className="text_main">Payment distribution</h4>

    <div className='flex-1 flex flex-col gap-6 justify-center' >


        <div className="w-full flex-1 flex justify-center max-h-[60%]">
          <PieChartComponent
            ChartData={Pie1_CharData} 
            Colors={PieColors}
          />
        </div>


        <div className='flex flex-row flex-wrap gap-2 text_sub2 items-center justify-center'>
        {/* <p className='w-full text-center'>Services</p> */}

          {Pie1_CharData.map((item, index) => 
            <div key={index} className='flex flex-row gap-1 items-center justify-center'>
              <p>{item.xaxis}</p>
              <span className='h-4 w-4 rounded-full'
              style={{background:PieColors[index]}}></span>
            </div>
            
          )}
          </div>
    </div>
    </div>

  )
}

export default Pie_1