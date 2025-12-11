import { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { getLogoPath } from "@/logo";

import LanguageButton from "@/components/language-button";
import DonationButton from "@/components/donation-button/solid";

export async function generateMetadata(): Promise<Metadata> {
    const translations = (await getTranslations())["maintenance"];
    return { title: translations["title"] };
}

export default async function MaintenancePage() {
    const translations = (await getTranslations())["maintenance"];

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-5 text-nowrap text-center">
            <>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 py-2">
                    <DonationButton size={11} showLabel />
                </div>

                <div className="absolute top-0 right-0 py-2 px-5">
                    <LanguageButton size={11} alignment="bottom-left" />
                </div>
            </>

            <img
                className="w-50 max-xs:w-40"
                src={getLogoPath("dach")}
                alt="logo"
            />
            <h2 className="mt-2 text-4xl max-xs:text-3xl font-bold">
                {translations["title"]}
            </h2>

            <div />

            <p className="text-lg">info@dach-trier.com</p>

            <div className="flex gap-5 text-lg text-blue-500">
                <a href="https://instagram.com/dach_ukr_de" target="_blank">
                    Instagram
                </a>

                <a href="https://facebook.com/DACH.ukr.de" target="_blank">
                    Facebook
                </a>
            </div>
        </div>
    );
}
