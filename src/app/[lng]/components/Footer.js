import React from 'react';
import { useTranslation } from '@/app/i18n';
import Image from 'next/image';
import img1 from '../../../../public/social/img1.svg';
import img2 from '../../../../public/social/img2.svg';
import img3 from '../../../../public/social/img3.svg';
import img4 from '../../../../public/social/img4.svg';
import copy from '../../../../public/copy.svg';
export default async function Footer({ lng }) {
  const { t } = await useTranslation(lng, 'footer');
  return (
    <footer>
      <div className='w-full  py-8 sm:py-24  px-5 md:px-15 lg:px-32 flex flex-col sm:flex-row justify-between items-start sm:items-center'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-lg sm:text-xl font-bold  text-black'>
            {t('contactInfo.title')}
          </h3>
          <h2 className='text-md sm:text-lg  text-black'>
            {t('contactInfo.address')}
          </h2>
          <h2 className='text-md sm:text-lg underline text-black'>
            {t('contactInfo.email')}
          </h2>
        </div>
        <div className='flex flex-col gap-2 mt-3 sm:mt-0'>
          <h3 className='text-lg sm:text-xl font-bold text-black'>
            {t('contactInfo.contactUs')}
          </h3>
          <div className='flex flex-wrap gap-3'>
            <a
              className='border-2 border-[gray-600] p-2 flex justify-center items-center rounded-full '
              href='#'
            >
              <Image
                width={200}
                height={200}
                className='object-contain w-[20px] h-[20px] '
                src={img1}
                alt='asd'
              />
            </a>
            <a
              className='border-2 border-[gray-600] p-2 flex justify-center items-center rounded-full '
              href='https://twitter.com/wajenSA'
              target='_blank'
            >
              <Image
                width={200}
                height={200}
                className='object-contain w-[20px] h-[20px]'
                src={img2}
                alt='asd'
              />
            </a>
            <a
              className='border-2 border-[gray-600] p-2 flex justify-center items-center rounded-full '
              href='#'
            >
              <Image
                width={200}
                height={200}
                className='object-contain w-[20px] h-[20px]'
                src={img3}
                alt='asd'
              />
            </a>
            <a
              className='border-2 border-[gray-600] p-2 flex justify-center items-center rounded-full '
              href='#'
            >
              <Image
                width={200}
                height={200}
                className='object-contain w-[20px] h-[20px]'
                src={img4}
                alt='asd'
              />
            </a>
          </div>
        </div>
      </div>
      <div className='bg-[#272727] flex items-center justify-center gap-1 text-white py-3 px-3'>
        <span>copyright2023.Wagen.SA</span>
        <Image
          width={200}
          height={200}
          className='object-contain w-[20px] h-[20px] '
          src={copy}
          alt='asd'
        />
      </div>
    </footer>
  );
}
