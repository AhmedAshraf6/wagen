import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { languages } from '../../i18n/settings';
import { useTranslation } from '../../i18n';

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
              <Link href={`/${l}`}>{t('languageSwitcher')}</Link>
            </span>
          );
        })}
    </div>
  );
};
