
import React from 'react'

import { myCompany } from '@/constants'

// We want to display specific KPI's for each facility
// How much billed in total
// How much paid in total
// How much paid vs billed rate %
// How many patient per the facility
// It's OOPM





const Table_1 = () => {

// Calculate and display KPI's for all the facilities in the company object

  return (

    <div className='mt-[1rem]'>
        <div className="w-full font-bold text-[1.5rem] xl:text-[2rem] mb-[1rem] text-center">
            <h2>Company overview</h2>
        </div>

        <div className="w-full h-full flex
        justify-center rounded-[15px]" id="table_1_container">
            
        <table className='w-full mx-[1em] xl:p-[3em] pt-[3em]' id="table_1">

            {/* Table header */}
            <thead>
                <tr>
                    <th className="text_table_sub">Facility</th>
                    <th className="text_table_sub">Total Billed</th>
                    <th className="text_table_sub">Total Paid</th>
                    <th className="text_table_sub">Percentage</th>
                    <th className="text_table_sub">Patients</th>
                    <th className="text_table_sub flex flex-row items-center justify-center gap-1">
                        <span className="ml-2">OOEM</span>
                        <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.965 8.521C19.988 8.347 20 8.173 20 8c0-2.379-2.143-4.288-4.521-3.965C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.035C6.138 3.712 4 5.621 4 8c0 .173.012.347.035.521C2.802 9.215 2 10.535 2 12s.802 2.785 2.035 3.479A3.976 3.976 0 0 0 4 16c0 2.379 2.138 4.283 4.521 3.965C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.035C17.857 20.283 20 18.379 20 16c0-.173-.012-.347-.035-.521C21.198 14.785 22 13.465 22 12s-.802-2.785-2.035-3.479zm-9.01 7.895-3.667-3.714 1.424-1.404 2.257 2.286 4.327-4.294 1.408 1.42-5.749 5.706z"/>
                        </svg>
                    </th>
                </tr>
            </thead>

            {/* Table rows */}
            <tbody>
                {myCompany.map((facility, index)=> {

                    let total_billed = 0;
                    let total_paid = 0;
                    // let servicesCount = 0;
                    let patientsCount = 0;
                    let percentage = 0;
                    let OOPM_achieved = 0;
                        facility.services.forEach((service)=>{
                            // servicesCount = servicesCount + 1;
                            service.patients.forEach((patient)=> {
                                total_billed = total_billed + patient.billed
                                total_paid = total_paid + patient.paid;
                                patientsCount = patientsCount + 1;
                                percentage = (total_paid/total_billed)*100;
                                if (patient.paid >= service.OOPM) OOPM_achieved = OOPM_achieved +1;

                            })
                })
                    


                    return (
                    <tr key={index} className="trans_anim
                    solid">
                        <td className='text-center text_table facility_cell'>{facility.name}</td>
                        <td className='text-center text_table'>${total_billed}</td>
                        <td className='text-center text_table'>${total_paid}</td>
                        <td className='text-center text_table'>{Math.round(percentage)}%</td>
                        <td className='text-center text_table'>{patientsCount}</td>
                        <td className='text-center text_table'><span 
                        className={`highlight px-[20px] py-[5px] md1:px-[30px]
                        ${OOPM_achieved === 0 ? "highlight_red" : ""}
                        ${(OOPM_achieved > 0 && OOPM_achieved <=5) ? "highlight_yellow" : ""}
                        ${(OOPM_achieved > 5 && OOPM_achieved <=10) ? "highlight_green" : ""}
                        ${(OOPM_achieved > 10) ? "highlight_blue" : ""}

                        `}>{OOPM_achieved}</span></td>

                    </tr>
                    )
                })}
            </tbody>

            {/* Table footer - not used - keep to avoid next.js errors */}
            <tfoot>
                {/* <tr>
                <td>Sum</td>
                <td>$180</td>
                </tr> */}
            </tfoot>

        </table>

        </div>

    </div>
    

  )
}

export default Table_1