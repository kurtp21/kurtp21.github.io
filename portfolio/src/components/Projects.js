import React from "react";

import Calculator from "./resources/Calculator.png";
import TODO from "./resources/To-Do.png";
import Sagu from "./resources/Sagu.png";

const Projects = () => {

    return (
        <div className="flex flex-col gap-20 items-center w-full" id="Projects">
            <h1 className="font-barlow font-bold text-7xl">
                Projects
            </h1>

            <div className="grid grid-cols-3 gap-5 items-stretch place-items-center">
                <div className="flex flex-col w-5/6 gap-8 py-10 px-8 items-center justify-center bg-gray-100 shadow-lg drop-shadow-lg">
                    <img 
                        className="object-scale-down w-[300px] h-min shadow-inner"
                        src={ Calculator } alt="Image"
                    />

                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-barlow font-bold">
                            Stacked-Base Calculator App
                        </h1>

                        <p className="text-xl font-poppins">
                            A calculator that implements a stack data structure to store all previous
                            expressions inputed by the user.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col w-5/6 gap-8 py-10 px-8 items-center justify-center bg-gray-100 shadow-lg drop-shadow-lg">
                    <img 
                        className="object-scale-down w-max-xl h-min shadow-inner"
                        src={ TODO } alt="Image"
                    />

                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-barlow font-bold">
                            To-Do List
                        </h1>

                        <p className="text-xl font-poppins">
                            A simple to-do list that saves data locally and has simple styling
                        </p>
                    </div>
                </div>

                <div className="flex flex-col w-5/6 gap-8 py-10 px-8 items-center justify-center bg-gray-100 shadow-lg drop-shadow-lg">
                    <img 
                        className="object-scale-down w-max-xl h-min shadow-inner"
                        src={ Sagu } alt="Image"
                    />

                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-barlow font-bold">
                            SAGU Website
                        </h1>

                        <p className="text-xl font-poppins">
                            An e-commerce website for a small familiy buisness stationed in Estevan, SK. 
                            I led a team of six students to develop this website for an Intermideate 
                            Software Engineering course. Only the front-end of this website is hosted on 
                            Vercel, the back-end is still in the works.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;