import * as path from "path";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    turbopack: {
        root: path.join(__dirname, "."),
    },
    images: {
        remotePatterns: [new URL("https://placehold.co/**")],
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
