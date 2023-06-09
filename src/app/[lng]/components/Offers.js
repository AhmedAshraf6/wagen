import React from 'react';
import { useTranslation } from '@/app/i18n';
import barcode from '../../../../public/img2.webp';
import imgmenu from '../../../../public/img3.webp';
import ImageOffer from './ImageOffer';
import ImageOffer2 from './ImageOffer2';
const Offers = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'offers');

  return (
    <div className='w-full px-5 md:px-15 lg:px-20 py-8 lg:py-24'>
      <div className=' flex  flex-col lg:flex-row items-center justify-center lg:justify-between gap-x-44 gap-y-8'>
        <div className='flex flex-col  gap-y-5 w-full '>
          <h3 className='text-primary text-lg lg:text-xl font-bold'>
            {t('title1')}
          </h3>
          <p className='text-black leading-6 lg:leading-10 text-lg'>
            {t('paragraph')}
          </p>
        </div>
        <ImageOffer mainImg={imgmenu} lng={lng} />
      </div>
      <div className='flex  flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-x-44 gap-y-8 mt-10'>
        <ImageOffer2 mainImg={barcode} lng={lng} />
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
