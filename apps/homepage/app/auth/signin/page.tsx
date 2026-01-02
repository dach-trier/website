import { getProviders } from "next-auth/react";
import { getTranslations } from "@/i18n/server";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

import SignInForm from "./components/form";

export default async function SignIn() {
    if (await auth()) {
        redirect("/");
    }

    const translations = await getTranslations();

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <SignInForm
                translations={translations["auth"]["signin"]}
                providers={(await getProviders()) ?? []}
            />
        </div>
    );
}
