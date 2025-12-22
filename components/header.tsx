import Link from "next/link";
import DachLogo from "@/components/dach-logo";
import LanguageDropdown from "@/components/language-dropdown";
import DonationButton from "@/components/donation-button";

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
                <DachLogo width={60} height={60} />
            </Link>

            <div className="flex items-center gap-5">
                <DonationButton variant="solid" height={44} />
                <LanguageDropdown x="right" width={44} />
            </div>
        </div>
    );
}
