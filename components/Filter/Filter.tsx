
// 
// This component gets all the dates, payer names and facility names from the dataset



import React, { useState } from 'react'


import { myCompany } from '@/constants';
import { optionType } from '@/app/page';

const Filter = ({ChangeOption, dashboardOption}:{
ChangeOption:(option: string | number, type: string)=>void
dashboardOption: optionType
    }) => {


//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// output all dates

    const AllPayers: string[] = [];
    const uniquePayers: string[] = [];
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
    const AllDates: number[] = [];
    const uniqueDates: number[] = [];
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

    const AllFacilities: string[] = [];
    myCompany.forEach((facility)=> {
        // console.log(facility);
        AllFacilities.push(facility.name);

    })

    // console.log(AllFacilities);


    // state triggers the visibility of the filters
    const [active, setActive] = useState(false);










  return (
    <div className={`flex flex-col gap-4 w-full justify-start
    p-[1rem] pb-[1.5rem]
    glass_card_hover_on2
    rounded-[10px]
    ${active ? "h-auto" : "h-[3.5rem]"}
    overflow-hidden
    relative z-[1]
    
    `}>

        <div className="flex flex-row items-center justify-center md:justify-start gap-2 h-[1.5rem]">
            {/* title displaying the current selected option */}
            <p className="font-light">Displaying information for {dashboardOption.type} {dashboardOption.key}</p>

            {/* // change the state triggers the visibility of the filters */}
            <button className="text-white glass_card_hover_on
            text-xs rounded-full py-1 pb-[0.35rem] w-[75px]"
            onClick={()=>{setActive((prev)=>!prev)}}>
                {active ? "close" : "change"}
            </button>
        </div>

        <div className='flex flex-row md:flex-col gap-4 justify-center items-start mt-4 font-normal text-sm'>
            {/* Years - display all years and the year selected will be pushed up to the state in page.tsx along with property type of year*/}
            <div className='flex flex-col md:flex-row gap-1 flex-wrap items-center justify-center md:justify-start w-[100px] md:w-auto'>
                <p className='w-full mb-2 md:mb-0 md:mr-2 md:w-[75px] py-[2px] bg-[#dfdfdf] text-[#000] rounded-[5px] text-center'>
                    Years
                </p>
                {
                    uniqueDates.map((year)=> (
                        <span key={year}
                        className={`
                        px-4 py-[4px] bg-[#0000002a] w-full md:w-auto rounded-[9px] md:rounded-[99px] text-center
                        ${dashboardOption.key === year ? "text-accent1" :""}`}
                        onClick={()=>{ChangeOption(year, "year")}}
                        >
                            {year}
                        </span>
                    ))
                }
            </div>

            {/* Payers - display all payer names and the payer selected will be pushed up to the state in page.tsx along with property type of payer*/}
            <div className='flex flex-col md:flex-row gap-1 flex-wrap items-center justify-center md:justify-start w-[100px] md:w-auto'>
                <p className='w-full mb-2 md:mb-0 md:mr-2 md:w-[75px] py-[2px] bg-[#dfdfdf] text-[#000] rounded-[5px] text-center'>
                    Payers
                </p>
                {
                    uniquePayers.map((payer)=> (
                        <span key={payer}
                        className={`
                        px-4 py-[4px] bg-[#0000002a] w-full md:w-auto rounded-[9px] md:rounded-[99px] text-center
                        ${dashboardOption.key === payer ? "text-accent1" :""}`}
                        onClick={()=>{ChangeOption(payer, "payer")}}
                        >
                            {payer}
                        </span>
                    ))
                }
            </div>

            {/* Facilities - display all facility names and the facility selected will be pushed up to the state in page.tsx along with property type of facility*/}
            <div className='flex flex-col md:flex-row gap-1 flex-wrap items-center justify-center md:justify-start w-[100px] md:w-auto'>
                <p className='w-full mb-2 md:mb-0 md:mr-2 md:w-[75px] py-[2px] bg-[#dfdfdf] text-[#000] rounded-[5px] text-center'>
                    Facilities
                </p>
                {
                    AllFacilities.map((facility)=> (
                        <span key={facility} 
                        className={`
                        px-4 py-[4px] bg-[#0000002a] w-full md:w-auto rounded-[9px] md:rounded-[99px]  text-center
                        ${dashboardOption.key === facility ? "text-accent1" :""}`}
                        onClick={()=>{ChangeOption(facility, "facility")}}>
                            {facility}
                        </span>
                    ))
                }
            </div>
        </div>





    </div>
  )
}

export default Filter