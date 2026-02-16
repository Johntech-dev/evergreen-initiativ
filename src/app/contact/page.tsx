"use client";

import PageHeader from "@/components/PageHeader";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Scale, Palette, MessageCircle, ArrowRight, ShieldCheck, Mail, Send } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPage() {
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
                title="Get in Touch"
                subtitle="For aligned institutions, cities, and individuals ready to engage with the Evergreen Initiative."
                badge="Inquiry Portal"
            />

            <div className="container mx-auto px-6 py-24">
                {/* Section 1: Page Intro */}
                <div className="max-w-4xl mx-auto mb-32 reveal-item">
                    <p className="text-3xl md:text-5xl font-light leading-tight text-secondary italic mb-12">
                        This is not a general interest form. <br />
                        <span className="text-black font-semibold not-italic">It’s a channel for serious inquiry — for those exploring implementation, partnership, or alignment with the Evergreen Protocol.</span>
                    </p>
                </div>

                {/* Section 2: Inquiry Paths */}
                <div className="mb-32 reveal-item">
                    <h2 className="text-2xl md:text-4xl font-bold mb-16 text-center">How would you like to engage?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <Building2 />,
                                title: "Partnership Inquiry",
                                text: "For cities, institutions, or infrastructure teams exploring Guardian City alignment."
                            },
                            {
                                icon: <Scale />,
                                title: "Protocol Alignment",
                                text: "For legal, civic, or technical teams reviewing the Evergreen constitutional framework."
                            },
                            {
                                icon: <Palette />,
                                title: "Cultural Collaboration",
                                text: "For designers, educators, or curators interested in Solarpunk realization and lifestyle integration."
                            },
                            {
                                icon: <MessageCircle />,
                                title: "General Contact",
                                text: "For all other inquiries."
                            }
                        ].map((path, i) => (
                            <div key={i} className="p-8 border border-gray-100 rounded-3xl hover:border-primary/20 hover:bg-gray-50 transition-all group cursor-pointer">
                                <div className="mb-6 text-primary group-hover:scale-110 transition-transform">{path.icon}</div>
                                <h3 className="font-bold mb-3">{path.title}</h3>
                                <p className="text-secondary text-sm leading-relaxed">{path.text}</p>
                                <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                    Select Path <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 3: Submission Form */}
                <div className="max-w-4xl mx-auto mb-32 reveal-item">
                    <div className="bg-gray-50 rounded-[4rem] p-12 md:p-20 border border-gray-100">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center underline decoration-primary decoration-4 underline-offset-8">Submit an Inquiry</h2>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-300"
                                        placeholder="Identify yourself"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Organization</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-300"
                                        placeholder="Optional"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-300"
                                        placeholder="reach@example.cc"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Area of Interest</label>
                                    <select className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                                        <option>Partnership Inquiry</option>
                                        <option>Protocol Alignment</option>
                                        <option>Cultural Collaboration</option>
                                        <option>General Contact</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Message</label>
                                <textarea
                                    rows={6}
                                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-300 resize-none"
                                    placeholder="How do you wish to travel the long way around?"
                                ></textarea>
                            </div>

                            <div className="text-center pt-8">
                                <button className="inline-flex items-center gap-4 bg-black text-white px-12 py-5 rounded-2xl font-bold shadow-2xl hover:bg-primary transition-all active:scale-95">
                                    → Submit Inquiry
                                </button>
                                <p className="mt-8 text-xs text-secondary opacity-50">
                                    We review all inquiries with care. <br />
                                    You’ll hear from us if there’s alignment.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Section 4: Consent & Data Use */}
                <div className="reveal-item text-center max-w-2xl mx-auto border-t border-gray-100 pt-32 mb-24">
                    <h2 className="text-3xl font-bold mb-8 flex items-center justify-center gap-3">
                        <ShieldCheck className="w-8 h-8 text-primary" /> Your data is yours.
                    </h2>
                    <p className="text-lg text-secondary leading-relaxed font-light mb-12">
                        We do not track, profile, or resell your information. Your inquiry is stored securely and used only for direct communication. You may request deletion at any time.
                    </p>
                    <Link href="/privacy" className="text-xs font-bold uppercase tracking-widest text-primary underline decoration-primary/20 underline-offset-8 hover:decoration-primary/100 transition-all">
                        → Read our Consent & Data Use Statement
                    </Link>
                </div>
            </div>
        </div>
    );
}
