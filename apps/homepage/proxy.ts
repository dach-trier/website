import { NextRequest, NextResponse } from "next/server";
import { resolveLocale } from "@/i18n/resolver";

export default async function proxy(request: NextRequest) {
    return NextResponse.next({
        headers: {
            "x-application-locale": resolveLocale(
                request.headers,
                request.cookies,
            ),
        },
    });
}

export const config = {
    //  Match all pathnames except for
    // - if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
    // - the ones containing a dot (e.g. `favicon.ico`)
    matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
