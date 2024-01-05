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
        // <>
        //     <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        //         <div class="block lg:hidden">
        //             <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        //                 <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        //                     <title>Menu</title>
        //                     <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        //                 </svg>
        //             </button>
        //         </div>

        //         <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        //             <div class="text-sm lg:flex-grow">
            //             <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            //                 Docs
            //             </a>
            //             <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            //                 Examples
            //             </a>
            //             <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            //                 Blog
            //             </a>
        //             </div>
        //         </div>
        //     </nav>
        // </>
    );
}

export default Header;