/**
 * Default fallback language.
 */
export const fallbackLng = 'en'

/**
 * Array of supported languages, including fallback language.
 */
export const languages = [fallbackLng, 'nl']

/**
 * Default namespace for translations.
 */
export const defaultNS = 'translation'

/**
 * Name of the cookie used for storing language preference.
 */
export const cookieName = 'i18next'

/**
 * Generates options object for initializing i18next.
 * @param {string} [lng=fallbackLng] - The language code to initialize with.
 * @param {string} [ns=defaultNS] - The namespace to load translations from.
 * @returns {Object} Options object for i18next initialization.
 */
export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true, // Uncomment to enable debug mode
    supportedLngs: languages,
    // preload: languages, // Uncomment to preload all languages
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    // backend: {
    //   projectId: '01b2e5e8-6243-47d1-b36f-963dbb8bcae3'
    // }
  }
}
