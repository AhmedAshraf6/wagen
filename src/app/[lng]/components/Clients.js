import { useTranslation } from '@/app/i18n';
import ClinetsImages from './ClinetsImages';

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

      <ClinetsImages />
    </div>
  );
};

export default Clients;
