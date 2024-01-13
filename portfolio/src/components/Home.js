import Headshot from "./images/Headshots.jpg";
import { TypeAnimation } from "react-type-animation";
import "../styles/tailwind.css";

import React, { useState, useEffect } from "react";

const Home = () => {
    const characteristics = [
        "Kurt Pagal",
        "A Developer",
        "A Thinker",
        "Ambitious", 
    ]

    const [ displayText, setDisplayText ] = useState(characteristics[0]);
    const [ deleteAnimation, setDeleteAnimation ] = useState(false);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDeleteAnimation(true);

            setTimeout(() => {
               const nextIdx = (characteristics.indexOf(displayText) + 1) % characteristics.length;
               setDisplayText(characteristics[nextIdx]);
               setDeleteAnimation(false); 
            }, 500);
        }, 3000);

        return () => clearInterval(intervalID);
    }, [ displayText, characteristics ]);

    return (
        <>
            <div className="flex flex-col items-center justify-start py-10 h-[10000px]" id="Home">
                <div className="flex flex-col w-fit sm:flex-row items-center justify-center gap-20 px-10 py-5">
                    <img 
                        className="object-scale-down w-4/12 h-5/12 z-0 rounded-3xl drop-shadow-2xl shadow-xl"
                        src={ Headshot } alt="Logo"
                    />

                    <div className="flex flex-col items-start gap-2 w-4/12">
                        <h1 className="text-7xl font-barlow font-medium drop-shadow-2xl">
                            Hello I'm
                        </h1>
                        
                        <TypeAnimation 
                            sequence={["Kurt Pagal", 1800, "A Developer", 1800, "A Thinker", 1800, "Ambitious", 1800]}
                            speed={50}
                            repeat={Infinity}
                            className="text-6xl font-poppins font-extrabold tracking-wide drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;