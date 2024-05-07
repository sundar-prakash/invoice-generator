import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [dark, setDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  function logoutHandler() {
    // Clear session storage
    sessionStorage.clear();

    // Refresh the page
    window.location.reload();
  }
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (




<nav className="flex items-center justify-between flex-wrap p-6 text-gray-700 dark:text-white dark:bg-gray-800">
     <div className="flex items-center flex-shrink-0  mr-6 md:mr-16">
     <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="./logo.png" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Invoices</span>
    </a>
     </div>
     <div className="block md:hidden text-2xl">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block flex-grow md:flex md:items-center md:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className=" md:flex-grow">
         <Link to="/" className="block mt-4 md:inline-block md:mt-0 text-white-200 mr-4">
           Home
         </Link>
         <Link to="/invoice" className="block mt-4 md:inline-block md:mt-0 text-white-200 mr-4">
           Invoice
         </Link>
         <Link to="/templates" className="block mt-4 md:inline-block md:mt-0 text-white-200 mr-4">
           Templates
         </Link>
         
       </div>
       <div>
      <button onClick={logoutHandler} className="text-red-500 md:mr-4">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
        </button>
       <button onClick={() => darkModeHandler()}>
         {dark && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          )}
          {!dark && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
        </button>
       </div>
     </div>
   </nav>
      


  );
};

export default Header;
