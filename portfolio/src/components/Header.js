import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import Logo from "./resources/favicon.png";

import { MdMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const Header = ({ width }) => {
    const [ menuVisible, setMenuVisible ] = useState(false);

    const { w } = width;

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    const handleMouseLeave = () => {
        setMenuVisible(false);
    }

    return (
        <nav className="sticky top-0 bg-white z-10">
            <div className="flex items-start justify-between px-8 py-6 sm:px-10 sm:py-8">
                <ScrollLink 
                    className='flex gap-2 items-center justify-left cursor-pointer'
                    to='Home' smooth={ true } duration={ 800 } offset={ -100 }  
                >
                    <img 
                        className="flex-0 w-8 h-8"
                        src={Logo} alt="Logo"    
                    />
                    
                    <h1 className="text-3xl font-semibold font-sans tracking-wide">
                        Kurt Pagal
                    </h1>
                </ScrollLink>

                { w < 1025 ? (
                    <div className="flex flex-col gap-4 items-end"
                        onMouseLeave={ handleMouseLeave }
                    >
                        <button className="text-4xl hover:text-grey-500 hover:animate-bounce" onClick={ toggleMenu }>
                            { menuVisible ? (
                                <IoCloseSharp />
                            ) : (
                                <MdMenu />
                            )}
                        </button>
                        
                        { menuVisible && (
                            <div className="flex flex-col gap-4 items-end">
                                <ScrollLink 
                                    className="text-2xl font-sans cursor-pointer"
                                    to="About" smooth={ true } duration={ 800 } offset={ -100 }
                                >
                                    About Me
                                </ScrollLink>

                                <ScrollLink 
                                    className="text-2xl font-sans cursor-pointer"
                                    to="Experience" smooth={ true } duration={ 800 } offset={ -100 }
                                >
                                    Experience
                                </ScrollLink>

                                <ScrollLink 
                                    className="text-2xl font-sans cursor-pointer"
                                    to="Projects" smooth={ true } duration={ 800 } offset={ -100 }
                                >
                                    Projects
                                </ScrollLink>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex gap-4">
                        <ScrollLink 
                            className="text-2xl font-sans cursor-pointer"
                            to="About" smooth={ true } duration={ 800 } offset={ -100 }
                        >
                            About Me
                        </ScrollLink>

                        <ScrollLink 
                            className="text-2xl font-sans cursor-pointer"
                            to="Experience" smooth={ true } duration={ 800 } offset={ -100 }
                        >
                            Experience
                        </ScrollLink>

                        <ScrollLink 
                            className="text-2xl font-sans cursor-pointer"
                            to="Projects" smooth={ true } duration={ 800 } offset={ -100 }
                        >
                            Projects
                        </ScrollLink>
                    </div>
                ) }
            </div>
        </nav>
    );
}

export default Header;