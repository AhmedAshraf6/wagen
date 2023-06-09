'use client';
import Image from 'next/image';
import img1 from '../../../../public/stats/img1.svg';
import img2 from '../../../../public/stats/img2.svg';
import img3 from '../../../../public/stats/img3.svg';
// Back
import img11 from '../../../../public/stats/background/img1.svg';
import img12 from '../../../../public/stats/background/img2.svg';
import img13 from '../../../../public/stats/background/img3.svg';
import img14 from '../../../../public/stats/background/img4.svg';
import img15 from '../../../../public/stats/background/img5.svg';
import img16 from '../../../../public/stats/background/img6.svg';
import img17 from '../../../../public/stats/background/img7.svg';
import img18 from '../../../../public/stats/background/img8.svg';
import img19 from '../../../../public/stats/background/img9.svg';
import img110 from '../../../../public/stats/background/img10.svg';
import img112 from '../../../../public/stats/background/img12.svg';
// for animation on scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTranslation } from '@/app/i18n/client';
const Stats = ({ lng }) => {
  const { t } = useTranslation(lng, 'stats');
  const [s1, s2, s3] = t('stats', { returnObjects: true });
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=' bg-[#f4f4f4]'>
      <div className='relative w-full h-full z-0 hidden lg:block'>
        <Image
          width={200}
          height={200}
          className='object-contain  h-[80px] absolute right-7 top-3'
          src={img14}
          alt='asd'
        />
        <Image
          width={200}
          height={200}
          className='object-contain  h-[80px] absolute right-[30%] top-10'
          src={img11}
          alt='asd'
        />
        <Image
          width={200}
          height={200}
          className='object-contain  h-[80px] absolute right-[47%] top-10'
          src={img19}
          alt='asd'
        />
        <Image
          width={200}
          height={200}
          className='object-contain  h-[80px] absolute right-[60%] top-3'
          src={img16}
          alt='asd'
        />
        <Image
          width={200}
          height={200}
          className='object-contain  h-[80px] absolute right-[75%] top-20 z-0'
          src={img17}
          alt='asd'
        />
        <Image
          width={200}
          height={200}
          className='object-contain  h-[80px] absolute -right-[5%] top-52'
          src={img19}
          alt='asd'
        />

        <Image
          width={200}
          height={200}
          className='object-contain w-[100px] h-[80px] absolute right-[5%] top-96'
          src={img12}
          alt='asd'
        />
        <Image
          width={200}
          height={200}
          className='object-contain h-[130px] absolute right-[10%] top-96'
          src={img15}
          alt='asd'
        />
        <Image
          width={200}
          height={200}
          className='object-contain w-[80px] h-[80px] absolute right-[40%] top-[370px]'
          src={img112}
          alt='asd'
        />
        <Image
          width={200}
          height={200}
          className='object-contain absolute right-[50%] top-[350px]'
          src={img18}
          alt='asd'
        />
        <Image
          width={200}
          height={200}
          className='object-contain h-[80px]  absolute right-[75%] top-96'
          src={img110}
          alt='asd'
        />
        <Image
          width={200}
          height={200}
          className='object-contain h-[80px]  absolute right-[85%] top-[360px]'
          src={img13}
          alt='asd'
        />
      </div>

      <div className='w-full px-5 md:px-15 lg:px-20 py-8 sm:py-40 flex justify-center lg:justify-between gap-6 items-center flex-wrap lg:flex-nowrap z-50'>
        <div
          className='bg-white px-20 flex flex-col justify-center items-center py-10 gap-y-4 '
          style={{ borderRadius: '25% 10%' }}
          data-aos='fade-left'
          data-aos-offset='300'
          data-aos-easing='ease-in-sine'
        >
          <Image
            width={200}
            height={200}
            className='object-contain w-[100px] h-[80px]'
            src={img3}
            alt='asd'
          />
          <h1 className='text-[#5F6061] text-lg font-semibold '>{s1}</h1>
        </div>
        <div
          className='bg-white px-20 flex flex-col justify-center items-center py-10 gap-y-4'
          style={{ borderRadius: '25% 10%' }}
          data-aos='zoom-in'
          data-aos-offset='400'
          data-aos-easing='ease-in-sine'
        >
          <Image
            width={200}
            height={200}
            className='object-contain w-[100px] h-[80px]'
            src={img2}
            alt='asd'
          />
          <h1 className='text-[#5F6061] text-lg  font-semibold'>{s2}</h1>
        </div>
        <div
          className='bg-white px-20 flex flex-col justify-center items-center py-10 gap-y-4'
          style={{ borderRadius: '25% 10%' }}
          data-aos='fade-right'
          data-aos-offset='300'
          data-aos-easing='ease-in-sine'
        >
          <Image
            width={200}
            height={200}
            className='object-contain w-[100px] h-[80px]'
            src={img1}
            alt='asd'
          />
          <h1 className='text-[#5F6061] text-lg font-semibold '>{s3}</h1>
        </div>
      </div>
    </div>
  );
};

export default Stats;
