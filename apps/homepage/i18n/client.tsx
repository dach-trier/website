"use client";

import { useContext, createContext, ReactNode } from "react";

export const TranslationContext = createContext(
    {} as { auto: boolean; locale: string; translations: any },
);

export type Props = {
    children: ReactNode;
    auto: boolean;
    locale: string;
    translations: any;
};

export function TranslationProvider({
    children,
    auto,
    locale,
    translations,
}: Props) {
    return (
        <TranslationContext.Provider value={{ auto, locale, translations }}>
            {children}
        </TranslationContext.Provider>
    );
}

export function useTranslationContext() {
    return useContext(TranslationContext)!;
}
