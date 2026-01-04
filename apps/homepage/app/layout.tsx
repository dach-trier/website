import "./global.css";

import { Rubik } from "next/font/google";
import { ReactNode } from "react";
import { cookies } from "next/headers";
import { TranslationProvider } from "@/i18n/client";
import { getLocale, getTranslations } from "@/i18n/server";

import ViewportObserver from "@/components/viewport-observer";
import ScrollObserver from "@/components/scroll-observer";

import i18nConfig from "@/i18n.config";

// font face
const font = Rubik();

type Props = {
    children: ReactNode;
};

const Providers = async ({ children }: Props) => {
    const store = await cookies();
    const locale = await getLocale();
    const translations = await getTranslations();

    return (
        <TranslationProvider
            auto={!store.has(i18nConfig.cookie)}
            locale={locale}
            translations={translations}
        >
            <ViewportObserver>
                <ScrollObserver>{children}</ScrollObserver>
            </ViewportObserver>
        </TranslationProvider>
    );
};

export default async function RootLayout({ children }: Props) {
    const locale = await getLocale();

    return (
        <html lang={locale} className={font.className}>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
