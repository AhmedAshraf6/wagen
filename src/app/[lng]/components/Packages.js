import { useTranslation } from '@/app/i18n';
import Image from 'next/image';
import right2 from '../../../../public/right2.svg';

const Packages = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'packages');

  return (
    <div className='py-8 sm:py-24'>
      <div className='text-center mb-4 md:mb-12'>
        <h3 className='text-black font-bold text-xl'>{t('title')}</h3>
      </div>
    </div>
  );
};

export default Packages;
