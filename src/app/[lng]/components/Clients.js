import { useTranslation } from '@/app/i18n';
import Image from 'next/image';
import img1 from '../../../../public/clients/img1.svg';
import img2 from '../../../../public/clients/img2.svg';
import img3 from '../../../../public/clients/img3.svg';

const Clients = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'clients');
  const [s1, s2, s3] = t('clients', { returnObjects: true });

  return (
    <div className=' bg-[#F3F4F4] py-8 sm:py-24'>
      <div className='text-center mb-4 md:mb-12'>
        <h3 className='text-black font-bold text-xl'>{t('title')}</h3>
        <p className='text-black font-semibold text-lg mt-2'>
          {t('paragraph')}
        </p>
      </div>
      <div className='w-full px-5 md:px-15 lg:px-32  flex justify-center lg:justify-between gap-6 items-center flex-wrap lg:flex-nowrap '>
        <div className='px-20 flex flex-col justify-center items-center py-6 sm:py-10 gap-y-4'>
          <Image
            width={200}
            height={200}
            className='object-contain w-[150px] h-[150px]'
            src={img3}
            alt='asd'
          />
          <h1 className='text-[#5F6061] text-lg font-semibold '>{s1}</h1>
        </div>
        <div className=' px-20 flex flex-col justify-center items-center py-6 sm:py-10 gap-y-4'>
          <Image
            width={200}
            height={200}
            className='object-contain w-[150px] h-[150px]'
            src={img2}
            alt='asd'
          />
          <h1 className='text-[#5F6061] text-lg  font-semibold'>{s2}</h1>
        </div>
        <div className=' px-20 flex flex-col justify-center items-center py-6 sm:py-10 gap-y-4'>
          <Image
            width={200}
            height={200}
            className='object-contain w-[150px] h-[150px]'
            src={img1}
            alt='asd'
          />
          <h1 className='text-[#5F6061] text-lg font-semibold '>{s3}</h1>
        </div>
      </div>
    </div>
  );
};

export default Clients;
