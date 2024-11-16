
import React from 'react'

import { Facilities } from '@/constants'

// We want to display specific KPI's for each facility
// How much billed in total
// How much paid in total
// How much paid vs billed rate %
// How many patient per the facility
// It's OOPM


const Table_1 = () => {
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
                {Facilities.map((facility)=> {

                    let total_billed = 0;
                    facility.patients.forEach((patient)=> (
                        total_billed = total_billed + patient.billed
                    ))

                    let total_paid = 0;
                    facility.patients.forEach((patient)=> (
                        total_paid = total_paid + patient.paid
                    ))
                    
                    const percentage = (total_paid/total_billed)*100;

                    const patients_count = facility.patients.length;


                    return (
                    <tr className=''>
                        <td>{facility.name}</td>
                        <td>{total_billed}</td>
                        <td>{total_paid}</td>
                        <td>{percentage}%</td>
                        <td>{patients_count}</td>
                        <td>{facility.OOEM}</td>

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