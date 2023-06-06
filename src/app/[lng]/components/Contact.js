import { useTranslation } from '@/app/i18n';
import Image from 'next/image';
import img1 from '../../../../public/clients/img1.svg';
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
import img111 from '../../../../public/stats/background/img11.svg';
import img112 from '../../../../public/stats/background/img12.svg';
const Clients = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'contact');
  const options = t('type.options', { returnObjects: true });

  return (
    <div className=' bg-[#F3F4F4] pt-8 pb-14 sm:py-24' id='contact'>
      <div className='relative w-full h-full z-0 hidden lg:block'>
        <Image
          width={200}
          height={200}
          className='object-contain  h-[80px] absolute right-7 top-0'
          src={img14}
          alt='asd'
        />
        <Image
          width={200}
          height={200}
          className='object-contain  w-[120px] h-[80px] absolute right-[45%] -top-20'
          src={img12}
          alt='asd'
        />
        <Image
          width={200}
          height={200}
          className='object-contain  h-[80px] absolute right-[83%] -top-10'
          src={img112}
          alt='asd'
        />

        <Image
          width={200}
          height={200}
          className='object-contain h-[80px]  absolute right-0 top-96'
          src={img112}
          alt='asd'
        />
        <Image
          width={200}
          height={200}
          className='object-contain  w-[120px] h-[80px] absolute right-[30%] top-80'
          src={img12}
          alt='asd'
        />
        <Image
          width={200}
          height={200}
          className='object-contain  w-[120px] h-[150px] absolute right-[38%] top-72'
          src={img18}
          alt='asd'
        />
        <Image
          width={200}
          height={200}
          className='object-contain absolute right-[80%] top-72'
          src={img11}
          alt='asd'
        />
      </div>
      <div className='w-full px-5 md:px-15 lg:px-20'>
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
