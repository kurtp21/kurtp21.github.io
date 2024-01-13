import React from "react";
import { Link } from "react-router-dom";

import { PiCopyright } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="flex gap-4 py-4 items-center justify-center text-2xl">
                <Link
                    className="flex gap-1 items-center"
                    to="https://github.com/kurtp21/kurtp21.github.io"
                >
                    <PiCopyright /> Created by Kurt Pagal
                </Link>

                <Link to="https://github.com/kurtp21/">
                    <FaGithub />
                </Link>

                <Link to="https://www.linkedin.com/in/kurtpagal/">
                    <FaLinkedin />
                </Link>
            </div>
        </>
    );
}

export default Footer;