import React from 'react';
import { MdMenu } from "react-icons/md";
import Logo from "./favicon.png"

const Header = () => {
    return (
        <nav className="flex items-center justify-between bg-slate-300 px-8 py-6 sm:px-10 sm:py-8 sticky top-0">
            <div className='flex flex-1 gap-2 items-center justify-left'>
                <img 
                    className="flex-0 w-8 h-8"
                    src={Logo} alt="Logo"    
                />
                
                <h1 className="text-2xl font-semibold tracking-wide">
                    Kurt Pagal
                </h1>
            </div>

            <div className="flex-0 items-center">
                <div className="text-4xl sm:hidden">
                    <button className="hover:text-gray-500">
                        <MdMenu />
                    </button>
                </div>

                <div className="flex gap-4 max-sm:hidden">
                    <a className="text-sm sm:text-xl">
                        About Me
                    </a>
                    <a className="text-sm sm:text-xl">
                        Experience
                    </a>
                    <a className="text-sm sm:text-xl">
                        Projects
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Header;