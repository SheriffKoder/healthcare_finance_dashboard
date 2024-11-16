

export const colors = {
    accent1: "#4E78E4",
    accent2: "#79D8EB",
    dshbg: "#111217",
    white: "#ffffff",

}

export const PieColors = [
    "#4E78E4", "#79D8EB", "#171E4E", "#9546EF"
]



//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Bar Charts

// the data incoming here should be the payers and their paid amount
// highlight from your data the top paying patients and the amount paid
export const Bar1_label = "Amount paid by patient";
export const Bar1_CharData = [
    {xaxis: "Payer1", yaxis: "10"},
    {xaxis: "Payer2", yaxis: "20"},
    {xaxis: "Payer3", yaxis: "30"},
    {xaxis: "Payer4", yaxis: "10"}
]


// Patient volume by facility
export const Bar2_label = "Number of patients in this facility";
export const Bar2_CharData = [
    {xaxis: "Facility1", yaxis: "10"},
    {xaxis: "Facility1", yaxis: "20"},
    {xaxis: "Facility1", yaxis: "30"},
    {xaxis: "Facility1", yaxis: "10"}
]


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
export const Pie1_CharData = [
    {xaxis: "Service1", yaxis: "1000"},
    {xaxis: "Service2", yaxis: "4000"},
    {xaxis: "Service3", yaxis: "2400"},
    {xaxis: "Service4", yaxis: "3000"}
]


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Gauges

// Gauge1
// From this facility total X amount is billed, 
// total Y amount is collected
// Thus the average payment rate for this facility is 

let facility_1_total_billed = 2000;
let facility_1_total_collected = 1500;
let facility_1_avg_payment_percentage = (facility_1_total_collected/facility_1_total_billed)*100

export const Gauge1_CharData = facility_1_avg_payment_percentage;


// Gauge2
// Calculating from each patient.
// How much they are billed vs how much they actually paid as a %
let allPatients_total_billed = 4000;
let allPatients_total_collected = 3500;
let allPatients_avg_payment_percentage = (allPatients_total_collected/allPatients_total_billed)*100


export const Gauge2_CharData = allPatients_avg_payment_percentage;


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Score Cards

// For this facility, what is the total billed amount
const Facility1_total_billed = 250000;


// For this facility, what is the total paid amount
const Facility1_total_paid = 20000;

// For this facility, what is its OOPM (Total Out of pocked maximum)
const Facility1_OOPM = 1000;

export const Facility_1_Score = {
    "Total Billed": Facility1_total_billed,
    "Total Paid": Facility1_total_paid,
    "OOPM": Facility1_OOPM,
}



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