"use client"
// import { useState } from "react"; // import state

// export default function Header() {
//   const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

//   return (
//     <div className="flex items-center justify-between border-b border-gray-400 py-8">
//       <button data-ripple-light="true" data-popover-target="menu-1" data-popover-nested="true"
//   className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
//       </button>
//       <a href="/">
//         <img src="https://designbygio.it/images/logo.png" alt="logo" />
//       </a>
//       <nav>
//         <section className="MOBILE-MENU flex lg:hidden">
//           <div
//             className="HAMBURGER-ICON space-y-2"
//             onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
//           >
//             <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//             <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//             <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//           </div>

//           <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> // toggle class based on isNavOpen state
//             <div
//               className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
//               onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
//             >
//               <svg
//                 className="h-8 w-8 text-gray-600"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <line x1="18" y1="6" x2="6" y2="18" />
//                 <line x1="6" y1="6" x2="18" y2="18" />
//               </svg>
//             </div>
//             <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
//               <li className="border-b border-gray-400 my-8 uppercase">
//                 <a href="/about">About</a>
//               </li>
//               <li className="border-b border-gray-400 my-8 uppercase">
//                 <a href="/portfolio">Portfolio</a>
//               </li>
//               <li className="border-b border-gray-400 my-8 uppercase">
//                 <a href="/contact">Contact</a>
//               </li>
//             </ul>
//           </div>
//         </section>

//         <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
//           <li>
//             <a href="/about">About</a>
//           </li>
//           <li>
//             <a href="/portfolio">Portfolio</a>
//           </li>
//           <li>
//             <a href="/contact">Contact</a>
//           </li>
//         </ul>
//       </nav>
//       <style>{`
//       .hideMenuNav {
//         display: none;
//       }
//       .showMenuNav {
//         display: block;
//         position: absolute;
//         width: 100%;
//         height: 100vh;
//         top: 0;
//         left: 0;
//         background: white;
//         z-index: 10;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-evenly;
//         align-items: center;
//       }
//     `}</style>
//     </div>
//   );
// }

import Link from 'next/link';
import Navbar from './Navbar'
import React, { MouseEvent, useState } from "react";
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

export default function Menu () {
    // const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    //     // Handle the click event for the button
    //     console.log(event.clientX, event.clientY);
    //   };

    // const Dropdown = () =>  {
      const [isOpen, setIsOpen] = useState(false);
      
      const toggleDropdown = () =>    {
          setIsOpen(!isOpen);
      }

      const closeDropdown = () => {
          setIsOpen(false);
      }
//   }

    return  (
    
        <div>
            <div className='transition-all duration-300 ease-in-out' >
                <button className='relative inline-flex p-3 rounded lg:hidden ml-auto outline-none font-bold rounded-lg inline-flex items-center text-center 'id="dropdownDefaultButton" data-dropdown-toggle="dropdown" type="button" onClick={toggleDropdown}>
                    <svg 
                        className='w-6 h-10 mr-2'
                        fill='none'
                        aria-hidden="true"
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                    </svg>
                    Main Menu
                </button>
                    {isOpen && ( 
                        <div className="lg:invisible z-10 divide-y divide-white-100 lg:dropdown-disable mx-auto mt-2 w-44 ring-1 ring-black ring-opacity-5" style={{ transition: 'all 3s ease-in-out' }} >
                            <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu" className='border-solid border-2 border-gray-900 dark:border-white pt-4 pb-4 rounded-lg shadow-lg pl-12 pr-12 absolute bg-teal-600 hover:bg-white-900 bg-teal-600 ring-1 ring-black ring-opacity-5'>
                                <li>
                                    <div>
                                        <a
                                            href="/about"
                                            className="block px-4 py-2 text-sm font-bold hover:bg-white hover:text-black "
                                            onClick={closeDropdown}
                                        >
                                            About
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className='border-t-2 border-black dark:border-white'>
                                        <a
                                            href="/movies"
                                            className="block px-4 py-2 text-sm font-bold hover:bg-white  hover:text-black"
                                            onClick={closeDropdown}
                                        >  
                                            Movies
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className='border-t-2 border-black dark:border-white'>
                                        <a
                                            href='/music'
                                            className="block px-4 py-2 text-sm font-bold  hover:bg-white  hover:text-black"
                                            onClick={closeDropdown}
                                        >
                                            Music
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className='border-t-2 border-black dark:border-white'>
                                        <a
                                            href='/contact'
                                            className="block px-4 py-2 text-sm font-bold  hover:bg-white hover:text-black"
                                            onClick={closeDropdown}
                                        >
                                            Contact
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
          <div className={` ${
            <Navbar /> ? '' : 'hidden'
          }  w-full lg:inline-grid lg:w-auto`}>
            <div className='hidden lg:visible lg:inline-flex lg:flex-row lg:ml-auto gap-16 lg:w-auto w-full lg:items-center items-start flex flex-wrap lg:h-auto sm:h-auto'>
              {/* <Link href='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-500 hover:text-white '>
                  Home
              </Link> */}
              <Link href='/about' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center sm:float-start'>
                  About
              </Link>
              <Link href='/movies' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center sm:float-end'>
                  Movies 
              </Link>
              <Link href='/music' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center sm:float-start sm:break-before'>
                  Music
              </Link>
              <Link href='/contact' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center sm:float-end'>
                  Contact 
              </Link>
            </div>
          </div>
      </div>
    )
}