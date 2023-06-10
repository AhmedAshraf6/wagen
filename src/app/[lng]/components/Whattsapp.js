'use client';
import React from 'react';
import whatts from '../../../../public/whatts.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Whattsapp() {
  return (
    <Link
      className='relative'
      href='//api.whatsapp.com/send?phone=966506963328'
      target='_blank'
    >
      <Image
        width={200}
        height={200}
        className='object-contain w-[100px] h-[50px] cursor-pointer fixed bottom-8 right-0 z-20'
        src={whatts}
        alt='whattsapp-icon'
      />
    </Link>
  );
}
