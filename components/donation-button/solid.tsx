import { getTranslations } from "@/i18n/server";

import Heart from "@/icons/heart/solid";

type Props = {
    size?: number;
    showLabel?: boolean;
};

export default async function DonationButton(props: Props) {
    const translations = (await getTranslations())["components"]["donation-button"]; // prettier-ignore
    const size = props.size ?? 0;
    const showLabel = props.showLabel ?? false;

    return (
        <a
            style={{ height: size * 4 }}
            className="
                flex! justify-center items-center
                text-white bg-red-500!
                px-2 py-1 gap-2
                rounded-sm
                hover:bg-red-600! active:bg-red-700!
                transition-colors
                cursor-pointer
            "
            href="https://paypal.me/dachtrier"
            target="_blank"
        >
            <Heart size="90%" />

            {showLabel && (
                <span
                    style={{ fontSize: size * 1.5 }}
                    className={["my-auto mr-1 font-bold"].join(" ")}
                >
                    {translations["donate"]}
                </span>
            )}
        </a>
    );
}
