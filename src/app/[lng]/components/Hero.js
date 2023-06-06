import { useTranslation } from '@/app/i18n';
import React from 'react';
import img1 from '../../../../public/img1.webp';
import right from '../../../../public/right.svg';
import Image from 'next/image';

export default async function Hero({ lng }) {
  const { t } = await useTranslation(lng, 'hero');
  const benfits = t('props', { returnObjects: true });

  return (
    <section
      className='w-full min-h-[80vh] px-5 md:px-15  py-10 lg:px-20 flex justify-center items-center font-medium  dark:text-light '
      id='home'
    >
      <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5'>
        <div className='flex flex-col gap-y-4'>
          <h3 className='text-black font-bold text-lg lg:text-xl'>
            {t('title1')}
          </h3>
          <h4 className='text-black font-semibold text-lg lg:text-xl'>
            {t('title2')}
          </h4>
          <div>
            {benfits.map((benfit, index) => (
              <div className='flex py-2 gap-2' key={index}>
                <Image
                  width={100}
                  height={100}
                  className='object-contain w-[20px] h-[20px]'
                  src={right}
                  alt='image 1'
                />
                <h3 className='text-black text-lg'> {benfit}</h3>
              </div>
            ))}
          </div>
          <div className='flex justify-start'>
            <a
              className='text-lg text-white bg-primary py-2 px-5 rounded-lg'
              href='#contact'
            >
              {t('button')}
            </a>
          </div>
        </div>
        <Image
          width={500}
          height={500}
          className='object-contain '
          src={img1}
          alt='image 1'
        />
      </div>
    </section>
  );
}
