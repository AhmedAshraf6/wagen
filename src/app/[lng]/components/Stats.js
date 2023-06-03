import { useTranslation } from '@/app/i18n';
import Image from 'next/image';
import img1 from '../../../../public/stats/img1.svg';
import img2 from '../../../../public/stats/img2.svg';
import img3 from '../../../../public/stats/img3.svg';

const Stats = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'stats');
  const [s1, s2, s3] = t('stats', { returnObjects: true });

  return (
    <div className=' bg-[#f4f4f4]'>
      <div className='w-full px-5 md:px-15 lg:px-32 py-8 sm:py-24 flex justify-center lg:justify-between gap-6 items-center flex-wrap lg:flex-nowrap'>
        <div
          className='bg-white px-20 flex flex-col justify-center items-center py-10 gap-y-4'
          style={{ borderRadius: '25% 10%' }}
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
