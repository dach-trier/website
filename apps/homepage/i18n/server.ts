"server-only";

import { headers } from "next/headers";
import i18nConfig from "@/i18n.config";

export async function getLocale() {
    const locale = (await headers()).get(i18nConfig.header);

    if (!locale || !i18nConfig.locales.includes(locale))
        return i18nConfig.default;

    return locale!;
}

export async function getTranslations() {
    return (await import(`./locales/${await getLocale()}.json`)).default;
}
