import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

import SignInForm from "./components/form";

export default async function SignIn() {
    if (await auth()) {
        redirect("/");
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <SignInForm providers={(await getProviders()) ?? []} />
        </div>
    );
}
