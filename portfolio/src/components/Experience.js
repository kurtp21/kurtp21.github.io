import React from "react";

const About = () => {
    return (
        <>
            <div className="flex flex-col px-10 py-5 gap-6 w-fit bg-gray-100 rounded-xl shadow-md drop-shadow-md md:shadow-lg md:drop-shadow-lg" id="Experience">
                <h1 className="text-5xl font-barlow font-bold text-center md:text-left">
                    Experience
                </h1>

                <p className="text-xl md:text-2xl text-left font-poppins">
                    <ul className="list-disc">
                        <li className="mb-2">
                            I have worked two part-time jobs Pristine Carwash and A&W. It tought me the importance of time management 
                            and how to balance my work and student life.
                        </li>

                        <li className="mb-2">
                            I led a small group of six people to develop a small e-commerce website for a small family business, As
                            part of my Intermediate Software Engineering course project. 
                        </li>

                        <li>
                            Currently a part of the Computer Science Student Society executive team, as the Banqueat Director. I help 
                            out in events planed for the computer sciecne students and also in charge of planning the graduation banquet
                            for the computer science grads of 2024. 
                        </li>
                    </ul>
                </p>
            </div>
        </>
    );
}

export default About;