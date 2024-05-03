import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  let activeLink='block py-2 px-3 rounded text-blue-400 hover:text-blue-700 md:bg-transparent md:p-0 md:hover:bg-transparent'
  let normalLink='"block py-2 px-3 rounded text-white hover:text-blue-700 md:bg-transparent md:p-0 md:hover:bg-transparent'

  return (
    <nav className="bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">Blog</span>
        </NavLink>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
         {isOpen?
         
         <svg
         className="w-5 h-5"
         aria-hidden="true"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="white"
       >
         <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth={3}
           d="M6 18L18 6M6 6l12 12"
         />
       </svg>
         :
         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
         <path stroke="green" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
       </svg>
         
          
       
          }
        </button>
        <div className={`w-full md:w-auto ${isOpen ? 'block' : 'hidden'} md:block`} id="navbar-default">
          <ul className="flex flex-col md:flex-row p-2 space-y-4 md:space-y-0 md:space-x-8 font-medium">
            <li>
              <NavLink
                to="/"
                // className="block py-2 px-3 rounded text-white hover:text-blue-700 md:bg-transparent md:p-0 md:hover:bg-transparent"
                aria-current="page" 

               className={({isActive})=>isActive?activeLink:normalLink}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
               className={({isActive})=>isActive?activeLink:normalLink}

                // className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/protected/dashboard"
               className={({isActive})=>isActive?activeLink:normalLink}

                // className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
               className={({isActive})=>isActive?activeLink:normalLink}

                // className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
               className={({isActive})=>isActive?activeLink:normalLink}

                // className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
