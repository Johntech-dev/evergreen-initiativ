"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { X, Menu, ArrowRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Overview", href: "/overview" },
  { name: "Guardian City", href: "/guardian-city" },
  { name: "Anti-Enchantment", href: "/anti-enchantment" },
];

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -20,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.1
    });
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle menu animation with more robust logic
  useEffect(() => {
    if (isOpen) {
      // Immediate display and height calculation
      gsap.set(menuRef.current, { display: "block" });
      gsap.fromTo(menuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
      );

      // Stagger items
      gsap.fromTo(".mobile-nav-item",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.3, ease: "power2.out", delay: 0.1 }
      );
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => { gsap.set(menuRef.current, { display: "none" }); }
      });
    }
  }, [isOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-6 left-0 right-0 mx-auto w-[90%] max-w-5xl z-50 px-8 py-4 rounded-3xl glass backdrop-blur-2xl shadow-2xl border border-gray-100 transition-all duration-300"
      >
        <div className="flex justify-between items-center h-8">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tighter text-black flex items-center gap-2 group">
              <div className="w-5 h-5 rounded-full bg-black group-hover:scale-110 transition-transform"></div>
              EVERGREEN<span className="font-light opacity-30 text-secondary">.cc</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-primary ${pathname === item.href
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-gray-400"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-black text-white rounded-xl text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-primary transition-all active:scale-95 shadow-lg shadow-black/5"
            >
              Coordinate
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black p-2 hover:bg-gray-100 rounded-xl transition-colors active:scale-95"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <div
          ref={menuRef}
          className="md:hidden hidden overflow-hidden"
        >
          <div className="flex flex-col space-y-2 pt-8 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-nav-item flex items-center justify-between p-4 rounded-2xl transition-all ${pathname === item.href ? "bg-primary/5 text-primary" : "text-black hover:bg-gray-50"}`}
              >
                <span className="text-sm font-bold uppercase tracking-[0.2em]">{item.name}</span>
                {pathname === item.href && <ArrowRight className="w-4 h-4" />}
              </Link>
            ))}
            <div className="pt-4 px-2">
              <Link
                href="/contact"
                className="mobile-nav-item flex items-center justify-center gap-3 w-full p-5 bg-black text-white rounded-2xl text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary transition-all shadow-xl"
              >
                Coordinate <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/40 backdrop-blur-md z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
