import { RequestCookies } from "next/dist/server/web/spec-extension/cookies";

import Negotiator from "negotiator";
import i18nConfig from "@/i18n.config";

/**
 * Determines the client's preferred locale.
 *
 * @param headers - The request headers to inspect.
 * @returns The resolved locale.
 */
export function resolveLocale(
    headers: Headers,
    cookies: RequestCookies,
): string {
    const locales = extractLocales(headers, cookies);
    let fallback = i18nConfig.default;

    for (const locale of locales) {
        if (i18nConfig.locales.includes(locale)) return locale;

        // A significant number of Ukrainian-speaking users may have Russian as their
        // primary language. Since Russian isn't supported, next-intl would normally
        // fall back to English, which isn't ideal. We'll default to Ukrainian instead.
        if (locale === "ru") fallback = "uk";
    }

    return fallback;
}

function extractLocales(headers: Headers, cookies: RequestCookies): string[] {
    if (cookies.has(i18nConfig.cookie)) {
        return [cookies.get(i18nConfig.cookie)!.value];
    }

    return new Negotiator({
        headers: {
            "accept-language": headers.get("accept-language") ?? undefined,
        },
    }).languages();
}
