export default {
    /** List of supported locales. */
    locales: ["en", "de", "uk"] as const,

    /** Used when no locale matches */
    default: "en",

    /** Header name used to pass the resolved locale to server components. */
    header: "x-application-locale",

    /** Cookie name used to persist the user’s preferred locale. */
    cookie: "NEXT_LOCALE",
};
