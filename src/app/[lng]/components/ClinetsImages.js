'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
import img1 from '../../../../public/clients/img1.webp';
import img2 from '../../../../public/clients/img2.webp';
import img3 from '../../../../public/clients/img3.webp';
import img4 from '../../../../public/clients/img4.webp';
import img5 from '../../../../public/clients/img5.webp';
import img6 from '../../../../public/clients/img6.webp';
import img7 from '../../../../public/clients/img7.webp';

import Image from 'next/image';

export default function ClinetsImages() {
  return (
    <div className='select-none'>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: {
            // width: 576,
            slidesPerView: 1,
          },
          768: {
            // width: 768,
            slidesPerView: 2,
          },
          992: {
            // width: 768,
            slidesPerView: 3,
          },
        }}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='flex justify-center flex-col items-center'>
            <Image
              width={200}
              height={200}
              className='object-contain w-[150px] h-[150px]'
              src={img1}
              alt='asd'
            />
            <h3 className='text-lg text-black font-semibold'>مطعم لوبان</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center flex-col items-center'>
            <Image
              width={200}
              height={200}
              className='object-contain w-[150px] h-[150px]'
              src={img2}
              alt='asd'
            />
            <h3 className='text-lg text-black font-semibold'>مقهى نبريج</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center flex-col items-center'>
            <Image
              width={200}
              height={200}
              className='object-contain w-[150px] h-[150px]'
              src={img3}
              alt='
              asd'
            />
            <h3 className='text-lg text-black font-semibold'>كافي TULUA</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center'>
            <Image
              width={200}
              height={200}
              className='object-contain w-[150px] h-[150px]'
              src={img4}
              alt='asd'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center'>
            <Image
              width={200}
              height={200}
              className='object-contain w-[150px] h-[150px]'
              src={img5}
              alt='asd'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center'>
            <Image
              width={200}
              height={200}
              className='object-contain w-[150px] h-[150px]'
              src={img6}
              alt='asd'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center'>
            <Image
              width={200}
              height={200}
              className='object-contain w-[150px] h-[150px]'
              src={img7}
              alt='asd'
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
