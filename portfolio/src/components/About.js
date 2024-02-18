import React from "react";

const About = () => {
    return (
        <>
            <div className="flex flex-col px-10 py-5 gap-6 w-fit bg-gray-100 rounded-xl shadow-md drop-shadow-md md:shadow-lg md:drop-shadow-lg" id="About">
                <h1 className="text-5xl font-barlow font-bold text-center md:text-left">
                    About Me
                </h1>

                <p className="text-xl md:text-2xl text-left font-poppins">
                    I am currently im my thrid-year of a four year Bachelors of Science, majoring in Computer Science at the University of Saskatchewan.
                    I joined the university&apos;s Computer Science Student Society, where I was elected to be the Banquet Director. I like to spend my 
                    free time cooking, studying for my courses, or coding a side project (which I picked up recently). I also like to be active by
                    going to the gym five times a week, to keep my physical and mental states healthy.
                </p>
            </div>
        </>
    );
}

export default About;