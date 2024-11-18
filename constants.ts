

export const colors = {
    accent1: "#2ABD8E",
    accent2: "#F4CA55",
    dshbg: "#111217",
    white: "#ffffff",

}

export const PieColors = [
    "#00796B",  // Deep Teal (rich, dark teal with a slightly greenish hue)
    "#67a9e5",
    "#004D40",  // Dark Teal (deep, almost black teal, very grounded)
    "#25aba4",
    "#009688",  // Teal (classic vibrant teal, a nice balance of blue and green)
    "#67a9e5",
    "#00897B",  // Cool Teal (muted but still vibrant, with a calm greenish-blue feel)
    "#26A69A",  // Light Teal (softer, pastel teal with a hint of blue)
    "#004D40",  // Teal Forest (dark, cool teal, earthy with a sophisticated edge)
    "#80CBC4",  // Soft Aqua Teal (light, refreshing, with a touch of mint)
    "#00796B",  // Tropical Teal (strong, tropical teal with a lively tone)
    "#009688",  // Aqua Teal (brighter, vivid teal that's energetic and refreshing)
    "#2C6B5F"   // Muted Teal (dimmed teal, slightly more subdued for contrast)

]



//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Bar Charts

// the data incoming here should be the payers and their paid amount
// highlight from your data the top paying patients and the amount paid
export const Bar1_label = "Amount paid by patient";
// export const Bar1_CharData = [
//     {xaxis: "Payer1", yaxis: "10"},
//     {xaxis: "Payer2", yaxis: "20"},
//     {xaxis: "Payer3", yaxis: "30"},
//     {xaxis: "Payer4", yaxis: "10"}
// ]


// Patient volume by facility
export const Bar2_label = "Number of patients in this facility";
// export const Bar2_CharData = [
//     {xaxis: "Facility1", yaxis: "10"},
//     {xaxis: "Facility1", yaxis: "20"},
//     {xaxis: "Facility1", yaxis: "30"},
//     {xaxis: "Facility1", yaxis: "10"}
// ]


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Line Chart

// charges over time
export const Line1_CharData1 = [
    {xaxis: "2020", yaxis: "2000"},
    {xaxis: "2021", yaxis: "1000"},
    {xaxis: "2022", yaxis: "3000"},
    {xaxis: "2023", yaxis: "1000"},
    {xaxis: "2024", yaxis: "4000"},
]

// payments over time
export const Line1_CharData2 = [
    {xaxis: "2020", yaxis: "900"},
    {xaxis: "2021", yaxis: "1500"},
    {xaxis: "2022", yaxis: "3000"},
    {xaxis: "2023", yaxis: "3900"},
    {xaxis: "2024", yaxis: "3000"},
]

export const Line1Labels = {
    firstDataSet: "Amount Charged",
    secondDataSet: "Amount Paid",
}

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Pie Chart

// How much each service got paid
// export const Pie1_CharData = [
//     {xaxis: "Service1", yaxis: "1000"},
//     {xaxis: "Service2", yaxis: "4000"},
//     {xaxis: "Service3", yaxis: "2400"},
//     {xaxis: "Service4", yaxis: "3000"}
// ]


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Gauges

// Gauge1
// From this facility total X amount is billed, 
// total Y amount is collected
// Thus the average payment rate for this facility is 

// let facility_1_total_billed = 2000;
// let facility_1_total_collected = 1500;
// let facility_1_avg_payment_percentage = (facility_1_total_collected/facility_1_total_billed)*100

// export const Gauge1_CharData = facility_1_avg_payment_percentage;


// Gauge2
// Calculating from each patient.
// How much they are billed vs how much they actually paid as a %
// let allPatients_total_billed = 4000;
// let allPatients_total_collected = 3500;
// let allPatients_avg_payment_percentage = (allPatients_total_collected/allPatients_total_billed)*100


// export const Gauge2_CharData = allPatients_avg_payment_percentage;


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Score Cards

// // For this facility, what is the total billed amount
// const Facility1_total_billed = 250000;


// // For this facility, what is the total paid amount
// const Facility1_total_paid = 20000;

// // For this facility, what is its OOPM (Total Out of pocked maximum)
// const Facility1_OOPM = 1000;

// export const Facility_1_Score = {
//     "Total Billed": Facility1_total_billed,
//     "Total Paid": Facility1_total_paid,
//     "OOPM": Facility1_OOPM,
// }



// We want to display specific KPI's for each facility
// How much billed in total
// How much paid in total
// How much paid vs billed rate %
// How many patient per the facility
// It's OOPM

export const Facilities = [
    {
        name: "Facility 1",
        OOEM: 20,
        patients: [
            {name: "patient 1", billed: 20, paid: 20},
            {name: "patient 2", billed: 20, paid: 20},
        ]
    },
    {
        name: "Facility 2",
        OOEM: 30,
        patients: [
            {name: "patient 3", billed: 10, paid: 5},
            {name: "patient 4", billed: 10, paid: 5},
        ]
    }
]




//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////


    // The company has N of facilities,
    // Each facility has N of services
    // N means an array of N length of objects
    // Each service has patients and they have their properties

    // LOC: The name of the service (provided to patients afterwards)
    // DOS: The date the service was provided to the patient,
    // Charge: the cost of the service (provided to patients afterwards)


export type patientType = {
    name: string,
    memberId: number,
    payer: string,
    DOS: Date,
    paid: number,
    billed: number,
    percent: number,
}

export type servicesType = {
    LOC: string,
    charge: number,
    OOPM: number,
    patients: patientType[]
}

export type facilitiesType = {
    name: string,
    services: servicesType[]
}

export type company = facilitiesType[];

    // let myDate = new Date("2024-01-01");
    // console.log(myDate);

export const myCompany: company = [
    
    {
        name: "Facility 1",
        services: [
            {
                LOC: "Service 1.1",
                charge: 10,
                OOPM: 20,
                patients: [
                    {
                        name: "Patient 1.1.1",
                        memberId: 111,
                        payer: "Insurance 111",
                        DOS: new Date("2024-01-01"),
                        paid: 5,
                        billed: 10,
                        percent: (5/10)*100,
                        
                    },
                    {
                        name: "Patient 1.1.2",
                        memberId: 112,
                        payer: "Insurance 222",
                        DOS: new Date("2023-01-01"),
                        paid: 10,
                        billed: 12,
                        percent: (10/10)*100,
                        
                    },
                    {
                        name: "Patient 1.1.3",
                        memberId: 112,
                        payer: "Insurance 222",
                        DOS: new Date("2022-01-01"),
                        paid: 7,
                        billed: 10,
                        percent: (10/10)*100,
                        
                    }
                ]
            },
            {
                LOC: "Service 1.2",
                charge: 10,
                OOPM: 20,
                patients: [
                    {
                        name: "Patient 1.1.3",
                        memberId: 113,
                        payer: "Insurance 111",
                        DOS: new Date("2024-01-01"),
                        paid: 5,
                        billed: 10,
                        percent: (5/10)*100,
                        
                    },
                    {
                        name: "Patient 1.1.4",
                        memberId: 114,
                        payer: "Insurance 222",
                        DOS: new Date("2023-01-01"),
                        paid: 10,
                        billed: 10,
                        percent: (10/10)*100,
                        
                    }
                ]
            }
        ]

    },
    {
        name: "Facility 2",
        services: [
            {
                LOC: "Service 2.1",
                charge: 10,
                OOPM: 10,
                patients: [
                    {
                        name: "Patient 2.1.1",
                        memberId: 211,
                        payer: "Insurance 111",
                        DOS: new Date("2024-01-01"),
                        paid: 20,
                        billed: 20,
                        percent: (5/10)*100,
                        
                    },
                    {
                        name: "Patient 2.1.2",
                        memberId: 212,
                        payer: "Insurance 222",
                        DOS: new Date("2024-01-01"),
                        paid: 5,
                        billed: 5,
                        percent: (5/5)*100,
                        
                    },
                    {
                        name: "Patient 2.1.3",
                        memberId: 212,
                        payer: "Insurance 222",
                        DOS: new Date("2023-01-01"),
                        paid: 17,
                        billed: 20,
                        percent: (5/5)*100,
                        
                    },
                    {
                        name: "Patient 2.1.4",
                        memberId: 212,
                        payer: "Insurance 222",
                        DOS: new Date("2022-01-01"),
                        paid: 4,
                        billed: 4,
                        percent: (5/5)*100,
                        
                    },
                ]
            },
            {
                LOC: "Service 2.2",
                charge: 10,
                OOPM: 20,
                patients: [
                    {
                        name: "Patient 2.2.1",
                        memberId: 211,
                        payer: "Insurance 111",
                        DOS: new Date("2024-01-01"),
                        paid: 12,
                        billed: 33,
                        percent: (5/10)*100,
                        
                    },
                    {
                        name: "Patient 2.2.2",
                        memberId: 212,
                        payer: "Insurance 222",
                        DOS: new Date("2024-01-01"),
                        paid: 2,
                        billed: 12,
                        percent: (5/5)*100,
                        
                    },
                    {
                        name: "Patient 2.2.3",
                        memberId: 212,
                        payer: "Insurance 222",
                        DOS: new Date("2023-01-01"),
                        paid: 23,
                        billed: 12,
                        percent: (5/5)*100,
                        
                    },
                    {
                        name: "Patient 2.2.4",
                        memberId: 212,
                        payer: "Insurance 222",
                        DOS: new Date("2022-01-01"),
                        paid: 23,
                        billed: 32,
                        percent: (5/5)*100,
                        
                    },
                ]
            },
            {
                LOC: "Service 2.2",
                charge: 10,
                OOPM: 20,
                patients: [
                    {
                        name: "Patient 2.3.1",
                        memberId: 211,
                        payer: "Insurance 444",
                        DOS: new Date("2024-01-01"),
                        paid: 12,
                        billed: 33,
                        percent: (5/10)*100,
                        
                    },
                    {
                        name: "Patient 2.3.2",
                        memberId: 212,
                        payer: "Insurance 222",
                        DOS: new Date("2024-01-01"),
                        paid: 2,
                        billed: 12,
                        percent: (5/5)*100,
                        
                    },
                    {
                        name: "Patient 2.3.3",
                        memberId: 212,
                        payer: "Insurance 333",
                        DOS: new Date("2023-01-01"),
                        paid: 21,
                        billed: 33,
                        percent: (5/5)*100,
                        
                    },
                    {
                        name: "Patient 2.3.4",
                        memberId: 212,
                        payer: "Insurance 333",
                        DOS: new Date("2022-01-01"),
                        paid: 13,
                        billed: 33,
                        percent: (5/5)*100,
                        
                    },
                    {
                        name: "Patient 2.3.5",
                        memberId: 212,
                        payer: "Insurance 111",
                        DOS: new Date("2022-01-01"),
                        paid: 13,
                        billed: 33,
                        percent: (5/5)*100,
                        
                    },
                ]
            }
        ]

    },
    {
        name: "Facility 3",
        services: [
            {
                LOC: "Service 3.1",
                charge: 10,
                OOPM: 10,
                patients: [
                    {
                        name: "Patient 3.1.1",
                        memberId: 311,
                        payer: "Insurance 111",
                        DOS: new Date("2024-01-01"),
                        paid: 20,
                        billed: 20,
                        percent: (5/10)*100,
                        
                    },
                    {
                        name: "Patient 3.1.2",
                        memberId: 312,
                        payer: "Insurance 222",
                        DOS: new Date("2024-01-01"),
                        paid: 5,
                        billed: 5,
                        percent: (5/5)*100,
                        
                    },
                    {
                        name: "Patient 3.1.3",
                        memberId: 313,
                        payer: "Insurance 333",
                        DOS: new Date("2023-01-01"),
                        paid: 17,
                        billed: 20,
                        percent: (5/5)*100,
                        
                    },
                    {
                        name: "Patient 3.1.4",
                        memberId: 314,
                        payer: "Insurance 444",
                        DOS: new Date("2022-01-01"),
                        paid: 30,
                        billed: 30,
                        percent: (5/5)*100,
                        
                    },
                ]
            },
            {
                LOC: "Service 3.2",
                charge: 10,
                OOPM: 10,
                patients: [
                    {
                        name: "Patient 3.2.1",
                        memberId: 311,
                        payer: "Insurance 111",
                        DOS: new Date("2024-01-01"),
                        paid: 20,
                        billed: 20,
                        percent: (5/10)*100,
                        
                    },
                    {
                        name: "Patient 3.2.2",
                        memberId: 312,
                        payer: "Insurance 333",
                        DOS: new Date("2024-01-01"),
                        paid: 21,
                        billed: 32,
                        percent: (5/5)*100,
                        
                    },
                    {
                        name: "Patient 3.2.3",
                        memberId: 313,
                        payer: "Insurance 111",
                        DOS: new Date("2023-01-01"),
                        paid: 34,
                        billed: 23,
                        percent: (5/5)*100,
                        
                    },
                    {
                        name: "Patient 3.2.4",
                        memberId: 314,
                        payer: "Insurance 222",
                        DOS: new Date("2022-01-01"),
                        paid: 23,
                        billed: 12,
                        percent: (5/5)*100,
                        
                    },
                ]
            }
        ]

    }
]






const getRandomName = () => {
    const firstNames = ["John", "Jane", "Alex", "Mary", "David", "Emma", "Michael", "Olivia", "Liam", "Sophia"];
    const lastNames = ["Smith", "Johnson", "Brown", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin"];
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
};

const getRandomPayerCompany = () => {
    const payers = ["Blue Cross", "Aetna", "Cigna", "United Healthcare", "Humana"];
    return payers[Math.floor(Math.random() * payers.length)];
};

const getRandomHealthcareCompanyName = (index:number) => {
    const companyNames = [
        "HealthCore Solutions", "Wellness Medical Group", "MedPlus Healthcare", "CareFirst Network", "VitalMed",
        "New Horizons Health", "CareStream Health", "PrimeCare Services", "Optima Health", "LifePath Healthcare"
    ];
    return index === 0 ? "Facility 1" : companyNames[Math.floor(Math.random() * companyNames.length)];
};

const getRandomDateOfService = () => {
    const year = Math.floor(Math.random() * 4) + 2021; // Year between 2010 and 2014
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1; // Ensure valid days in any month
    return new Date(`${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`);
};

const getRandomService = () => {
    const serviceNames = [
        "General Consultation", "X-ray", "Physical Therapy", "Cardiology Consultation", "Surgical Operation",
    ];
    const LOC = serviceNames[Math.floor(Math.random() * 5)];
    const charge = Math.floor(Math.random() * 1000) + 50;  // Random charge between $50 and $1000
    const OOPM = Math.floor(Math.random() * 5000) + 100;  // Random OOPM between $100 and $5000

    const patients = [];
    const numPatients = Math.floor(Math.random() * 5) + 1; // Each service will have 1-5 patients

    for (let i = 0; i < numPatients; i++) {
        const billedAmount = charge;
        let paidAmount;
        if (Math.random() < 0.5) {  // 50% chance to pay the full billed amount
            paidAmount = billedAmount; 
        } else {
            paidAmount = Math.floor(Math.random() * billedAmount);  // Less than the billed amount
        }
        const percentAmount = 100 * (paidAmount / billedAmount);
        patients.push({
            name: getRandomName(),
            memberId: Math.floor(Math.random() * 10000),  // Random Member ID
            payer: getRandomPayerCompany(),
            DOS: getRandomDateOfService(),
            paid: paidAmount,
            billed: billedAmount,
            percent: parseFloat(percentAmount.toFixed(2)) // Percent amount with two decimal places
        });
    }

    return {
        LOC: LOC,
        charge: charge,
        OOPM: OOPM,
        patients: patients
    };
};

const myCompany2 = [];
const numCompanies = 5; // Number of companies will not exceed 5

for (let i = 0; i < numCompanies; i++) {
    const companyName = getRandomHealthcareCompanyName(i);
    const numServices = 4;  // Each company will have 1-2 services
    const services = [];

    for (let j = 0; j < numServices; j++) {
        services.push(getRandomService());
    }

    myCompany2.push({
        name: companyName,
        services: services
    });
}

// Example of logging part of the dataset
// console.log(myCompany[0]); // Logs the first facility in the dataset

// // You can also access specific parts of the data
// console.log(myCompany[0].services[0].patients[0].name);  // Logs the name of the first patient of the first service of the first facility
// console.log(myCompany[0].services[0].patients[0].percent);  // Logs the payment percentage of the first patient



// export {myCompany};

