import Bar_1 from "@/components/ChartContainers/Bar_1";
import Bar_2 from "@/components/ChartContainers/Bar_2";
import Gauge_1 from "@/components/ChartContainers/Gauge_1";
import Gauge_2 from "@/components/ChartContainers/Gauge_2";
import Line_1 from "@/components/ChartContainers/Line_1";
import Pie_1 from "@/components/ChartContainers/Pie_1";
import Score_Card from "@/components/ScoreContainers/Score_Card";
import Table_1 from "@/components/TableContainers/Table_1";

export default function Home() {
  return (
    <>
    <nav className="w-full h-[7vh] bg-accent1">
      Nav bar
    </nav>
    <main className='w-full min-h-[100vh] bg-dshbg text-white
    flex flex-col items-center py-[2rem] px-[1rem] layout_gap'>


        <aside id="dashboard_filter" 
        className="h-[100px] w-full flex justify-center items-center
         md1:px-[0.5rem] max-w-[1330px]">
          <div className="w-full default_card h-full">
          Healthcare filter
          </div>
        </aside>


        <div className="w-full flex flex-col md1:flex-row inline_gap flex-wrap
        justify-center max-w-[1455px]">

          <div id="card_score" className="default_card
          w-full h-[300px] flex flex-row flex-wrap md1:w-[48%] xl:w-[29%]
          xl:h-[calc(400px+1.5rem)] mb-[3rem] md1:mb-0">
              <Score_Card/>                
          </div>

          <div id="gauges_container" className="w-full flex flex-col inline_gap
          md:flex-row md1:w-[48%] md1:flex-col xl:w-[29%]">
              <div id="card_gauge1" className="default_card w-full h-[100px]
              md:h-[200px] md1:h-[50%] xl:h-[200px]">
                <Gauge_1/>
              </div>

              <div id="card_gauge2" className="default_card w-full h-[100px]
              md:h-[200px] md1:h-[50%] xl:h-[200px]">
                <Gauge_2/>
              </div>
          </div>

          <div id="card_pie" className="w-full default_card h-[300px]
          md1:w-[48%] md1:h-[calc(500px+1.5rem)] md1:order-1 xl:order-0
          xl:w-[29%] xl:h-[calc(400px+1.5rem)] md1:mt-[2rem] xl:mt-0">
            <Pie_1/>
          </div>

          <div id="bars_container" className="w-full flex flex-col inline_gap
          md1:w-[48%] md1:order-0 xl:order-1 xl:w-[29%] 
          mt-[3rem] md1:mt-[2rem] xl:mt-[2rem]">
            <div id="card_bar1" className="default_card w-full h-[150px]
            md:h-[200px] md1:h-[250px] xl:h-[200px]">
              <Bar_1/>
            </div>

            <div id="card_bar2" className="default_card w-full h-[150px]
            md:h-[200px] md1:h-[250px] xl:h-[200px]">
              <Bar_2/>
            </div>
          </div>

          <div id="card_line" className="default_card w-full h-[200px]
          md:h-[300px] md1:order-3 xl:w-[60%] xl:h-[calc(400px+1.5rem)]
          xl:mt-[2rem] xl:mx-0">
            <Line_1/>
          </div>

        </div>


        <div id="card_table" className="default_card w-full h-[700px]
        max-w-[1330px]">
          <Table_1/>
        </div>

      


        
    </main>
    </>
  );
}
