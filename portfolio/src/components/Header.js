import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Logo from "./images/favicon.png";

import { MdMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
    const [ menuVisible, setMenuVisible ] = useState(false);

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    
    const updateWindowSize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        // Add event listener when the component mounts
        window.addEventListener('resize', updateWindowSize);
        console.log(windowSize.width, windowSize.height);

        // Remove event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', updateWindowSize);
        };

    }, []); 

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    const handleMouseLeave = () => {
        setMenuVisible(false);
    }

    return (
        <nav className="sticky top-0 bg-white z-10">
            <div className="flex items-start justify-between px-8 py-6 sm:px-10 sm:py-8 cursor-pointer">
                <ScrollLink 
                    className='flex flex-1 gap-2 items-center justify-left'
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

                { windowSize.width < 1025 ? (
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
                                <a className="text-2xl font-sans">
                                    About Me
                                </a>
                                <a className="text-2xl font-sans">
                                    Experience
                                </a>
                                <a className="text-2xl font-sans">
                                    Projects
                                </a>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex gap-4">
                        <a className="text-2xl font-sans">
                            About Me
                        </a>
                        <a className="text-2xl font-sans">
                            Experience
                        </a>
                        <a className="text-2xl font-sans">
                            Projects
                        </a>
                    </div>
                ) }
            </div>
        </nav>
    );
}

export default Header;