import {getTranslations} from 'next-intl/server';
import {ArrowUpRight} from 'lucide-react';
export async function Footer(){const t=await getTranslations();return <footer className="wrap footer"><div><strong>Subin Bae</strong><span>{t('footerNote')}</span></div><div><a href="mailto:subinbae216@gmail.com">{t('email')} <ArrowUpRight size={13}/></a><a href="https://www.linkedin.com/in/subinb216/">LinkedIn <ArrowUpRight size={13}/></a></div><small>© {new Date().getFullYear()} Subin Bae</small></footer>}
