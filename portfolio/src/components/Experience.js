import React from "react";

const About = () => {
    return (
        <>
            <div className="flex flex-col px-10 py-5 gap-6 w-fit bg-gray-100 rounded-xl shadow-md drop-shadow-md md:shadow-lg md:drop-shadow-lg" id="Experience">
                <h1 className="text-5xl font-barlow font-bold text-center md:text-left">
                    Experience
                </h1>

                <p className="text-xl md:text-2xl indent-4 text-left font-poppins">
                    I have worked two part-time jobs where I learned the importance of time management and how to 
                    balance my work and student life. Through taking an Intemediate Software Engineering course in 
                    my third year. As part of the course, I led a team of six in developing an e-commerce website 
                    for our term project. I managed my team effectively, ensuring that tasks were delegated 
                    appropriately, resulting in our team meeting our monthly deliverables consistently.
                </p>
            </div>
        </>
    );
}

export default About;