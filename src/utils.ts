import type { AvailableLanguage, GiscusProps, Theme } from '@giscus/vue';

export interface VPGiscusProps {
  /**
   * Giscus options.
   *
   * If this option gets conflicted with other options, this will take higher priority.
   */
  giscus: GiscusProps
  /**
   * Whether to auto-detect and switch the language of the page.
   *
   * @default true
   */
  autoDetectLang?: boolean
  /**
   * The theme of Giscus.
   *
   * @default { light: 'light', dark: 'dark' }
   */
  theme?: Theme | {
    light: Theme
    dark: Theme
  }
}

/**
 * @see {@link AvailableLanguage}
 */
export const AvaliableLanguages: AvailableLanguage[] = ['ar', 'ca', 'da', 'de', 'en', 'eo', 'es', 'fa', 'fr', 'gr', 'he', 'hu', 'id', 'it', 'ja', 'kh', 'ko', 'nl', 'pl', 'pt', 'ro', 'ru', 'th', 'tr', 'vi', 'uk', 'uz', 'zh-CN', 'zh-Hans', 'zh-Hant', 'zh-TW'];

/**
 * Get Giscus UI language from the given locale code.
 * @param locale The locale code.
 * @returns The language Giscus supports, or `undefined` if not supported.
 */
export function getGiscusLanguage(locale: string): AvailableLanguage | undefined {
  if (AvaliableLanguages.includes(locale)) // zh-CN -> zh-CN
    return locale;
  const { language } = new Intl.Locale(locale); // en-US -> en
  return AvaliableLanguages.includes(language)
    ? language as AvailableLanguage
    : undefined;
}
