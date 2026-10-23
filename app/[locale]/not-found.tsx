import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
export default async function NotFound(){const t=await getTranslations();return <main id="main" className="wrap page-intro"><p className="eyebrow">404</p><h1>{t('notFound')}</h1><Link className="text-link" href="/">{t('backHome')}</Link></main>;}
