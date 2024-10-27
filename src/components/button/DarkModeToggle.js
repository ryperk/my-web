"use client";

import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {

  // const [ isDarkMode, setIsDarkMode] = useState();

  // const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  //     if (isDarkMode) {
  //       console.log('The browser is in dark mode');
  //     } else {
  //       console.log('The browser is in light mode');
  //     }

  // check current color mode
  

  const handleDarkMode = () => {
    console.log("click dark mode")
    return
  }

  return (
    <div className="flex flex-row gap-5">
      <div className='border rounded-md p-4 border-gray-300 cursor-pointer' onClick={handleDarkMode}>
        <svg className="w-4 h-4 text-gray-300 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
        </svg>
      </div>
      <div className='border rounded-md p-4 border-gray-300 cursor-pointer' onClick={handleDarkMode}>
        <svg className="w-4 h-4 text-gray-300 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z" />
        </svg>
      </div>
    </div>
  )
}
export default DarkModeToggle;