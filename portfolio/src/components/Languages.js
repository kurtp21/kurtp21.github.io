import React from "react";

import Python from "./resources/python.png";
import Java from "./resources/java.png";
import C from "./resources/C.png";
import JavaScript from "./resources/JavaScript.png";
import HTML from "./resources/HTML.png";
import CSS from "./resources/CSS.png";
import Tailwind from "./resources/tailwimd.png";
import react from "./resources/React-icon.png";
import MySQL from "./resources/Mysql.png";

const Carousel = () => {
    // const images = [
    //     Python,
    //     Java,
    //     C,
    //     JavaScript,
    //     HTML,
    //     CSS,
    //     Tailwind,
    //     react,
    //     MySQL,
    // ];

    return (
        // <div className="grid grid-cols-3 place-items-center items-stretch w-full gap-8">
        <dvi className="flex flex-col items-center justify-start gap-8 w-full">
            <div className="flex gap-20 overflow-x-auto px-10 py-15 w-full">
                <img className="object-scale-down w-[150px] z-0" src={ Python } />
                <img className="object-scale-down w-[150px] z-0" src={ Java } />
                <img className="object-scale-down w-[150px] z-0" src={ C } />
                <img className="object-scale-down w-[150px] z-0" src={ JavaScript } />
                <img className="object-scale-down w-[150px] z-0" src={ HTML } />
                <img className="object-scale-down w-[150px] z-0" src={ CSS } />
                <img className="object-scale-down w-[150px] z-0" src={ react } />
                <img className="object-scale-down w-[150px] z-0" src={ Tailwind } />
                <img className="object-scale-down w-[150px] z-0" src={ MySQL } />
            </div>
            
            <h3 className="font-poppins font-bolder text-2xl">Scroll to see more</h3>
        </dvi>
    );
};

export default Carousel;