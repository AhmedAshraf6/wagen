'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import img1 from '../../../../public/menu/img1.svg';

import img4 from '../../../../public/menu/img4.svg';
import img5 from '../../../../public/menu/img5.svg';
// for animation on scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTranslation } from '@/app/i18n/client';

export default function ImageOffer({ lng, mainImg }) {
  const { t } = useTranslation(lng, 'menu');
  const [m1, m2, m3, m4, m5] = t('meals', { returnObjects: true });
  useEffect(() => {
    AOS.init({
      mirror: true,
      once: false,
    });
  }, []);

  return (
    <div className='w-full h-full flex justify-center items-center image-offer '>
      <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-10'>
        <div
          className={`flex  flex-col w-[200px] bg-[#fff] justify-between items-center rounded-3xl
       }`}
          data-aos='fade-left'
          data-aos-delay='50'
          data-aos-duration='1000'
        >
          <div className='flex items-center  relative '>
            <div className='bg-[#101A24] text-white text-md rounded-full px-1 py-2 absolute -right-[30px] '>
              Rs{m1.salary}
            </div>
            <Image
              width={200}
              height={200}
              className='object-contain w-[140px]'
              src={img1}
              alt='asd'
            />
          </div>
          <div className='text-center '>
            <h3 className='text-black font-bold text-lg'>{m1.title}</h3>
            <p className='text-black text-md mt-2'>{m1.disc}</p>
          </div>
        </div>
        <div
          className={`flex  flex-col w-[200px] bg-[#fff] justify-between items-center rounded-3xl  row-span-2 
       }`}
          data-aos='fade-right'
          data-aos-delay='100'
          data-aos-duration='1000'
        >
          <div className='flex items-center  relative '>
            <div className='bg-[#101A24] text-white text-md rounded-full px-1 py-2 absolute -right-[30px] '>
              Rs{m2.salary}
            </div>
            <Image
              width={200}
              height={200}
              className='object-contain w-[140px]'
              src={img5}
              alt='asd'
            />
          </div>
          <div className='text-center '>
            <h3 className='text-black font-bold text-lg'>{m2.title}</h3>
            <p className='text-black text-md mt-2'>{m2.disc}</p>
          </div>
        </div>
        <div
          className={`flex  flex-col w-[200px] bg-[#fff] justify-between items-center rounded-3xl
       }`}
          data-aos='fade-left'
          data-aos-delay='200'
          data-aos-duration='1500'
        >
          <div className='flex items-center  relative '>
            <div className='bg-[#101A24] text-white text-md rounded-full px-1 py-2 absolute -right-[30px] '>
              Rs{m3.salary}
            </div>
            <Image
              width={200}
              height={200}
              className='object-contain w-[140px]'
              src={img4}
              alt='asd'
            />
          </div>
          <div className='text-center '>
            <h3 className='text-black font-bold text-lg'>{m3.title}</h3>
            <p className='text-black text-md mt-2'>{m3.disc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
