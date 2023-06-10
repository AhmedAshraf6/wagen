'use client';
import React, { useState } from 'react';
import { LangSwitcher } from './LangSwitcher';
import Link from 'next/link';
import Image from 'next/image';
import s from '../../../../public/flags/saudi.webp';
import b from '../../../../public/flags/global.webp';
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
        <div className='min-w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-black rounded-lg backdrop-blur-md py-32'>
          <ul className='flex items-center flex-col justify-center gap-3 text-white'>
            {navitems &&
              navitems.map((item, index) => (
                <a key={index} href={`${item.link}`} onClick={toggleMenu}>
                  {item.name}
                </a>
              ))}
            {lng == 'en' ? (
              <Link href='/ar' className='flex items-center gap-1'>
                <Image
                  width={100}
                  height={100}
                  className='object-contain w-[20px] h-[20px]'
                  src={s}
                  alt='image 1'
                />
                العربية
              </Link>
            ) : (
              <Link href='/en' className='flex items-center gap-1'>
                <Image
                  width={100}
                  height={100}
                  className='object-contain w-[20px] h-[20px]'
                  src={b}
                  alt='image 1'
                />
                English
              </Link>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
