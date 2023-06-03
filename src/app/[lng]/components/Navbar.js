'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import logo from '../../../../public/logo.svg';
import { BsLinkedin, BsPinterest } from 'react-icons/bs';
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiFillDribbbleCircle,
} from 'react-icons/ai';
import Image from 'next/image';
import { LangSwitcher } from './LangSwitcher';
import { useTranslation } from '@/app/i18n';

const Navbar = async ({ lng }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const { t } = await useTranslation(lng, 'hero');
  const navitems = t('navItems', { returnObjects: true });

  return (
    <header className='w-full px-5 md:px-15 lg:px-32 py-2 sm:py-4 font-medium  dark:text-light'>
      {/* small screen */}
      <div className='w-full flex lg:hidden items-center justify-between '>
        <Link href='/'>
          <Image
            src={logo}
            width={150}
            height={150}
            alt='logo image'
            className='cursor-pointer w-[80px] h-[100px] '
          />
        </Link>

        <button
          className='flex flex-col justify-center items-center '
          onClick={() => setIsOpen(!isOpen)}
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
      </div>
      <div className='w-full hidden lg:flex items-center justify-between'>
        <Link href='/'>
          <Image
            src={logo}
            width={150}
            height={150}
            alt='logo image'
            className='cursor-pointer w-[80px] h-[100px] '
          />
        </Link>
        <ul className='flex gap-3'>
          {navitems &&
            navitems.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <LangSwitcher lng={lng} />
      </div>
      {/* menu */}
      {isOpen ? (
        <div className='min-w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-black/90 dark:bg-white/75 rounded-lg backdrop-blur-md py-32'>
          <ul className='flex items-center flex-col justify-center gap-3 text-white'>
            {navitems &&
              navitems.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          <LangSwitcher lng={lng} />
        </div>
      ) : null}
    </header>
  );
};
export default Navbar;
