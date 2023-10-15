'use client' 
import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {

    const [darkTheme, setDarkTheme] = useState(false);
    const toggleDarkTheme = () => {
      setDarkTheme(!darkTheme);
    };
  
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
        <Link href="/Grade9secA">
          <button
            className={`${
              darkTheme ? 'bg-gray-700' : 'bg-blue-500'
            } text-white text-xl font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
          >
            Grade9secA
          </button>
        </Link>
        <Link href="/Grade9secB">
          <button
            className={`${
              darkTheme ? 'bg-gray-700' : 'bg-blue-500'
            } text-white text-xl font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
          >
            Grade9secB
          </button>
          </Link>
          <Link href="/Grade10secA">
          <button
            className={`${
              darkTheme ? 'bg-gray-700' : 'bg-blue-500'
            } text-white text-xl font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
          >
            Grade10secA
          </button>
          </Link>
          <Link href="/Grade10secB">
          <button
            className={`${
              darkTheme ? 'bg-gray-700' : 'bg-blue-500'
            } text-white text-xl font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
          >
            Grade10secB
          </button>
          </Link>
          <Link href="/Grade11secA">
          <button
            className={`${
              darkTheme ? 'bg-gray-700' : 'bg-blue-500'
            } text-white text-xl font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
          >
            Grade11secA
          </button>
          </Link>
          <Link href ="/Grade11secB">
          <button
            className={`${
              darkTheme ? 'bg-gray-700' : 'bg-blue-500'
            } text-white text-xl font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
          >
            Grade11secB
          </button>
          </Link>
          <Link href="/Grade11secC">
          <button
            className={`${
              darkTheme ? 'bg-gray-700' : 'bg-blue-500'
            } text-white text-xl font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
          >
            Grade11secC
          </button>
          </Link>
          <Link href="/Grade12secA">
          <button
            className={`${
              darkTheme ? 'bg-gray-700' : 'bg-blue-500'
            } text-white text-xl font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
          >
            Grade12secA
          </button>
          </Link>
          <Link href="Grade12secB">
          <button
            className={`${
              darkTheme ? 'bg-gray-700' : 'bg-blue-500'
            } text-white text-xl font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
          >
            Grade12secB
          </button>
          </Link>
          <Link href="Grade12secC">
          <button
            className={`${
              darkTheme ? 'bg-gray-700' : 'bg-blue-500'
            } text-white text-xl font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
          >
            Grade12secC
          </button>
          </Link>

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