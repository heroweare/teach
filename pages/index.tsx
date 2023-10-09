'use client' 
import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {

    const [darkTheme, setDarkTheme] = useState(false);
    const toggleDarkTheme = () => {
      setDarkTheme(!darkTheme);
    };
  
    const buttonNames = [
      'Grade 9 SEC A',
      'Grade 9 SEC B',
      'Grade 10 SEC A',
      'Grade 10 SEC B',
      'Grade 11 SEC A',
      'Grade 11 SEC B',
      'Grade 11 SEC C',
      'Grade 12 SEc A',
      'Grade 12 SEC B',
      'Grade 12 SEC C',
    ];
  return (
    <div
    className={`${
      darkTheme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    } min-h-screen relative`}
  >
    <header className="flex items-center justify-between py-4 px-8 border-b border-gray-300">
      <h1 className="text-3xl font-bold">Teachers Attendance</h1>
      <div className="relative inline-block w-10 mr-2 align-middle select-none">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          checked={darkTheme}
          onChange={toggleDarkTheme}
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        />
      </div>
    </header>

    <div className="container mx-auto py-8">
      <div className="grid grid-cols-2 gap-4">
        {buttonNames.map((name, index) => (
          <button
            key={index}
            className={`${
              darkTheme ? 'bg-gray-700' : 'bg-blue-500'
            } text-white text-xl font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
          >
            {name}
          </button>
        ))}
      </div>
    </div>

    <svg
      className={`${
        darkTheme ? 'text-gray-900' : 'text-white'
      } absolute bottom-0 left-0 w-full`}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M1440 0H0V120C0 120 720 60 1440 120Z"
      />
    </svg>
  </div>
);
}