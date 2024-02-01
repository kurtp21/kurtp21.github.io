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
    const images = [
        Python,
        Java,
        C,
        JavaScript,
        HTML,
        CSS,
        Tailwind,
        react,
        MySQL,
    ];

    return (
        <div className="grid grid-cols-3 place-items-center items-stretch w-full gap-8">
            <img className="object-scale-down w-[250px] z-0" src={ Python } />
            <img className="object-scale-down w-[250px] z-0" src={ Java } />
            <img className="object-scale-down w-[250px] z-0" src={ C } />
            <img className="object-scale-down w-[250px] z-0" src={ JavaScript } />
            <img className="object-scale-down w-[250px] z-0" src={ HTML } />
            <img className="object-scale-down w-[250px] z-0" src={ CSS } />
            <img className="object-scale-down w-[250px] z-0" src={ react } />
            <img className="object-scale-down w-[250px] z-0" src={ Tailwind } />
            <img className="object-scale-down w-[250px] z-0" src={ MySQL } />
        </div>
    );
};

export default Carousel;