import {defineRouting} from 'next-intl/routing';
export const routing = defineRouting({locales:['en','ko'],defaultLocale:'en',localeDetection:false,localeCookie:{maxAge:31536000}});
