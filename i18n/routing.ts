import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "de", "ua"],
    defaultLocale: "en",
    localePrefix: "never",
    localeCookie: true,
    localeDetection: true,
});
