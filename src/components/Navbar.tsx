"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { X, Menu, ArrowRight, Globe } from "lucide-react";
import { Link } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';

const navItems = [
  { name: "Home", href: "/" },
  { name: "Overview", href: "/overview" },
  { name: "Guardian City", href: "/guardian-city" },
  { name: "Anti-Enchantment", href: "/anti-enchantment" },
];

const languages = [
  { code: "en", label: "EN", fullName: "English" },
  { code: "ja", label: "JA", fullName: "日本語" },
  { code: "zh-CN", label: "ZH", fullName: "中文" },
];

export default function Navbar() {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const navRef = useRef(null);
  const menuRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Initial check
    setIsScrolled(window.scrollY > 20);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    gsap.fromTo(navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.1 }
    );

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setLangOpen(false);
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

  const changeLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setLangOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed left-0 right-0 mx-auto w-[90%] max-w-5xl z-50 px-8 rounded-3xl transition-[top,padding,background-color,border-color,box-shadow] duration-500 border
          ${isScrolled
            ? "glass-dark shadow-2xl py-3 top-4 border-black/10"
            : "glass shadow-xl py-4 top-6 border-gray-100"}`}
      >
        <div className="flex justify-between items-center h-8">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tighter text-black flex items-center gap-2 group">
              <div className="w-5 h-5 rounded-full bg-black group-hover:scale-110 transition-transform"></div>
              EVERGREEN<span className="font-light opacity-30 text-secondary">.cc</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => {
              const translationKey = item.name.toLowerCase().replace(" ", "").replace("-", "");
              const keyMap: Record<string, string> = {
                "home": "home",
                "overview": "overview",
                "guardiancity": "guardianCity",
                "antienchantment": "antiEnchantment"
              };
              const tKey = keyMap[translationKey] || translationKey;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-primary ${isActive
                    ? "text-black border-b-2 border-primary pb-1"
                    : "text-gray-400"
                    }`}
                >
                  {t(tKey)}
                </Link>
              );
            })}

            {/* Language Switcher - Desktop */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gray-50/50 hover:bg-gray-100/80 transition-all border border-transparent hover:border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-600"
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{languages.find(l => l.code === locale)?.label || "EN"}</span>
              </button>

              {langOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <div className="absolute top-full right-0 mt-2 w-32 bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden py-1 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-2 text-xs font-bold transition-colors ${locale === lang.code
                          ? "text-black bg-gray-50"
                          : "text-gray-500 hover:text-black hover:bg-gray-50/50"
                          }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{lang.fullName}</span>
                          {locale === lang.code && <span className="text-primary">✓</span>}
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <Link
              href="/contact"
              className="px-6 py-2.5 bg-black text-white rounded-xl text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-primary transition-all active:scale-95 shadow-lg shadow-black/5"
            >
              {t('coordinate')}
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
            {navItems.map((item) => {
              const translationKey = item.name.toLowerCase().replace(" ", "").replace("-", "");
              const keyMap: Record<string, string> = {
                "home": "home",
                "overview": "overview",
                "guardiancity": "guardianCity",
                "antienchantment": "antiEnchantment"
              };
              const tKey = keyMap[translationKey] || translationKey;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-nav-item flex items-center justify-between p-4 rounded-2xl transition-all ${pathname === item.href ? "bg-primary/5 text-primary" : "text-black hover:bg-gray-50"}`}
                >
                  <span className="text-sm font-bold uppercase tracking-[0.2em]">{t(tKey)}</span>
                  {pathname === item.href && <ArrowRight className="w-4 h-4" />}
                </Link>
              );
            })}

            {/* Language Switcher - Mobile */}
            <div className="px-4 py-2 space-y-2">
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Language</div>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl transition-all ${locale === lang.code
                    ? "bg-primary/5 text-primary font-bold"
                    : "text-black hover:bg-gray-50"
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{lang.fullName}</span>
                    {locale === lang.code && <span className="text-primary">✓</span>}
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-4 px-2">
              <Link
                href="/contact"
                className="mobile-nav-item flex items-center justify-center gap-3 w-full p-5 bg-black text-white rounded-2xl text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary transition-all shadow-xl"
              >
                {t('coordinate')} <ArrowRight className="w-4 h-4" />
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
