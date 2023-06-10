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
      className='w-full min-h-[80vh] px-5 md:px-14  py-10 lg:px-20 flex   items-center font-medium  dark:text-light '
      id='home'
    >
      <div className='w-full flex flex-col lg:flex-row justify-start lg:justify-between items-start gap-5'>
        <div className='flex flex-col gap-y-4'>
          <h1 className='text-black font-bold text-lg lg:text-xl'>
            {t('title1')}
          </h1>
          <h2 className='text-black font-semibold text-lg lg:text-xl'>
            {t('title2')}
          </h2>
          <div>
            {benfits.map((benfit, index) => (
              <div className='flex py-2 gap-2' key={index}>
                <Image
                  width={100}
                  height={100}
                  className='object-contain w-[20px] h-[20px]'
                  src={right}
                  alt='right'
                />
                <h3 className='text-black text-lg'> {benfit}</h3>
              </div>
            ))}
          </div>
          <div className='flex justify-start'>
            <a
              className='text-lg text-white bg-primary py-2 px-5 rounded-lg hover:bg-transparent border-primary border-2 hover:text-secondary duration-200 transition-all'
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
          alt='menu'
        />
      </div>
    </section>
  );
}
