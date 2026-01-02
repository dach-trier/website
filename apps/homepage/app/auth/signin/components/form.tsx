"use client";

import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, LiteralUnion, signIn } from "next-auth/react";

import Image from "next/image";

type Props = {
    translations: any;
    providers:
        | Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>
        | never[];
};

export default function SignInForm({ translations, providers }: Props) {
    return (
        <div className="flex flex-col gap-10">
            <Image
                src="https://placehold.co/200x200"
                width={200}
                height={200}
                alt="logo"
                unoptimized
            />

            {Object.values(providers).map((provider) => (
                <button
                    className="
                        px-6 py-3
                        rounded-sm
                        outline-2 outline-stone-900
                        font-medium
                        cursor-pointer
                        hover:text-white hover:bg-stone-900
                        transition-colors
                    "
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                >
                    {translations["button"].replace(
                        "{provider}",
                        provider.name,
                    )}
                </button>
            ))}
        </div>
    );
}
