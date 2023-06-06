import { useTranslation } from '@/app/i18n';
import Image from 'next/image';
import right2 from '../../../../public/right2.svg';

const Packages = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'packages');
  const benfits1 = t('package1.benifits', { returnObjects: true });
  const benfits2 = t('package2.benifits', { returnObjects: true });

  return (
    <div className='w-full px-5 md:px-15 lg:px-20 py-8 sm:py-24' id='packages'>
      <div className='text-center mb-4 md:mb-12'>
        <h3 className='text-black font-bold text-xl mb-5 sm:mb-10'>
          {t('title')}
        </h3>

        <div className='flex flex-col sm:flex-row justify-center sm:justify-between gap-4'>
          {/* Package 1 */}
          <div className='flex-1 text-[#F7F7F7]'>
            <div
              className='px-20 py-10 flex  justify-center items-center bg-primary text-xl font-bold text-white'
              style={{ borderRadius: '100px / 120px 10px' }}
            >
              {t('package1.title')}
            </div>
            <div className='relative my-3 sm:my-6 text-black'>
              <span className='text-xl  absolute -top-[8px] start-[41%]'>
                RS
              </span>
              <h2 className='font-bold text-2xl '>{t('package1.salary')}</h2>
            </div>
            <div className='flex flex-col gap-y-3'>
              {benfits1.map((benfit, index) => (
                <div className='flex gap-3' key={index}>
                  <Image
                    width={100}
                    height={100}
                    className='object-contain w-[20px] h-[20px]'
                    src={right2}
                    alt='image 1'
                  />
                  <h3 className='w-[90%] text-lg text-start text-[#666666] 	border-b-[1px] border-dotted border-[#666666] pb-3'>
                    {benfit}
                  </h3>
                </div>
              ))}
            </div>
            <div className='flex justify-center mt-5 sm:mt-24'>
              <button
                className='text-lg text-white bg-primary py-3 px-10 rounded-lg'
                style={{ borderRadius: '30px / 100px 10px' }}
              >
                {t('sub')}
              </button>
            </div>
          </div>
          {/* Package 2 */}
          <div className='flex-1 text-[#F7F7F7]'>
            <div
              className='px-20 py-10 flex  justify-center items-center bg-secondary text-xl font-bold text-white'
              style={{ borderRadius: '100px / 120px 10px' }}
            >
              {t('package2.title')}
            </div>
            <div className='relative my-3 sm:my-6 text-black'>
              <span className='text-xl  absolute -top-[8px] start-[41%]'>
                RS
              </span>
              <h2 className='font-bold text-2xl '>{t('package2.salary')}</h2>
            </div>
            <div className='flex flex-col gap-y-3'>
              {benfits2.map((benfit, index) => (
                <div className='flex gap-3' key={index}>
                  <Image
                    width={100}
                    height={100}
                    className='object-contain w-[20px] h-[20px]'
                    src={right2}
                    alt='image 1'
                  />
                  <h3 className='w-[90%] text-lg text-start text-[#666666] 	border-b-[1px] border-dotted border-[#666666] pb-3'>
                    {benfit}
                  </h3>
                </div>
              ))}
            </div>
            <div className='flex justify-center mt-5 sm:mt-10'>
              <button
                className='text-lg text-white bg-secondary py-3 px-10 rounded-lg'
                style={{ borderRadius: '30px / 100px 10px' }}
              >
                {t('sub')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
