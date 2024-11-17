

//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// getAllPatients
// ScoreCard.tsx, gauge 1 & 2, 


export function getAllPatients(myCompany) {
    let AllPatients = [];

    myCompany.forEach((facility)=> {
        facility.services.forEach((service)=> {
            AllPatients = AllPatients.concat(service.patients);
        })

    })

    return AllPatients;
}


//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// total OOPM achieved by patients from this payer
// ScoreCard.tsx

export function PayerOOPM(myCompany, payer) {
    let allOOPM = 0;

    myCompany.forEach((facility)=> {
        facility.services.forEach((service)=> {
            // access the patients to find the payer
            service.patients.forEach((patient)=> {
                if (patient.payer === payer && patient.paid >= service.OOPM) allOOPM = allOOPM + service.OOPM;
                return;
            })
        })

    })

    return allOOPM;
}

//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// total OOPM achieved by patients in this year
// should I put the amount paid by user if it did exceed the OOPM or just the OOPM?
// ScoreCard.tsx

export function yearOOPM(myCompany, year) {
    let allOOPM = 0;

    myCompany.forEach((facility)=> {
        facility.services.forEach((service)=> {
            // access the patients to find the payer
            service.patients.forEach((patient)=> {
                if (+patient.DOS.toISOString().slice(0,4) === year && patient.paid >= service.OOPM) allOOPM = allOOPM + service.OOPM;
                return;
            })
        })

    })

    return allOOPM;
}
