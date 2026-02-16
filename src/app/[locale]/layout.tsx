import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from "next";
import { Outfit, Inter, Noto_Sans_JP, Noto_Sans_SC } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const notoJP = Noto_Sans_JP({
    variable: "--font-noto-jp",
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "700"],
});

const notoSC = Noto_Sans_SC({
    variable: "--font-noto-sc",
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
    title: "Evergreen Initiative | Civilization Advances",
    description: "Civilization advances when intelligence learns to travel the long way around. Precision over force. Coordination over conquest.",
    keywords: ["Akea", "Evergreen Initiative", "Cybernetics", "Civilization", "Intelligence", "Guardian City"],
};

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} className="scroll-smooth">
            <body
                className={`${outfit.variable} ${inter.variable} ${notoJP.variable} ${notoSC.variable} font-sans antialiased bg-white text-black`}
            >
                <NextIntlClientProvider messages={messages}>
                    <Navbar />
                    <main className="min-h-screen pt-16">
                        {children}
                    </main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
