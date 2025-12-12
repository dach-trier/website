import { getLogoPath } from "@/logo";

import Link from "next/link";
import LanguageButton from "@/components/language-button/solid";
import DonationButton from "@/components/donation-button/solid";

export function Header() {
    return (
        <div
            className="
                mx-auto py-2
                w-[80%] max-md:w-[95%]
                flex justify-between items-center
            "
        >
            <Link href="/">
                <img className="w-15" src={getLogoPath("dach")} alt="logo" />
            </Link>

            <div className="flex items-center gap-5">
                <DonationButton size={11} showLabel />

                <LanguageButton size={11} alignment="bottom-left" />
            </div>
        </div>
    );
}
