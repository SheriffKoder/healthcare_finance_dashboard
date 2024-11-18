// https://lottiefiles.com/blog/working-with-lottie-animations/how-to-use-lottie-in-react-app
// https://lottiefiles.com/free-animation/checkmark-animation-dJfka3ygAI
// https://www.youtube.com/watch?app=desktop&v=H2HYccAGR00

"use client"
import React, { useState, useRef, useEffect } from 'react'
import "./circularProgress.css"

// import Lottie from "react-lottie";
// import animationData from "./animation-mark.json"

// if you will use a small circle use in svg r value and in the fill add value (i100%End-iDesired100%End)

const CircularProgress = ({progress, Colors}:{progress:number, Colors:string[]}) => {

    const [prog, setProg] = useState<string>("100%");
    const [length, setLength] = useState<number>(95);
    const [busy, setBusy] = useState(false);

    // allow to clear the timer interval and set a new one when clicking the buttons, make sure to use window.setInterval
    const timerRef = useRef<number>(0);

   
    


    // buttons handler
    const changeProgress = (num:number) => {

        // align the progress to be a little backwards on 
        // let factor = (((num-50+50)*((num/100)*(num/100)*(num/100)*(num/100))/2))+2;
        // num/100 >= 0.5 ? factor = 20*(num/100) : 0;

        // cut like filled bar for un-complete shape at 100%, with a rotation added in css to shift the start position
        let factor = (100*num/100);

        let fill = (Math.floor(450-(450*(num/100))+factor));

        // let fill = (Math.floor(450-(450*(num/100))+factor))+(282-106); // small svg r
        // console.log(fill);
        // console.log(length);
        // console.log(+prog.split("%")[0]);
        // console.log(fill);
        // ref.current?.
        let progressBar = document.getElementById("circularProgress_svg");

        
        if (progressBar) {

            let i=length;   //current length
            let number = 0;
            setBusy(true);
            timerRef.current = window.setInterval(()=> {

                // gradual speed change depending on the current i/progress
                let speedFactor = (125/i)*(300/i);

                // Backward progress / decrementing
                if (num < +prog.split("%")[0]) {

                    i=i+(2*speedFactor);
                    number=number+(2*speedFactor);
                    //   console.log(i);
        
                    if (i >= fill) {
                        clearInterval(timerRef.current);
                        setProg(`${Math.round(num)}%`)  // just a double check as final % number can increase a bit buggy
                        setBusy(false);
                    } else {
                        setProg(`${Math.floor((number/340*100)-(+prog.split("%")[0])-1)*-1}%`);
                        // prog.style.strokeDashoffset=`${i}`; 
                        setLength(i);   
                    }

                    if (i === 112) {
                        setProg("100%");
                    }

                // Forward progress / incrementing
                } else {

                    i=i-(2*speedFactor);
                    number=number+(2*speedFactor);
                    //   console.log(i);
        
                    if (i <= fill) {
                        clearInterval(timerRef.current);
                        setProg(`${Math.round(num)}%`)
                        setBusy(false);
                    

                    } else {
                        const displayedNumber = Math.floor((number/340*100)+(+prog.split("%")[0])-1);
                        // condition to avoid displaying more than 100%
                        if (displayedNumber <= 100) setProg(`${displayedNumber}%`);
                        // prog.style.strokeDashoffset=`${i}`; 
                        //-5 just for alignment
                        (displayedNumber > 95) ? setLength(i-5) : setLength(i);   
                    }

                    if (i < 110) {
                        setProg("100%");
                    }
                }

            }, 10);

        }
    }

    useEffect(()=> {
        clearInterval(timerRef.current);
        changeProgress(progress);
    },[progress]);

  return (
    <section className="FullScreen_CenteredFlex ambientBackground">
        <div className="circularProgress_skill">
            <div className="circularProgress_outer">
                <div className="circularProgress_inner">
                    <div id="circularProgress_number">
                        
                        {+prog.split("%")[0] >= 99 ? 
                        (
                            prog
                        ): 
                            prog
                        }
                    </div>
                </div>
            </div>

            {/* takes length between 112(100%) and 450 (0%) */}
            <svg id="circularProgress_svg" 
            className="rotate-[125deg]" style={{strokeDashoffset: length  }}
            xmlns="http://www.w3.org/2000/svg" version="1.1" width="148px" height="148px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="50%" stopColor={Colors[0]}/>
                        <stop offset="100%" stopColor={Colors[1]}/>
                    </linearGradient>
                </defs>
                <circle cx="72.5" cy="73.5" r="70" strokeLinecap="round"
                id="circularProgress_circle" />
            </svg>
        </div>

       

    </section>
  )
}

export default CircularProgress