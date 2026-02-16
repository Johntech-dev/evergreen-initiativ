"use client";

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="bg-white border-t border-gray-100 py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
                    <div className="col-span-1 md:col-span-2 space-y-8">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-black flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-black"></div>
                            EVERGREEN<span className="font-light opacity-30 text-secondary">.cc</span>
                        </Link>
                        <p className="text-secondary text-lg max-w-sm leading-relaxed font-light">
                            {t('tagline')}
                            <br />
                            <span className="font-medium text-black italic">{t('taglineSub')}</span>
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-black">{t('links')}</h4>
                        <ul className="space-y-4 text-sm font-medium text-secondary">
                            <li><Link href="/overview" className="hover:text-primary transition-colors italic">{t('link1')}</Link></li>
                            <li><Link href="/guardian-city" className="hover:text-primary transition-colors italic">{t('link2')}</Link></li>
                            <li><Link href="/anti-enchantment" className="hover:text-primary transition-colors italic">{t('link3')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-black">{t('contact')}</h4>
                        <ul className="space-y-4 text-sm font-medium text-secondary">
                            <li><Link href="/contact" className="hover:text-primary transition-colors italic">{t('contact1')}</Link></li>
                            <li><a href="mailto:team@evergreen.cc" className="hover:text-primary transition-colors italic">team@evergreen.cc</a></li>
                            <li className="text-[10px] uppercase tracking-widest opacity-50 pt-4">{t('rights')}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
