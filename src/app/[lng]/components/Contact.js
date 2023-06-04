import { useTranslation } from '@/app/i18n';
import Image from 'next/image';
import img1 from '../../../../public/clients/img1.svg';

const Clients = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'contact');
  const options = t('type.options', { returnObjects: true });

  return (
    <div className=' bg-[#F3F4F4] pt-8 pb-14 sm:py-24' id='contact'>
      <div className='w-full px-5 md:px-15 lg:px-32'>
        <div className='text-center mb-4 md:mb-12'>
          <h3 className='text-black font-bold text-xl'>{t('title')}</h3>
        </div>
        <form className='grid grid-cols-1 sm:grid-cols-2 gap-5 '>
          {/* name */}
          <div>
            <label
              htmlFor={t('name.label')}
              className='block text-lg font-medium leading-6 text-gray-900 '
            >
              {t('name.label')}
            </label>
            <div className='mt-2'>
              <input
                type='text'
                placeholder={t('name.placeholder')}
                className='block w-full rounded-lg  py-3 text-black shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 px-2 border border-gray-400 '
                required
              />
            </div>
          </div>
          {/* email */}
          <div>
            <label
              htmlFor={t('name.label')}
              className='block text-lg font-medium leading-6 text-gray-900 '
            >
              {t('email.label')}
            </label>
            <div className='mt-2'>
              <input
                type='email'
                placeholder={t('email.placeholder')}
                className='block w-full rounded-lg  py-3 text-black shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 px-2 border border-gray-400 '
                required
              />
            </div>
          </div>
          {/* phone */}
          <div>
            <label
              htmlFor={t('name.label')}
              className='block text-lg font-medium leading-6 text-gray-900 '
            >
              {t('phone.label')}
            </label>
            <div className='mt-2'>
              <input
                type='text'
                placeholder={t('phone.placeholder')}
                className='block w-full rounded-lg  py-3 text-black shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 px-2 border border-gray-400 '
                required
              />
            </div>
          </div>
          {/* slect */}
          <div className='mt-2'>
            <label
              htmlFor={t('type.label')}
              className='block text-lg font-medium leading-6 text-gray-900'
            >
              {t('type.label')}
            </label>
            <select className='block w-full rounded-lg  py-3  text-black shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 px-2 border border-gray-400 cursor-pointer'>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </form>
        <div className='flex justify-center mt-5 sm:mt-20 '>
          <button
            className='text-lg text-white  py-3 px-10 rounded-lg'
            style={{
              borderRadius: '30px / 100px 10px',
              backgroundColor: 'rgba(0, 0, 0, 0.61)',
            }}
          >
            {t('button')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clients;
