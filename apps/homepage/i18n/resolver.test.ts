import { resolveLocale } from "./resolver";
import i18nConfig from "@/i18n.config";

test("resolve locale with no headers to inspect", () => {
    expect(resolveLocale(new Headers())).toBe(i18nConfig.default);
});

test("russian should normalize to ukrainian", () => {
    expect(resolveLocale(new Headers({ "Accept-Language": "ru" }))).toBe("uk");
});

test("should select the first preferred locale", () => {
    expect(
        resolveLocale(
            new Headers({
                "Accept-Language": "ja;q=0.9,de;q=0.8,ua;q=0.7,en;q=0.6",
            }),
        ),
    ).toBe("de");
});

test("should fall back to default if no supported locale could be found", () => {
    expect(
        resolveLocale(
            new Headers({
                "Accept-Language": "ja;q=0.9,ch;q=0.8,sp;q=0.7,fr;q=0.6",
            }),
        ),
    ).toBe(i18nConfig.default);
});
