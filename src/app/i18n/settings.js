export const fallbackLng = 'ar';
export const languages = [fallbackLng, 'en'];
export const defaultNS = 'hero';

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
