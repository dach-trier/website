import { getLogoPath } from "@/logo";

import Link from "next/link";
import LanguageButton from "@/components/language-button";

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

            <LanguageButton className="w-11 h-11" />
        </div>
    );
}
