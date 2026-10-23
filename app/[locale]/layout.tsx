import type {Metadata} from 'next';
import {NextIntlClientProvider,hasLocale} from 'next-intl';
import {setRequestLocale,getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {Providers} from '@/components/providers';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';
import '../globals.css';
export function generateStaticParams(){return routing.locales.map(locale=>({locale}));}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale}=await params;const t=await getTranslations({locale:hasLocale(routing.locales,locale)?locale:'en'});return {title:{default:'Subin Bae — '+t('occupation'),template:'%s — Subin Bae'},description:t('meta'),openGraph:{title:'Subin Bae',description:t('meta'),type:'website',locale:locale==='ko'?'ko_KR':'en_CA',images:[{url:'/og.svg',width:1200,height:630}]}};}
export default async function Layout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}){const {locale}=await params;if(!hasLocale(routing.locales,locale))notFound();setRequestLocale(locale);const t=await getTranslations();return <html data-scroll-behavior="smooth" lang={locale} suppressHydrationWarning><body><NextIntlClientProvider><Providers><a className="skip" href="#main">{t('skip')}</a><Header/>{children}<Footer/></Providers></NextIntlClientProvider></body></html>;}
