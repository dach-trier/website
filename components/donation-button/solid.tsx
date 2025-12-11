import { getTranslations } from "@/i18n/server";

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
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-9/10 aspect-square"
            >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>

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
