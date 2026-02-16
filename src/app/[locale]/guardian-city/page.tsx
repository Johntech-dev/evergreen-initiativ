"use client";

import PageHeader from "@/components/PageHeader";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, ClipboardCheck, Map, Building2, Zap, ArrowRight, CheckCircle2, Globe, FileText, Users, Landmark } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function GuardianCityPage() {
    const t = useTranslations('GuardianCity');
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

            gsap.from(".reveal-checklist-item", {
                opacity: 0,
                x: -20,
                stagger: 0.1,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".checklist-container",
                    start: "top 80%",
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
                    <p className="text-3xl md:text-5xl font-light leading-tight text-secondary italic mb-8">
                        {t('Intro.title')} <br />
                        <span className="text-black font-semibold not-italic">{t('Intro.highlight')}</span>
                    </p>
                    <div className="flex items-center gap-4 text-primary font-bold uppercase tracking-widest text-sm">
                        <div className="w-12 h-px bg-primary"></div>
                        {t('Intro.subtitle')}
                    </div>
                </div>

                {/* Section 2: What Is Guardian City? */}
                <div className="mb-32 reveal-item">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                                <Building2 className="w-3 h-3" /> {t('Implementation.badge')}
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                                {t('Implementation.title')} <span className="text-primary italic">{t('Implementation.highlight')}</span>
                            </h2>
                            <p className="text-xl text-secondary leading-relaxed mb-8">
                                {t('Implementation.subtitle')}
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100">
                            <h3 className="text-xl font-bold mb-8 uppercase tracking-tighter decoration-primary decoration-2 underline underline-offset-8">{t('Implementation.checklistTitle')}</h3>
                            <ul className="space-y-6">
                                {[
                                    t('Implementation.item1'),
                                    t('Implementation.item2'),
                                    t('Implementation.item3'),
                                    t('Implementation.item4')
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        </div>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <p className="text-secondary italic">{t('Implementation.note')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Why a City? */}
                <div className="mb-32 reveal-item">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">{t('WhyCity.title')} <span className="text-primary">{t('WhyCity.highlight')}</span></h2>
                        <p className="text-xl text-secondary leading-relaxed font-light">
                            {t('WhyCity.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: t('WhyCity.module1.title'), text: t('WhyCity.module1.text') },
                            { title: t('WhyCity.module2.title'), text: t('WhyCity.module2.text') },
                            { title: t('WhyCity.module3.title'), text: t('WhyCity.module3.text') },
                            { title: t('WhyCity.module4.title'), text: t('WhyCity.module4.text') }
                        ].map((test, i) => (
                            <div key={i} className="p-8 border border-gray-100 rounded-3xl hover:border-primary/20 transition-all group">
                                <div className="text-[10px] font-bold text-primary mb-4 uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity">Module 0{i + 1}</div>
                                <h4 className="text-lg font-bold mb-3">{test.title}</h4>
                                <p className="text-secondary text-sm leading-relaxed">{test.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400">{t('WhyCity.rehearsal')}</p>
                    </div>
                </div>

                {/* Section 4: The Guardian Checklist */}
                <div className="mb-32 reveal-item bg-gray-50 rounded-[4rem] p-12 md:p-24 border border-gray-100 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white text-[10px] font-bold tracking-[0.2em] uppercase border border-gray-100 shadow-sm">
                                <ClipboardCheck className="w-3 h-3 text-primary" /> {t('ChecklistSection.badge')}
                            </div>
                            <h2 className="text-4xl font-bold mb-8 leading-tight">{t('ChecklistSection.title')} <br /><span className="text-secondary italic">{t('ChecklistSection.highlight')}</span></h2>
                            <div className="p-8 bg-black text-white rounded-3xl mt-12">
                                <h4 className="font-bold mb-4 uppercase tracking-widest text-xs opacity-50 text-secondary">{t('ChecklistSection.noteTitle')}</h4>
                                <p className="text-sm leading-relaxed mb-4">{t('ChecklistSection.noteText')}</p>
                                <p className="text-lg font-bold">{t('ChecklistSection.noteBar')}</p>
                            </div>
                        </div>

                        <div className="checklist-container grid grid-cols-1 gap-4">
                            {[
                                t('ChecklistSection.item1'),
                                t('ChecklistSection.item2'),
                                t('ChecklistSection.item3'),
                                t('ChecklistSection.item4'),
                                t('ChecklistSection.item5'),
                                t('ChecklistSection.item6')
                            ].map((item, i) => (
                                <div key={i} className="reveal-checklist-item flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-200 group hover:border-primary transition-all cursor-pointer">
                                    <div className="w-6 h-6 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-black group-hover:translate-x-1 transition-transform">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 5: How It Works */}
                <div className="mb-32 reveal-item text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-10 leading-tight">
                        {t('ProtocolSection.title')} <br /><span className="text-primary italic">{t('ProtocolSection.highlight')}</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-16">
                        <div className="p-10 border-l-2 border-primary bg-primary/5 rounded-r-3xl">
                            <h4 className="font-bold mb-4 flex items-center gap-2"><Map className="w-5 h-5" /> {t('ProtocolSection.alignment')}</h4>
                            <p className="text-secondary leading-relaxed italic">
                                &quot;{t('ProtocolSection.quote')}&quot;
                            </p>
                        </div>
                        <div className="p-10 border-l-2 border-gray-200 space-y-4">
                            <p className="text-lg font-medium text-black underline decoration-primary decoration-4 underline-offset-8">{t('ProtocolSection.frame')}</p>
                            <p className="text-lg text-secondary">{t('ProtocolSection.implementation')}</p>
                        </div>
                    </div>
                </div>

                {/* Section 6: Engage */}
                <div className="reveal-item p-12 md:p-24 rounded-[4rem] bg-black text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">{t('Engage.title')}</h2>
                    <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                        {t('Engage.subtitlePrefix')} <br />
                        <span className="text-white font-medium italic underline decoration-white/20 underline-offset-8">{t('Engage.subtitleHighlight')}</span>
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link href="/checklist" className="w-full md:w-auto px-10 py-5 glass border-white/10 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all group">
                            <ClipboardCheck className="w-5 h-5 group-hover:scale-110 transition-transform" /> {t('Engage.btnChecklist')}
                        </Link>
                        <Link href="/contact" className="w-full md:w-auto px-10 py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-2xl shadow-primary/20 group">
                            <Users className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> {t('Engage.btnPartnership')}
                        </Link>
                        <Link href="/protocol" className="w-full md:w-auto px-10 py-5 glass border-white/10 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all group">
                            <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform" /> {t('Engage.btnProtocol')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
