"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    badge?: string;
}

export default function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
    const headerRef = useRef(null);

    useEffect(() => {
        gsap.from(headerRef.current, {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });
    }, []);

    return (
        <div ref={headerRef} className="pt-32 pb-16 border-b border-gray-100 dark:border-zinc-900 bg-white">
            <div className="container mx-auto px-6">
                {badge && (
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-8 border border-primary/10">
                        {badge}
                    </span>
                )}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-4xl text-black leading-[0.9]">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed font-light">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
