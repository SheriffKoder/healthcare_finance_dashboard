
import React from 'react'

import { myCompany } from '@/constants'

// We want to display specific KPI's for each facility
// How much billed in total
// How much paid in total
// How much paid vs billed rate %
// How many patient per the facility
// It's OOPM





const Table_1 = () => {

// for each facility
// name --
// -how many services --
// OOPM achieved
// number of patients --
// total billed --
// total paid --
// payment percentage








  return (

    <section className='mt-[1rem]'>
        <div className="w-full font-bold text-[1.5rem] xl:text-[2rem] mb-[1rem] text-center">
            <h2>Company overview</h2>
        </div>

        <div className="w-full h-full flex
    justify-center rounded-[15px]" id="table_1_container">


            
        <table className='w-full mx-[1em] xl:p-[3em] pt-[3em]' id="table_1">

            <thead>
                <tr>
                    <th className="text_table_sub">Facility</th>
                    <th className="text_table_sub">Total Billed</th>
                    <th className="text_table_sub">Total Paid</th>
                    <th className="text_table_sub">Percentage</th>
                    <th className="text_table_sub">Patients</th>
                    <th className="text_table_sub">OOEM</th>
                </tr>
            </thead>

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
                                if (patient.paid > service.OOPM) OOPM_achieved = OOPM_achieved +1;

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
                        ${(OOPM_achieved > 5 && OOPM_achieved <=10) ? "highlight_blue" : ""}
                        ${(OOPM_achieved > 10) ? "highlight_green" : ""}

                        `}>{OOPM_achieved}</span></td>

                    </tr>
                    )
                })}
            </tbody>

            <tfoot>
                {/* <tr>
                <td>Sum</td>
                <td>$180</td>
                </tr> */}
            </tfoot>

        </table>

        </div>

    </section>
    

  )
}

export default Table_1