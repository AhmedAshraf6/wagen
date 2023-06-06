'use client';
import React, { useState, useEffect } from 'react';
import arrowup from '../../../../public/arrowUp.png';
import Image from 'next/image';

export default function ScrollToTopCom() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='relative'>
      {showTopBtn && (
        <Image
          width={200}
          height={200}
          className='object-contain w-[100px] h-[50px] cursor-pointer fixed bottom-8 left-0 z-20'
          src={arrowup}
          alt='asd'
          onClick={goToTop}
        />
      )}
    </div>
  );
}
