"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Link from "next/link";
import { ArrowRight, Compass, Shield, Zap, Globe, MessageSquare, FileText, Users } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Text Animation
      const heroTitle = new SplitText(".hero-headline", { type: "words,chars" });
      gsap.from(heroTitle.chars, {
        y: 40,
        opacity: 0,
        rotateX: -45,
        stagger: 0.015,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
      });

      gsap.from(".hero-fade", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.8
      });

      // 2. Section Reveals
      gsap.utils.toArray(".reveal-section").forEach((section: any) => {
        gsap.from(section, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      });

      // 3. Staggered Items Reveal
      gsap.utils.toArray(".reveal-grid").forEach((grid: any) => {
        gsap.from(grid.children, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 95%", // Trigger earlier
            toggleActions: "play none none none"
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white text-black selection:bg-primary/10 selection:text-primary">
      {/* Section 1: Hero */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden px-6">
        <div className="absolute inset-0 bg-grid opacity-[0.03] z-0"></div>
        <div className="container mx-auto max-w-5xl z-10 text-center">
          <h1 className="hero-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05]">
            Civilization advances when intelligence learns to travel the <span className="text-primary italic">long way around.</span>
          </h1>

          <div className="hero-fade flex flex-col items-center gap-2 mb-12 text-secondary font-light">
            <span className="text-lg md:text-xl">Resilience over speed.</span>
            <span className="text-lg md:text-xl">Precision over force.</span>
            <span className="text-lg md:text-xl">Coordination over conquest.</span>
          </div>

          <Link
            href="/overview"
            className="hero-fade group inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-2xl font-bold shadow-2xl hover:bg-primary transition-all active:scale-95"
          >
            → Explore the Evergreen Initiative
          </Link>
        </div>

        {/* Section 2: Signal of Maturity */}
        <div className="container mx-auto max-w-5xl mt-24 hero-fade z-10 text-center flex flex-col items-center">
          <div className="w-px h-16 bg-gradient-to-b from-black/20 to-transparent mb-8"></div>
          <p className="text-sm font-medium text-secondary uppercase tracking-[0.2em] mb-4">Signal of Maturity</p>
          <div className="max-w-xl mx-auto space-y-4">
            <p className="text-secondary leading-relaxed">
              Congratulations to NASA and the Artemis teams — <br />
              for engineering that prioritizes resilience and safety.
            </p>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
              We don’t publish launch windows. <br />
              We design for continuity, not the news cycle.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: What Is Evergreen? */}
      <section className="py-32 reveal-section px-6 border-t border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                <Compass className="w-3 h-3" /> Navigation Frame
              </div>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                A civic framework for intelligence that <span className="text-primary">cooperates with the field.</span>
              </h2>
            </div>
            <div className="space-y-8 text-xl text-secondary leading-relaxed">
              <p>
                From the civic clocks of Paris to the global reference of Greenwich, civilization has always advanced by learning to synchronize — <span className="text-black font-medium text-italic italic">not dominate.</span>
              </p>
              <div className="pt-8 border-t border-gray-100 space-y-4">
                <p className="font-medium text-black">Today, we face a new frontier:</p>
                <p>How do we design intelligence that respects the systems it moves through?</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2 decoration-primary decoration-2 underline underline-offset-4">Not a product</div>
                <div className="flex items-center gap-2 decoration-primary decoration-2 underline underline-offset-4">Not a platform</div>
                <div className="flex items-center gap-2 decoration-primary decoration-2 underline underline-offset-4">Not a movement</div>
              </div>
            </div>
          </div>

          <div className="mt-32 p-12 md:p-20 bg-gray-50 rounded-[4rem] text-center">
            <h3 className="text-2xl md:text-4xl font-bold mb-6">It’s a reference frame. <br />A design philosophy for the long arc.</h3>
          </div>
        </div>
      </section>

      {/* Section 4: Why Now? */}
      <section className="py-32 reveal-section px-6 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="mb-12 inline-block px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-bold tracking-[0.4em] uppercase">
            The Pivot Point
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-tight">
            We’re not riding a moment. <br />
            <span className="text-primary">We’re aligning with a principle.</span>
          </h2>
          <div className="space-y-8 text-xl text-gray-400 leading-relaxed font-light">
            <p>
              Cooperation with constraints is what scales. <br />
              That’s not hype — it’s physics.
            </p>
            <p className="text-white font-medium">
              Evergreen is how we build for the long way around.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Anti-Enchantment */}
      <section className="py-32 reveal-section px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] bg-gray-100 rounded-[3rem] p-12 flex flex-col justify-center border border-gray-200">
                <Shield className="w-20 h-20 text-primary mb-8" />
                <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 text-primary">Protocol Status: Lucid</h4>
                <div className="space-y-6">
                  <div className="h-px w-full bg-gray-200"></div>
                  <p className="text-xl font-bold italic">&quot;Stones derive strength from relationship and context.&quot;</p>
                  <p className="text-secondary text-sm">No coercion. No surveillance. No overreach. Individuals retain dominion over their data tokens.</p>
                  <div className="h-px w-full bg-gray-200"></div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                No magic. No mandates. <br />
                <span className="text-primary italic">Just due process.</span>
              </h2>
              <div className="space-y-8 text-xl text-secondary leading-relaxed">
                <p>
                  Evergreen is built on clarity, consent, and constitutional grounding. We believe intelligence must remain legible under pressure.
                </p>
                <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                  <p className="text-black font-medium mb-4">This is not about saving the world.</p>
                  <p>It’s about designing systems that don’t need saving.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Connect */}
      <section className="py-32 reveal-section px-6 border-t border-gray-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">Want to learn more?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/anti-enchantment"
              className="flex items-center justify-between p-8 bg-gray-50 border border-gray-100 rounded-2xl group hover:bg-black hover:text-white transition-all text-left"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary opacity-60">Protocol</span>
                <p className="font-bold text-black group-hover:text-white underline decoration-primary decoration-2 underline-offset-4">Read the Protocol</p>
              </div>
              <FileText className="w-6 h-6 text-black group-hover:text-white group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="flex items-center justify-between p-8 bg-gray-50 border border-gray-100 rounded-2xl group hover:bg-primary hover:text-white transition-all text-left"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary opacity-60">Collaboration</span>
                <p className="font-bold text-black group-hover:text-white underline decoration-white decoration-2 underline-offset-4">Inquire Partnership</p>
              </div>
              <Users className="w-6 h-6 text-black group-hover:text-white group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="mailto:team@evergreen.cc"
              className="flex items-center justify-between p-8 bg-gray-50 border border-gray-100 rounded-2xl group hover:bg-zinc-800 hover:text-white transition-all text-left"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary opacity-60">Reach Out</span>
                <p className="font-bold text-black group-hover:text-white underline decoration-primary decoration-2 underline-offset-4">Contact the Team</p>
              </div>
              <MessageSquare className="w-6 h-6 text-black group-hover:text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
