"use client";

import PageHeader from "@/components/PageHeader";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, ClipboardCheck, Map, Building2, Zap, ArrowRight, CheckCircle2, Globe, FileText, Users, Landmark } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function GuardianCityPage() {
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
                title="Guardian City: Phase 1"
                subtitle="A checklist-based approach to civic alignment for intelligent systems."
                badge="Evolutionary Testbed"
            />

            <div className="container mx-auto px-6 py-24">
                {/* Section 1: Page Intro */}
                <div className="max-w-4xl mx-auto mb-32 reveal-item">
                    <p className="text-3xl md:text-5xl font-light leading-tight text-secondary italic mb-8">
                        Guardian City is not a utopia. <br />
                        <span className="text-black font-semibold not-italic">It’s a testbed for constitutional infrastructure — a place to prove that intelligence can scale without violating sovereignty.</span>
                    </p>
                    <div className="flex items-center gap-4 text-primary font-bold uppercase tracking-widest text-sm">
                        <div className="w-12 h-px bg-primary"></div>
                        This is where Evergreen becomes real.
                    </div>
                </div>

                {/* Section 2: What Is Guardian City? */}
                <div className="mb-32 reveal-item">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                                <Building2 className="w-3 h-3" /> Implementation Frame
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                                A city-scale demonstration of the <span className="text-primary italic">Evergreen Protocol.</span>
                            </h2>
                            <p className="text-xl text-secondary leading-relaxed mb-8">
                                Guardian City is a civic implementation of the Evergreen design frame. It’s not a &quot;smart city&quot;—it’s a <span className="text-black font-bold">sovereignty-aligned city</span>.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100">
                            <h3 className="text-xl font-bold mb-8 uppercase tracking-tighter decoration-primary decoration-2 underline underline-offset-8">Requirement Checklist</h3>
                            <ul className="space-y-6">
                                {[
                                    "Respect behavioral biometric boundaries",
                                    "Operate under due process",
                                    "Remain legible under pressure",
                                    "Cooperate with ecological and civic constraints"
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
                                <p className="text-secondary italic">This is not a blueprint. It’s a checklist — a set of thresholds that must be met before deployment.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Why a City? */}
                <div className="mb-32 reveal-item">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Because cities are where <span className="text-primary">systems meet the real world.</span></h2>
                        <p className="text-xl text-secondary leading-relaxed font-light">
                            Cities are where infrastructure, law, culture, and computation converge. They are the proving ground for scale.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Biometric Sovereignty", text: "Testing consent-based systems in public space." },
                            { title: "Personal Agents", text: "Empowering individuals with tools that amplify sovereignty." },
                            { title: "Civic Protocols", text: "Encoding constitutional rights into intelligent infrastructure." },
                            { title: "Cultural Continuity", text: "Protecting human relationship under algorithmic pressure." }
                        ].map((test, i) => (
                            <div key={i} className="p-8 border border-gray-100 rounded-3xl hover:border-primary/20 transition-all group">
                                <div className="text-[10px] font-bold text-primary mb-4 uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity">Module 0{i + 1}</div>
                                <h4 className="text-lg font-bold mb-3">{test.title}</h4>
                                <p className="text-secondary text-sm leading-relaxed">{test.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400">This is not a simulation. It’s a live rehearsal for the Fourth CTPS.</p>
                    </div>
                </div>

                {/* Section 4: The Guardian Checklist */}
                <div className="mb-32 reveal-item bg-gray-50 rounded-[4rem] p-12 md:p-24 border border-gray-100 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white text-[10px] font-bold tracking-[0.2em] uppercase border border-gray-100 shadow-sm">
                                <ClipboardCheck className="w-3 h-3 text-primary" /> The Guardian Checklist
                            </div>
                            <h2 className="text-4xl font-bold mb-8 leading-tight">Before deployment, <br /><span className="text-secondary italic">systems must demonstrate:</span></h2>
                            <div className="p-8 bg-black text-white rounded-3xl mt-12">
                                <h4 className="font-bold mb-4 uppercase tracking-widest text-xs opacity-50 text-secondary">Registry Note</h4>
                                <p className="text-sm leading-relaxed mb-4">This checklist is public, evolving, and enforceable.</p>
                                <p className="text-lg font-bold">It is the minimum bar for participation in Guardian City.</p>
                            </div>
                        </div>

                        <div className="checklist-container grid grid-cols-1 gap-4">
                            {[
                                "Explicit consent for all biometric data use",
                                "Transparent audit trails for algorithmic decisions",
                                "Revocability of personal data access",
                                "No coercive defaults or dark patterns",
                                "Constitutional alignment with behavioral rights",
                                "Ecological load disclosure and mitigation"
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
                        Guardian City is not a place. <br /><span className="text-primary italic">It’s a protocol.</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-16">
                        <div className="p-10 border-l-2 border-primary bg-primary/5 rounded-r-3xl">
                            <h4 className="font-bold mb-4 flex items-center gap-2"><Map className="w-5 h-5" /> Alignment</h4>
                            <p className="text-secondary leading-relaxed italic">
                                &quot;Any city can become a Guardian City by adopting the checklist. There is no central authority. There is only the standard — and the will to uphold it.&quot;
                            </p>
                        </div>
                        <div className="p-10 border-l-2 border-gray-200 space-y-4">
                            <p className="text-lg font-medium text-black underline decoration-primary decoration-4 underline-offset-8">Evergreen provides the reference frame.</p>
                            <p className="text-lg text-secondary">Cities provide the implementation.</p>
                        </div>
                    </div>
                </div>

                {/* Section 6: Engage */}
                <div className="reveal-item p-12 md:p-24 rounded-[4rem] bg-black text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Interested in piloting?</h2>
                    <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                        We’re currently in Phase 1: <br />
                        <span className="text-white font-medium italic underline decoration-white/20 underline-offset-8">Identifying aligned cities, institutions, and infrastructure partners.</span>
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link href="/checklist" className="w-full md:w-auto px-10 py-5 glass border-white/10 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all group">
                            <ClipboardCheck className="w-5 h-5 group-hover:scale-110 transition-transform" /> View Checklist
                        </Link>
                        <Link href="/contact" className="w-full md:w-auto px-10 py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-2xl shadow-primary/20 group">
                            <Users className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> Inquire Partnership
                        </Link>
                        <Link href="/protocol" className="w-full md:w-auto px-10 py-5 glass border-white/10 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all group">
                            <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform" /> Read Protocol
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
