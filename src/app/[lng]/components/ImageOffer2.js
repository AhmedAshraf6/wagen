'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import img3 from '../../../../public/menu/img3.svg';
import img2 from '../../../../public/menu/img2.svg';
// for animation on scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTranslation } from '@/app/i18n/client';

export default function ImageOffer2({ lng, mainImg }) {
  const { t } = useTranslation(lng, 'menu');
  const [m1, m2, m3, m4, m5] = t('meals', { returnObjects: true });
  useEffect(() => {
    AOS.init({
      mirror: true,
      once: false,
    });
  }, []);

  return (
    <div className='w-full h-[600px] flex justify-center items-center image-offer2 '>
      <div className='grid grid-cols-1 sm:grid-cols-2 items-start gap-10'>
        <div
          className={`flex  flex-col w-[200px] bg-[#fff] justify-between items-center rounded-3xl 
       }`}
          data-aos='fade-down-right'
          data-aos-delay='50'
          data-aos-duration='1000'
        >
          <div className='flex items-center  relative '>
            <div className='bg-[#101A24] text-white text-md rounded-full px-1 py-2 absolute -right-[30px] '>
              Rs{m4.salary}
            </div>
            <Image
              width={200}
              height={200}
              className='object-contain w-[140px]'
              src={img3}
              alt='asd'
            />
          </div>
          <div className='text-center '>
            <h3 className='text-black font-bold text-lg'>{m4.title}</h3>
            <p className='text-black text-md mt-2'>{m4.disc}</p>
          </div>
        </div>
        <div
          className={`flex  flex-col w-[200px] bg-[#fff] justify-between items-center rounded-3xl  row-span-2 
       }`}
          data-aos='fade-down-left'
          data-aos-delay='100'
          data-aos-duration='1000'
        >
          <div className='flex items-center  relative '>
            <div className='bg-[#101A24] text-white text-md rounded-full px-1 py-2 absolute -right-[30px] '>
              Rs{m5.salary}
            </div>
            <Image
              width={200}
              height={200}
              className='object-contain w-[140px]'
              src={img2}
              alt='asd'
            />
          </div>
          <div className='text-center '>
            <h3 className='text-black font-bold text-lg'>{m5.title}</h3>
            <p className='text-black text-md mt-2'>{m5.disc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
