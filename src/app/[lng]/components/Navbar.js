import React from 'react';
import logo from '../../../../public/logo-edit2.webp';

import Image from 'next/image';
import { LangSwitcher } from './LangSwitcher';
import { useTranslation } from '@/app/i18n';
import ButtonNav from './ButtonNav';
import Link from 'next/link';

const Navbar = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'hero');
  const navitems = t('navItems', { returnObjects: true });

  return (
    <header className='w-full px-5 md:px-14 lg:px-20 py-4 sm:py-6 font-medium  dark:text-light'>
      {/* small screen */}
      <div className='w-full flex lg:hidden items-center justify-between '>
        <Link href={`/${lng}`}>
          <Image
            src={logo}
            width={150}
            height={150}
            alt='logo image'
            className='cursor-pointer w-[120px]'
          />
        </Link>
        <ButtonNav navitems={navitems} lng={lng} />
      </div>
      <div className='w-full hidden lg:flex items-center justify-between'>
        <Link href={`/${lng}`}>
          <Image src={logo} alt='logo image' className='cursor-pointer ' />
        </Link>
        <ul className='flex gap-6'>
          {navitems &&
            navitems.map((item, index) => (
              <a
                key={index}
                href={`${item.link}`}
                className='text-[18px] hover:text-primary transition-all duration-200 '
              >
                {item.name}
              </a>
            ))}
        </ul>
        <LangSwitcher lng={lng} />
      </div>
      {/* menu */}
      {/* {a ? (
        <div className='min-w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-black/90 dark:bg-white/75 rounded-lg backdrop-blur-md py-32'>
          <ul className='flex items-center flex-col justify-center gap-3 text-white'>
            {navitems &&
              navitems.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          <LangSwitcher lng={lng} />
        </div>
      ) : null} */}
    </header>
  );
};
export default Navbar;
