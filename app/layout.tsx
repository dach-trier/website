import "./global.css";

import { ReactNode } from "react";
import { cookies } from "next/headers";
import { TranslationProvider } from "@/i18n/client";
import { getLocale, getTranslations } from "@/i18n/server";

import i18nConfig from "@/i18n.config";

type Props = {
    children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
    const store = await cookies();
    const locale = await getLocale();
    const translations = await getTranslations();

    return (
        <html lang={locale}>
            <body>
                <TranslationProvider
                    auto={!store.has(i18nConfig.cookie)}
                    locale={locale}
                    translations={translations}
                >
                    {children}
                </TranslationProvider>
            </body>
        </html>
    );
}
