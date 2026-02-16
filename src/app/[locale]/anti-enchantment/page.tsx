"use client";

import PageHeader from "@/components/PageHeader";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldAlert, AlertCircle, FileText, Lock, Eye, Scale, ArrowRight, ShieldCheck, Zap, Users, Landmark, ClipboardCheck } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function AntiEnchantmentPage() {
    const t = useTranslations('AntiEnchantmentPage');
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

            gsap.from(".firewall-line", {
                width: 0,
                duration: 1.5,
                ease: "power4.inOut",
                scrollTrigger: {
                    trigger: ".firewall-section",
                    start: "top 70%",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-white text-black min-h-screen selection:bg-red-500/10">
            <PageHeader
                title={t('Header.title')}
                subtitle={t('Header.subtitle')}
                badge={t('Header.badge')}
            />

            <div className="container mx-auto px-6 py-24">
                {/* Section 1: Page Intro */}
                <div className="max-w-4xl mx-auto mb-32 reveal-item">
                    <p className="text-3xl md:text-5xl font-light leading-tight text-secondary italic mb-12">
                        {t('Intro.premise')} <br />
                        <span className="text-black font-semibold not-italic">{t('Intro.highlight')}</span>
                    </p>
                    <div className="p-10 border-l-2 border-red-500 bg-red-500/5 rounded-r-3xl">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-600">
                            <ShieldAlert className="w-5 h-5" /> {t('Intro.firewallTitle')}
                        </h3>
                        <p className="text-lg text-secondary leading-relaxed font-light">
                            {t('Intro.firewallText')}
                        </p>
                    </div>
                </div>

                {/* Section 2: The Problem */}
                <div className="mb-32 reveal-item">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                                {t('Problem.title')} <span className="text-red-600">{t('Problem.highlight')}</span>
                            </h2>
                            <p className="text-xl text-secondary leading-relaxed mb-8">
                                {t('Problem.subtitle')}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                t('Problem.item1'),
                                t('Problem.item2'),
                                t('Problem.item3'),
                                t('Problem.item4')
                            ].map((problem, i) => (
                                <div key={i} className="p-8 bg-gray-50 border border-gray-100 rounded-2xl flex flex-col justify-between group hover:bg-red-600 hover:text-white transition-all">
                                    <AlertCircle className="w-6 h-6 mb-4 opacity-30 group-hover:opacity-100" />
                                    <span className="font-bold uppercase tracking-widest text-xs">{problem}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 3: The Principle */}
                <div className="mb-32 reveal-item bg-black rounded-[4rem] p-12 md:p-24 text-white overflow-hidden relative firewall-section">
                    <div className="absolute top-0 left-0 h-1 bg-red-600 firewall-line"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <h3 className="text-red-500 font-bold uppercase tracking-[0.4em] text-xs mb-8">{t('Axiom.badge')}</h3>
                            <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight">{t('Axiom.title')} <span className="italic">{t('Axiom.highlight')}</span></h2>
                            <p className="text-xl text-gray-400 font-light leading-relaxed">
                                {t('Axiom.text')} <br />
                                <span className="text-white font-medium">{t('Axiom.highlightText')}</span>
                            </p>
                        </div>
                        <div className="space-y-6">
                            {[
                                t('Axiom.item1'),
                                t('Axiom.item2'),
                                t('Axiom.item3')
                            ].map((axiom, i) => (
                                <div key={i} className="flex gap-6 p-6 border border-white/10 rounded-2xl bg-white/5">
                                    <div className="text-red-500 font-bold pt-1">0{i + 1}</div>
                                    <p className="font-medium text-lg leading-snug">{axiom}</p>
                                </div>
                            ))}
                            <div className="pt-8 text-[10px] font-bold uppercase tracking-[0.5em] text-gray-500">
                                {t('Axiom.note')}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 4: The Design Guardrails */}
                <div className="mb-32 reveal-item">
                    <div className="text-center mb-20 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">{t('Guardrails.title')} <span className="text-red-600">{t('Guardrails.highlight')}</span></h2>
                        <p className="text-xl text-secondary font-light">{t('Guardrails.subtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: t('Guardrails.item1.title'), text: t('Guardrails.item1.text') },
                            { title: t('Guardrails.item2.title'), text: t('Guardrails.item2.text') },
                            { title: t('Guardrails.item3.title'), text: t('Guardrails.item3.text') },
                            { title: t('Guardrails.item4.title'), text: t('Guardrails.item4.text') },
                            { title: t('Guardrails.item5.title'), text: t('Guardrails.item5.text') },
                            { title: t('Guardrails.item6.title'), text: t('Guardrails.item6.text') }
                        ].map((guard, i) => (
                            <div key={i} className="p-10 border border-gray-100 rounded-3xl hover:bg-gray-50 transition-all group">
                                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Scale className="w-5 h-5 text-red-600" />
                                </div>
                                <h4 className="text-xl font-bold mb-3">{guard.title}</h4>
                                <p className="text-secondary text-sm leading-relaxed">{guard.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 5: Why It Matters */}
                <div className="mb-32 reveal-item text-center">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-[10px] font-bold tracking-[0.4em] uppercase mb-8 border border-red-100">
                        {t('Surveillance.badge')}
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter">
                        {t('Surveillance.title')} <br /><span className="text-red-600">{t('Surveillance.highlight')}</span>
                    </h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-20">
                        <div>
                            <h4 className="font-bold flex items-center gap-2 mb-4 uppercase tracking-widest text-xs opacity-40">{t('Surveillance.persistence')}</h4>
                            <p className="text-secondary leading-relaxed">{t('Surveillance.persistenceText')}</p>
                        </div>
                        <div>
                            <h4 className="font-bold flex items-center gap-2 mb-4 uppercase tracking-widest text-xs opacity-40">{t('Surveillance.axiom')}</h4>
                            <p className="text-secondary leading-relaxed">{t('Surveillance.axiomText')}</p>
                        </div>
                        <div>
                            <h4 className="font-bold flex items-center gap-2 mb-4 uppercase tracking-widest text-xs opacity-40">{t('Surveillance.alignment')}</h4>
                            <p className="text-secondary leading-relaxed">{t('Surveillance.alignmentText')}</p>
                        </div>
                    </div>
                    <p className="mt-16 text-lg font-light text-secondary italic">{t('Surveillance.note')}</p>
                </div>

                {/* Section 6: Connect */}
                <div className="reveal-item p-12 md:p-24 rounded-[4rem] bg-black text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full"></div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter">{t('Engage.title')}</h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link href="/protocol" className="w-full md:w-auto px-10 py-5 glass border-white/10 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                            <FileText className="w-5 h-5" /> {t('Engage.btnProtocol')}
                        </Link>
                        <Link href="/checklist" className="w-full md:w-auto px-10 py-5 bg-red-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-2xl shadow-red-600/20">
                            <ClipboardCheck className="w-5 h-5" /> {t('Engage.btnChecklist')}
                        </Link>
                        <Link href="/contact" className="w-full md:w-auto px-10 py-5 glass border-white/10 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                            <Users className="w-5 h-5" /> {t('Engage.btnPartnership')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
