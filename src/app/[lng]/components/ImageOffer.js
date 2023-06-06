'use client';
import React from 'react';
import Image from 'next/image';

// for animation on scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function ImageOffer({ img, effect }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='w-[50%]' data-aos={effect} data-aos-duration='3000'>
      <Image width={500} height={500} src={img} alt='image 1' />
    </div>
  );
}
