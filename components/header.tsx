import { getLogoPath } from "@/logo";

import Link from "next/link";
import LanguageButton from "@/components/language-button";
import DonationButton from "./donation-button";

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
                <>
                    <DonationButton
                        className="w-11 h-11 s:hidden"
                        variant="compact"
                    />

                    <DonationButton
                        className="h-11 pl-2 pr-3 max-s:hidden"
                        variant="wide"
                    />
                </>

                <LanguageButton size={11} alignment="bottom-left" />
            </div>
        </div>
    );
}
