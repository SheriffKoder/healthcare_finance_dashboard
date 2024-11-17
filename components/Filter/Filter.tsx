import React from 'react'


import { myCompany } from '@/constants';

import { optionType } from '@/app/page';

const Filter = ({ChangeOption, dashboardOption}:{
ChangeOption:(option: string | number, type: string)=>void
dashboardOption: optionType
    }) => {


//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// output all dates

    let AllPayers: string[] = [];
    let uniquePayers: string[] = [];
    myCompany.forEach((facility)=> {
        // console.log(facility);

        facility.services.forEach((service)=> {
            // console.log(service.LOC);

            service.patients.forEach((patient)=>{
                // console.log(patient);
                AllPayers.push(patient.payer);
            })
        })

    })

    // Iterate over the array to get unique values
    for (let i = 0; i < AllPayers.length; i++) {
    
    // Check if the element exist in the new array
    if (!uniquePayers.includes(AllPayers[i])) {
    
        // If not then push the element to new array
        uniquePayers.push(AllPayers[i]);
    }
}

    // console.log(uniquePayers);



    //////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////
    // Get unique dates

    // output all dates
    let AllDates: number[] = [];
    let uniqueDates: number[] = [];
    myCompany.forEach((facility)=> {
        // console.log(facility);

        facility.services.forEach((service)=> {
            // console.log(service.LOC);

            service.patients.forEach((patient)=>{
                // console.log(patient);
                AllDates.push(+patient.DOS.toISOString().slice(0,4));
            })
        })

    })

    // Iterate over the array to get unique values
    for (let i = 0; i < AllDates.length; i++) {
    
    // Check if the element exist in the new array
    if (!uniqueDates.includes(AllDates[i])) {
    
        // If not then push the element to new array
        uniqueDates.push(AllDates[i]);
    }
}

    // console.log(uniqueDates);



    //////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////
    // Get unique facilities

    let AllFacilities: string[] = [];
    myCompany.forEach((facility)=> {
        // console.log(facility);
        AllFacilities.push(facility.name);

    })

    // console.log(AllFacilities);














  return (
    <div className='flex flex-row gap-4 w-full items-center justify-center'>
        {/* Years */}
        <div className='flex flex-col gap-1 items-center justify-center'>
            <p className='font-bold'>Years</p>
            {
                uniqueDates.map((year)=> (
                    <span key={year}
                    className={`${dashboardOption.key === year ? "text-accent1" :""}`}
                    onClick={()=>{ChangeOption(year, "year")}}
                    >
                        {year}
                    </span>
                ))
            }
        </div>

        {/* Payers */}
        <div className='flex flex-col gap-1 items-center justify-center'>
            <p className='font-bold'>Payers</p>
            {
                uniquePayers.map((payer)=> (
                    <span key={payer}
                    className={`${dashboardOption.key === payer ? "text-accent1" :""}`}
                    onClick={()=>{ChangeOption(payer, "payer")}}
                    >
                        {payer}
                    </span>
                ))
            }
        </div>

        {/* Facilities */}
        <div className='flex flex-col gap-1 items-center justify-center'>
            <p className='font-bold'>Facilities</p>
            {
                AllFacilities.map((facility)=> (
                    <span key={facility} 
                    className={`${dashboardOption.key === facility ? "text-accent1" :""}`}
                    onClick={()=>{ChangeOption(facility, "facility")}}>
                        {facility}
                    </span>
                ))
            }
        </div>


    </div>
  )
}

export default Filter