import {getRequestConfig} from 'next-intl/server';

export const locales = ['en', 'pt'];
export const defaultLocale = 'pt';

export default getRequestConfig(async ({locale}) => {
  return {
    messages: (await import(`./src/messages/${locale}.json`)).default
  };
}); 