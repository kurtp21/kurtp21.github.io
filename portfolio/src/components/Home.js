import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import Headshot from "./resources/Headshots.jpg";
import Resume from './resources/kurt-pagal-resume.pdf';

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
        link.download = "kurt-pagal-resume.pdf";

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    };

    return (
        <>
            <div className="flex flex-col gap-56 items-center py-10 w-full" >
                {/* Hero Section */}
                <div className="flex flex-col w-full lg:flex-row items-center justify-center gap-10 lg:gap-20 lg:px-10 lg:py-5" id="Home">
                    <img 
                        className="object-cover items-stretch w-full h-full md:w-[250px] md:h-[350px] lg:w-[550px] lg:h-[650px] z-0 rounded-xl drop-shadow-md shadow-md lg:drop-shadow-2xl lg:shadow-2xl"
                        src={ Headshot } alt="Logo"
                    />
                    
                    <div className="flex flex-col items-start justify-center gap-10 lg:gap-20 w-full max-w-3xl">
                        <div className="flex flex-col gap-4 w-full">
                            {width < 1150 ? (
                                <div className="flex flex-col gap-0 lg:gap-5">
                                    <h1 className="text-[65px] md:text-5xl lg:text-7xl underline underline-offset-8 font-barlow font-bold tracking-wide drop-shadow-2xl">
                                        Hello I&apos;m <br></br>
                                    </h1>

                                    <h1 className="text-[55px] md:text-5xl lg:text-7xl font-barlow font-bold tracking-wide drop-shadow-2xl">
                                        Kurt Pagal
                                    </h1>
                                </div>
                            ) : (
                                <>
                                    <h1 className="text-4xl lg:text-7xl underline underline-offset-8 font-barlow font-bold tracking-wide drop-shadow-2xl">
                                        Hello I&apos;m
                                    </h1>
                                    
                                    <TypeAnimation 
                                        sequence={["Kurt Pagal", 2000, "A Developer", 2000, "A Thinker", 2000, "Ambitious", 2000]}
                                        speed={50}
                                        repeat={Infinity}
                                        className="text-4xl lg:text-7xl font-extrabold font-barlow drop-shadow-2xl tracking-wide"
                                    />
                                </>
                            )}
                        </div>

                        
                        <div className="flex flex-col gap-3 w-full">
                            <h1 className="text-4xl font-poppins font-light">
                                Computer Science Student
                            </h1>

                            <div className="flex gap-10 items-center justify-start">
                                <button 
                                    className="rounded-xl py-2 px-4 bg-gray-200 shadow-md drop-shadow-md lg:shadow-lg lg:drop-shadow-lg active:shadow-none active:drop-shadow-none active:bg-gray-100 text-2xl"
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
                
                <div className="flex flex-col gap-20 w-full">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start justify-between">
                        <About/>
                        <Experience />
                    </div>

                    <Languages />
                </div>

                <Projects />
            </div>
        </>
    );
};

Home.propTypes = {
    width: PropTypes.number.isRequired,
};

export default Home;