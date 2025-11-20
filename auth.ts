import {
    GetServerSidePropsContext,
    NextApiRequest,
    NextApiResponse,
} from "next";

import { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";

import GoogleProvider from "next-auth/providers/google";

export const config = {
    providers: [
        GoogleProvider({
            clientId: process.env["GOOGLE_CLIENT_ID"]!,
            clientSecret: process.env["GOOGLE_CLIENT_SECRET"]!,
        }),
    ],
    pages: {
        signIn: "/auth/signin",
    },
} satisfies NextAuthOptions;

export function auth(
    ...args:
        | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
        | [NextApiRequest, NextApiResponse]
        | []
) {
    return getServerSession(...args, config);
}
