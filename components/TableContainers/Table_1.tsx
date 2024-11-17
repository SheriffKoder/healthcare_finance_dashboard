
import React from 'react'

import { Facilities, myCompany } from '@/constants'

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

    <div className="w-full h-full flex items-center justify-center">

        <table className='w-[90%] border'>

            <thead>
                <tr>
                    <th>Facility Name</th>
                    <th>Total Billed</th>
                    <th>Total Paid</th>
                    <th>Payment percentage</th>
                    <th>Number of Patients</th>
                    <th>OOEM</th>
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
                    <tr className='' key={index}>
                        <td>{facility.name}</td>
                        <td>{total_billed}</td>
                        <td>{total_paid}</td>
                        <td>{percentage}%</td>
                        <td>{patientsCount}</td>
                        <td>{OOPM_achieved}</td>

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

  )
}

export default Table_1