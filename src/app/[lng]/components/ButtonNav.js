'use client';
import React, { useState } from 'react';
import { LangSwitcher } from './LangSwitcher';
export default function ButtonNav({ navitems, lng }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <button
        className='flex flex-col justify-center items-center '
        onClick={toggleMenu}
      >
        <span
          className={`bg-black dark:bg-light transiti-all duration-300 ease-out  block h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-black dark:bg-light transiti-all duration-300 ease-out  block h-0.5 w-6 rounded-sm my-0.5  ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-black dark:bg-light transiti-all duration-300 ease-out  block h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45  -translate-y-1' : 'translate-y-0.5'
          } `}
        ></span>
      </button>
      {isOpen ? (
        <div className='min-w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-black/90 dark:bg-white/75 rounded-lg backdrop-blur-md py-32'>
          <ul className='flex items-center flex-col justify-center gap-3 text-white'>
            {navitems &&
              navitems.map((item, index) => (
                <a key={index} href={`#${item.link}`} onClick={toggleMenu}>
                  {item.name}
                </a>
              ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
