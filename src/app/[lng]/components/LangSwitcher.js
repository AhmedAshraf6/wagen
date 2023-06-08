import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { languages } from '../../i18n/settings';
import { useTranslation } from '../../i18n';
import s from '../../../../public/s.png';
import b from '../../../../public/b.png';
import Image from 'next/image';

export const LangSwitcher = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'lang-switcher');
  return (
    <div>
      <Trans t={t} className='text-black'></Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && ' or '}
              <Link
                href={`/${l}`}
                className='flex items-center gap-1 hover:text-primary transition-all duration-200'
              >
                {l == 'en' ? (
                  <Image
                    width={100}
                    height={100}
                    className='object-contain w-[20px] h-[20px]'
                    src={b}
                    alt='image 1'
                  />
                ) : (
                  <Image
                    width={100}
                    height={100}
                    className='object-contain w-[20px] h-[20px]'
                    src={s}
                    alt='image 1'
                  />
                )}
                {t('languageSwitcher')}
              </Link>
            </span>
          );
        })}
    </div>
  );
};
