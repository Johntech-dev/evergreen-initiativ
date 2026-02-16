"use client";

import PageHeader from "@/components/PageHeader";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Clock, Shield, Target, Zap, ArrowRight, Map, Users, FileText, Globe } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function OverviewPage() {
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

            gsap.from(".reveal-horizontal", {
                opacity: 0,
                x: -30,
                stagger: 0.15,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".reveal-horizontal",
                    start: "top 80%",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-white text-black min-h-screen selection:bg-primary/10">
            <PageHeader
                title="What is the Evergreen Initiative?"
                subtitle="A civic framework for intelligence that cooperates with the field."
                badge="Strategic Overview"
            />

            <div className="container mx-auto px-6 py-24">
                {/* Section 1: Intro Paragraph */}
                <div className="max-w-4xl mx-auto mb-32 reveal-item">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-b border-gray-100 pb-12">
                        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-black opacity-80 decoration-primary/30 underline underline-offset-8">Not a product</div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-black opacity-80 decoration-primary/30 underline underline-offset-8">Not a platform</div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-black opacity-80 decoration-primary/30 underline underline-offset-8">Not a movement</div>
                    </div>
                    <p className="text-3xl md:text-5xl font-light leading-tight text-secondary italic">
                        It’s a reference frame — <br />
                        <span className="text-black font-semibold not-italic">a way of thinking about systems, sovereignty, and scale.</span>
                    </p>
                </div>

                {/* Section 2: Why Evergreen, Why Now? */}
                <div className="mb-32 reveal-item">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                                <Clock className="w-3 h-3" /> The Synchronization Frontier
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                                A new frontier of <span className="text-primary italic">synchronization.</span>
                            </h2>
                            <p className="text-xl text-secondary leading-relaxed">
                                Civilization has always advanced by learning to synchronize — <span className="text-black font-medium">not dominate.</span>
                            </p>
                        </div>

                        <div className="space-y-12">
                            {[
                                { title: "The civic clocks of Paris", desc: "Local coordination of urban activity." },
                                { title: "The global reference of Greenwich", desc: "Synchronizing the surface of the planet for trade and navigation." },
                                { title: "Today’s challenge", desc: "Aligning intelligence with the systems it inhabits." }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-8 group">
                                    <div className="text-primary font-mono text-sm opacity-30 pt-1">0{i + 1}</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                                        <p className="text-secondary">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 mt-8">
                                <p className="text-lg leading-relaxed mb-6">
                                    We are entering a phase where intelligence is no longer just human. <br />
                                    The question is no longer “What can AI do?”
                                </p>
                                <p className="text-2xl font-bold tracking-tight">It’s: What kind of civilization does it amplify?</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: What Evergreen Is For */}
                <div className="mb-32 reveal-item">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Designing for scale, <br /><span className="text-primary">sovereignty, and survival.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <Shield />, title: "Protect Sovereignty", text: "Individuals retain dominion over their behavioral biometric tokens." },
                            { icon: <Target />, title: "Establish Due Process", text: "Intelligence must remain legible and accountable under pressure." },
                            { icon: <Zap />, title: "Align Alignment", text: "Cooperating with ecological and civic constraints for long-term survival." },
                            { icon: <Compass />, title: "Time Horizons", text: "Enabling design and governance that lasts centuries, not quarters." },
                            { icon: <Globe />, title: "Continuity Engines", text: "Supporting cities as engines of civilizational stability." }
                        ].map((goal, i) => (
                            <div key={i} className="p-10 glass rounded-3xl border-gray-100 hover:border-primary/20 transition-all group">
                                <div className="mb-6 text-primary group-hover:scale-110 transition-transform">{goal.icon}</div>
                                <h3 className="text-xl font-bold mb-4">{goal.title}</h3>
                                <p className="text-secondary text-sm leading-relaxed">{goal.text}</p>
                            </div>
                        ))}
                        <div className="p-10 bg-black text-white rounded-3xl flex flex-col justify-center">
                            <p className="font-light italic opacity-80 mb-6">This isn’t about resisting technology.</p>
                            <p className="text-xl font-bold leading-tight">It’s about designing it with constitutional clarity and cultural care.</p>
                        </div>
                    </div>
                </div>

                {/* Section 4: What Evergreen Is Not */}
                <div className="mb-32 reveal-item bg-gray-50 rounded-[4rem] p-12 md:p-24 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-200"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">No hype. <br /><span className="text-secondary">No savior narrative.</span></h2>
                            <p className="text-xl text-secondary leading-relaxed mb-12">
                                Evergreen does not promise to “fix” the future. <br />
                                It offers a way to build systems that don’t need fixing.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {["Not a startup", "Not a hype cycle", "Not a savior narrative"].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 italic font-medium text-secondary">
                                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 5: The Core Principle */}
                <div className="mb-32 text-center reveal-item">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-8">
                        The Physics of Maturity
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
                        The long way around is <br /><span className="text-primary italic">the only way through.</span>
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-8 text-xl text-secondary leading-relaxed">
                        <p>Civilization advances when intelligence learns to travel the long way around.</p>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-px h-12 bg-gray-200"></div>
                            <p className="font-bold text-black uppercase tracking-widest text-sm">This is not a metaphor. It’s a design law.</p>
                            <div className="w-px h-12 bg-gray-200"></div>
                        </div>
                        <p>
                            Evergreen encodes that law into civic infrastructure — <br />
                            <span className="text-black font-medium">so that intelligence can scale without collapse.</span>
                        </p>
                    </div>
                </div>

                {/* Section 6: How to Engage */}
                <div className="reveal-item p-12 md:p-24 rounded-[4rem] bg-black text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Implemented in phases.</h2>
                    <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                        Phase 1 is focused on <span className="text-white font-medium italic">Guardian City</span> — a checklist-based approach to civic alignment.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link href="/protocol" className="w-full md:w-auto px-10 py-5 glass border-white/10 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                            <FileText className="w-5 h-5" /> Read Protocol
                        </Link>
                        <Link href="/guardian-city" className="w-full md:w-auto px-10 py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-2xl shadow-primary/20">
                            <Map className="w-5 h-5" /> Explore Guardian City
                        </Link>
                        <Link href="/contact" className="w-full md:w-auto px-10 py-5 glass border-white/10 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                            <Users className="w-5 h-5" /> Partnership
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
