"use server";

import { cookies } from "next/headers";
import i18nConfig from "@/i18n.config";

export async function postLocale(locale: string) {
    const store = await cookies();

    // remove the cookie so that our middleware can resolve to the preferred system locale.
    if (locale === "auto") {
        store.delete("NEXT_LOCALE");
        return {};
    }

    if (!i18nConfig.locales.includes(locale))
        return { error: { message: "invalid locale" } };

    store.set("NEXT_LOCALE", locale);

    return {};
}
