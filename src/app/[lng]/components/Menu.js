'use client';
import React from 'react';

// for animation on scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import Image from 'next/image';
import img1 from '../../../../public/menu/img1.svg';
import img2 from '../../../../public/menu/img2.svg';
import img3 from '../../../../public/menu/img3.svg';
import img4 from '../../../../public/menu/img4.svg';
import img5 from '../../../../public/menu/img5.svg';
import { useTranslation } from '@/app/i18n/client';
const Menu = ({ lng }) => {
  const { t } = useTranslation(lng, 'menu');
  const [m1, m2, m3, m4, m5] = t('meals', { returnObjects: true });
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='bg-[#F3F4F4] w-full px-5 md:px-15 lg:px-20  pt-32 pb-20 my-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-24'>
        {/* first Meal */}
        <div
          className='flex  flex-col pt-4 pb-20 justify-between items-center rounded-3xl border-[#fff] border-2 px-4'
          data-aos='fade-up'
          data-aos-delay='50'
          data-aos-duration='5000'
        >
          <div className='flex items-center -mt-32 relative '>
            <div className='bg-[#101A24] text-white text-lg rounded-full px-3 py-4 absolute -right-[30px] '>
              Rs{m1.salary}
            </div>
            <Image
              width={200}
              height={200}
              className='object-contain'
              src={img1}
              alt='asd'
            />
          </div>
          <div className='text-center'>
            <h3 className='text-black font-bold text-xl'>{m1.title}</h3>
            <p className='text-black text-lg mt-2'>{m1.disc}</p>
          </div>
        </div>

        <div
          className='flex  flex-col pt-4 pb-20 justify-between items-center rounded-3xl border-[#fff] border-2 px-4'
          data-aos='fade-up'
          data-aos-delay='100'
          data-aos-duration='5000'
        >
          <div className='flex items-center -mt-32 relative '>
            <div className='bg-[#101A24] text-white text-lg rounded-full px-3 py-4 absolute -right-[30px] '>
              Rs{m2.salary}
            </div>
            <Image
              width={200}
              height={200}
              className='object-contain'
              src={img5}
              alt='asd'
            />
          </div>
          <div className='text-center'>
            <h3 className='text-black font-bold text-xl'>{m2.title}</h3>
            <p className='text-black text-lg mt-2'>{m2.disc}</p>
          </div>
        </div>
        <div
          className='flex  flex-col pt-4 pb-20 justify-between items-center rounded-3xl border-[#fff] border-2 px-4'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='5000'
        >
          <div className='flex items-center -mt-32 relative '>
            <div className='bg-[#101A24] text-white text-lg rounded-full px-3 py-4 absolute -right-[30px] '>
              Rs{m3.salary}
            </div>
            <Image
              width={200}
              height={200}
              className='object-contain'
              src={img4}
              alt='asd'
            />
          </div>
          <div className='text-center'>
            <h3 className='text-black font-bold text-xl'>{m3.title}</h3>
            <p className='text-black text-lg mt-2'>{m3.disc}</p>
          </div>
        </div>
        <div
          className='flex  flex-col pt-4 pb-20 justify-between items-center rounded-3xl border-[#fff] border-2 px-4'
          data-aos='fade-up'
          data-aos-delay='300'
          data-aos-duration='5000'
        >
          <div className='flex items-center -mt-32 relative '>
            <div className='bg-[#101A24] text-white text-lg rounded-full px-3 py-4 absolute -right-[30px] '>
              Rs{m4.salary}
            </div>
            <Image
              width={200}
              height={200}
              className='object-contain'
              src={img3}
              alt='asd'
            />
          </div>
          <div className='text-center'>
            <h3 className='text-black font-bold text-xl'>{m4.title}</h3>
            <p className='text-black text-lg mt-2'>{m4.disc}</p>
          </div>
        </div>
        <div
          className='flex  flex-col pt-4 pb-20 justify-between items-center rounded-3xl border-[#fff] border-2 px-4'
          data-aos='fade-up'
          data-aos-delay='400'
          data-aos-duration='5000'
        >
          <div className='flex items-center -mt-32 relative '>
            <div className='bg-[#101A24] text-white text-lg rounded-full px-3 py-4 absolute -right-[30px] '>
              Rs{m5.salary}
            </div>
            <Image
              width={200}
              height={200}
              className='object-contain'
              src={img2}
              alt='asd'
            />
          </div>
          <div className='text-center'>
            <h3 className='text-black font-bold text-xl'>{m5.title}</h3>
            <p className='text-black text-lg mt-2'>{m5.disc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
