import React from 'react';
import { useTranslation } from '@/app/i18n';
import Image from 'next/image';
import img2 from '../../../../public/img2.png';
import img3 from '../../../../public/img3.png';
import ImageOffer from './ImageOffer';
const Offers = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'offers');

  return (
    <div className='w-full px-5 md:px-15 lg:px-20 py-8 lg:py-24'>
      <div className='flex  flex-col md:flex-row items-center justify-between gap-x-44 gap-y-8'>
        <div className='flex flex-col gap-y-5 w-full '>
          <h3 className='text-primary text-lg lg:text-xl font-bold'>
            {t('title1')}
          </h3>
          <p className='text-black leading-6 lg:leading-10 text-lg'>
            {t('paragraph')}
          </p>
        </div>
        {/* <div className='w-[50%]'>
          <Image width={500} height={500} src={img3} alt='image 1' />
        </div> */}
        <ImageOffer img={img3} effect='flip-left' />
      </div>
      <div className='flex  flex-col-reverse md:flex-row items-center justify-between gap-x-44 gap-y-8 mt-10'>
        <ImageOffer img={img2} effect='flip-right' />

        <div className='flex flex-col gap-y-5 w-full '>
          <h3 className='text-primary text-lg lg:text-xl font-bold'>
            {t('title2')}
          </h3>
          <p className='text-black leading-6 lg:leading-10 text-lg'>
            {t('paragraph2')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
