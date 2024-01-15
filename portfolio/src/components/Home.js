import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

import Headshot from "./resources/Headshots.jpg";
import Resume from './resources/Resume.pdf';

import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import "../styles/tailwind.css";

import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects"
import Languages from "./Languages";

const Home = ({ width }) => {
    // Function that handles the download of resume
    const handleDownload = () => {
        const link = document.createElement("a");

        link.href = Resume;
        link.download = "Resume.pdf";

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    };

    return (
        <>
            <div className="flex flex-col gap-56 items-center py-10" >
                {/* Hero Section */}
                <div className="flex flex-col w-full lg:flex-row items-center lg:justify-center gap-20 px-10 py-5" id="Home">
                    <img 
                        className="object-scale-down w-4/12 h-5/12 z-0 rounded-3xl drop-shadow-2xl shadow-2xl"
                        src={ Headshot } alt="Logo"
                    />
                    
                    <div className="flex flex-col items-start justify-center gap-20 w-full max-w-3xl">
                        <div className="flex items-center gap-4 w-full">
                            <h1 className="text-7xl underline underline-offset-8 font-barlow font-bold tracking-wide drop-shadow-2xl">
                                Hello I'm
                            </h1>
                            
                            <TypeAnimation 
                                sequence={["Kurt Pagal", 2000, "A Developer", 2000, "A Thinker", 2000, "Ambitious", 2000]}
                                speed={50}
                                repeat={Infinity}
                                className="text-7xl font-barlow font-extrabold tracking-wide drop-shadow-2xl"
                            />
                        </div>

                        
                        <div className="flex flex-col gap-3">
                            <h1 className="text-4xl font-poppins font-light">
                                Computer Science Student
                            </h1>

                            <div className="flex gap-10 items-center justify-between">
                                <button 
                                    className="rounded-xl py-2 px-4 bg-gray-200 shadow-lg drop-shadow-lg active:shadow-none active:drop-shadow-none active:bg-gray-100 text-2xl"
                                    onClick={ handleDownload }
                                >
                                    Resume
                                </button>

                                <div className="flex gap-4">
                                    <Link to="https://github.com/kurtp21/">
                                        <FaGithub className="w-10 h-10"/>
                                    </Link>

                                    <Link to="https://www.linkedin.com/in/kurtpagal/">
                                        <FaLinkedin className="w-10 h-10"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <div className="flex gap-20 items-start justify-between">
                        <About/>
                        <Experience />
                    </div>

                    <Languages />
                </div>

                <Projects />
            </div>
        </>
    );
}

export default Home;