"use client";

import PageHeader from "@/components/PageHeader";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Scale, Palette, MessageCircle, ArrowRight, ShieldCheck, Mail, Send } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPage() {
    const t = useTranslations('ContactPage');
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal-item", {
                opacity: 0,
                y: 30,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".reveal-item",
                    start: "top 85%",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-white text-black min-h-screen selection:bg-primary/10">
            <PageHeader
                title={t('Header.title')}
                subtitle={t('Header.subtitle')}
                badge={t('Header.badge')}
            />

            <div className="container mx-auto px-6 py-24">
                {/* Section 1: Page Intro */}
                <div className="max-w-4xl mx-auto mb-32 reveal-item">
                    <p className="text-3xl md:text-5xl font-light leading-tight text-secondary italic mb-12">
                        {t('Intro.title')} <br />
                        <span className="text-black font-semibold not-italic">{t('Intro.highlight')}</span>
                    </p>
                </div>

                {/* Section 2: Inquiry Paths */}
                <div className="mb-32 reveal-item">
                    <h2 className="text-2xl md:text-4xl font-bold mb-16 text-center">{t('Engagement.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <Building2 />,
                                title: t('Engagement.path1.title'),
                                text: t('Engagement.path1.text')
                            },
                            {
                                icon: <Scale />,
                                title: t('Engagement.path2.title'),
                                text: t('Engagement.path2.text')
                            },
                            {
                                icon: <Palette />,
                                title: t('Engagement.path3.title'),
                                text: t('Engagement.path3.text')
                            },
                            {
                                icon: <MessageCircle />,
                                title: t('Engagement.path4.title'),
                                text: t('Engagement.path4.text')
                            }
                        ].map((path, i) => (
                            <div key={i} className="p-8 border border-gray-100 rounded-3xl hover:border-primary/20 hover:bg-gray-50 transition-all group cursor-pointer">
                                <div className="mb-6 text-primary group-hover:scale-110 transition-transform">{path.icon}</div>
                                <h3 className="font-bold mb-3">{path.title}</h3>
                                <p className="text-secondary text-sm leading-relaxed">{path.text}</p>
                                <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                    {t('Engagement.selectPath')} <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 3: Submission Form */}
                <div className="max-w-4xl mx-auto mb-32 reveal-item">
                    <div className="bg-gray-50 rounded-[4rem] p-12 md:p-20 border border-gray-100">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center underline decoration-primary decoration-4 underline-offset-8">{t('Form.title')}</h2>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">{t('Form.labelName')}</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-300"
                                        placeholder={t('Form.placeholderName')}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">{t('Form.labelOrg')}</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-300"
                                        placeholder={t('Form.placeholderOrg')}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">{t('Form.labelEmail')}</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-300"
                                        placeholder={t('Form.placeholderEmail')}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">{t('Form.labelInterest')}</label>
                                    <select className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                                        <option>{t('Engagement.path1.title')}</option>
                                        <option>{t('Engagement.path2.title')}</option>
                                        <option>{t('Engagement.path3.title')}</option>
                                        <option>{t('Engagement.path4.title')}</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">{t('Form.labelMessage')}</label>
                                <textarea
                                    rows={6}
                                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-300 resize-none"
                                    placeholder={t('Form.placeholderMessage')}
                                ></textarea>
                            </div>

                            <div className="text-center pt-8">
                                <button className="inline-flex items-center gap-4 bg-black text-white px-12 py-5 rounded-2xl font-bold shadow-2xl hover:bg-primary transition-all active:scale-95">
                                    → {t('Form.btnSubmit')}
                                </button>
                                <p className="mt-8 text-xs text-secondary opacity-50">
                                    {t('Form.note')}
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Section 4: Consent & Data Use */}
                <div className="reveal-item text-center max-w-2xl mx-auto border-t border-gray-100 pt-32 mb-24">
                    <h2 className="text-3xl font-bold mb-8 flex items-center justify-center gap-3">
                        <ShieldCheck className="w-8 h-8 text-primary" /> {t('Privacy.title')}
                    </h2>
                    <p className="text-lg text-secondary leading-relaxed font-light mb-12">
                        {t('Privacy.text')}
                    </p>
                    <Link href="/privacy" className="text-xs font-bold uppercase tracking-widest text-primary underline decoration-primary/20 underline-offset-8 hover:decoration-primary/100 transition-all">
                        → {t('Privacy.link')}
                    </Link>
                </div>
            </div>
        </div>
    );
}
