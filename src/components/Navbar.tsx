"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { X, Menu } from "lucide-react";

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

  // Handle menu animation
  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        display: "block"
      });
      gsap.from(".mobile-nav-item", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
        display: "none"
      });
    }
  }, [isOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 px-8 py-4 rounded-2xl glass shadow-sm border border-gray-100"
      >
        <div className="flex justify-between items-center h-8">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-lg font-bold tracking-tighter text-black flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-black"></div>
              EVERGREEN<span className="font-light opacity-30 text-secondary">.cc</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:text-primary ${pathname === item.href
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-gray-400"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-black text-white rounded-xl text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-primary transition-all active:scale-95"
            >
              Coordinate
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className="md:hidden hidden overflow-hidden pt-8 pb-4"
        >
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-nav-item text-sm font-bold uppercase tracking-[0.2em] transition-all ${pathname === item.href ? "text-primary" : "text-gray-400"}`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mobile-nav-item inline-block w-full text-center px-6 py-4 bg-black text-white rounded-xl text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary transition-all"
            >
              Coordinate
            </Link>
          </div>
        </div>
      </nav>

      {/* Overlay Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/5 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
