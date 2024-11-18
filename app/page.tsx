"use client"

// This component has two features (responsive design | option forwarding)
// 1) responsible for the responsive design,
// where it holds spaces that are adjusted with TailwindCSS
// inside these spaces the Chart containers are held

// To see the layout borders, change in styles.css
// the name of the class default_card2 to default_card

// 2) Listens to the filter component to pass
// the selected information to all the chart/data components
// to fetch data from the dataset accordingly
// using an object containing two properties
// property1: the type of the filter
// property2: the selection


import Bar_1 from "@/components/ChartContainers/Bar_1";
import Bar_2 from "@/components/ChartContainers/Bar_2";
import Gauge_1 from "@/components/ChartContainers/Gauge_1";
import Gauge_2 from "@/components/ChartContainers/Gauge_2";
import Line_1 from "@/components/ChartContainers/Line_1";
import Pie_1 from "@/components/ChartContainers/Pie_1";
import Filter from "@/components/Filter/Filter";
import Score_Card from "@/components/ScoreContainers/Score_Card";
import Table_1 from "@/components/TableContainers/Table_1";
import { useState } from "react";

export type optionType = {
  type: string
  key: string | number 
};


export default function Home() {

  // the option selected by the filter that will be passed to all the dashboard components
  // to fetch the required data from the dataset
  const [dashboardOption, setDashboardOption] = 
  useState<optionType>({type: "facility", key: "Facility 1"}
  );

  // function passed to the filter to change the state here
  function ChangeOption (option:string|number, type:string) {
    setDashboardOption({type:type, key:option});
  }







  return (
    <>
    <main className='w-full min-h-[100vh] text-white
    flex flex-col items-center py-[2rem] px-[1rem] gap-[2rem] xl:gap-[7rem]
    pt-[7rem]
    '>

        {/* The filter */}
        <aside id="dashboard_filter" 
        className="h-auto w-full flex justify-center items-center
         md1:px-[0.5rem] max-w-[1330px]">
          <div className="w-full default_card2 h-full">
          {/* Healthcare filter */}
          <Filter ChangeOption={ChangeOption} dashboardOption={dashboardOption}/>
          </div>
        </aside>

        {/* Container holding all the chart components */}
        <section className="w-full flex flex-col md1:flex-row inline_gap flex-wrap
        justify-center max-w-[1455px] mt-[3rem] xl:mt-[0rem]">


          {/* Score card - display the total paid, billed and achieved OOPM sum for the selected option */}
          <div id="card_score" className="default_card2
          w-full h-[300px] md1:h-[400px] flex flex-row flex-wrap md1:w-[48%] xl:w-[29%]
          xl:h-[calc(400px+1.5rem)] mb-[3rem] md1:mb-0 relative glass_card_hoverx rounded-[10px]">
              <Score_Card dashboardOption={dashboardOption}/>
              <div className="w-full xl:w-[200%] absolute top-[-3rem] xl:top-[-4rem] font-bold text-[1.5rem] xl:text-[2rem]">
                
                {/* absolute to properly align with this card */}
                <h1><span className="capitalize">{dashboardOption.type} <span className="font-normal">{dashboardOption.key}</span> </span> overview</h1>
              </div>               
          </div>

          {/* Gauge 1: the total number of patients who covered their bill amount in the selected option */}
          {/* Gauge 2: the total amount paid in the selected option */}
          <div id="gauges_container" className="w-full flex flex-col inline_gap
          md:flex-row md1:w-[48%] md1:flex-col xl:w-[29%]">
              <div id="card_gauge1" className="default_card2 w-full h-[170px]
              md:h-[200px] md1:h-[50%] xl:h-[200px]">
                <Gauge_1 dashboardOption={dashboardOption}/>
              </div>

              <div id="card_gauge2" className="default_card2 w-full h-[170px]
              md:h-[200px] md1:h-[50%] xl:h-[200px]">
                <Gauge_2 dashboardOption={dashboardOption}/>
              </div>
          </div>

          {/* Pie chart - How much each service got paid having the selected option*/}
          <div id="card_pie" className="w-full default_card2 h-[300px]
          md1:w-[48%] md1:h-[calc(500px+1.5rem)] md1:order-1 xl:order-0
          xl:w-[29%] xl:h-[calc(400px+1.5rem)] md1:mt-[2rem] xl:mt-0">
            <Pie_1 dashboardOption={dashboardOption}/>
          </div>

          {/* Bars chart 1 - Top payers by revenue, i.e paid for the selected option */}
          {/* Bars chart 2 - Number of patients per option */}
          <div id="bars_container" className="w-full flex flex-col inline_gap
          md:flex-row md1:flex-col md1:w-[48%] md1:items-center md1:order-0 xl:order-1 xl:w-[29%] 
          mt-[3rem] md1:mt-[2rem] xl:mt-[2rem]">
            <div id="card_bar1" className="default_card2 md:w-[48%] w-full
            h-[200px] md1:h-[250px] xl:h-[200px] md1:w-[70%]">
              <Bar_1 dashboardOption={dashboardOption}/>
            </div>

            <div id="card_bar2" className="default_card2 md:w-[48%] w-full
            h-[200px] md1:h-[250px] xl:h-[200px] md1:w-[70%]">
              <Bar_2 dashboardOption={dashboardOption}/>
            </div>
          </div>

          {/* Line chart - Trends for charges and payments over time*/}
          <div id="card_line" className="default_card2 w-full h-[300px]
          md:h-[400px] md1:order-3 xl:w-[60%] xl:h-[calc(400px+1.5rem)]
          xl:mt-[2rem] xl:mx-0">
            <Line_1 dashboardOption={dashboardOption}/>
          </div>

        </section>

        {/* Table - Calculate and display KPI's for all the facilities in the company object*/}
        <section id="card_table" className="default_card2 w-full min-h-[300px]
        max-w-[1330px]">
          <Table_1/>
        </section>

      


        
    </main>

    </>
  );
}
