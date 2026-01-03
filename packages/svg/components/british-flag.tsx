import type { SVGProps } from "react";

const BritishFlag = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 28 20"
        {...props}
    >
        <g clipPath="url(#great-britain_svg__a)">
            <rect width={28} height={20} fill="#fff" rx={2} />
            <mask
                id="great-britain_svg__b"
                width={28}
                height={20}
                x={0}
                y={0}
                maskUnits="userSpaceOnUse"
                style={{
                    maskType: "alpha",
                }}
            >
                <rect width={28} height={20} fill="#fff" rx={2} />
            </mask>
            <g mask="url(#great-britain_svg__b)">
                <path fill="#0A17A7" d="M0 0h28v20H0z" />
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="m-1.282-1.916 11.949 8.06v-7.477h6.666v7.476l11.95-8.06 1.49 2.211-9.447 6.373H28v6.666h-6.674l9.448 6.373-1.492 2.21-11.949-8.06v7.477h-6.666v-7.476l-11.95 8.06-1.49-2.211 9.447-6.373H0V6.667h6.674L-2.774.294z"
                    clipRule="evenodd"
                />
                <path
                    fill="#E6273E"
                    fillRule="evenodd"
                    d="M0 12h12v8h4v-8h12V8H16V0h-4v8H0z"
                    clipRule="evenodd"
                />
            </g>
        </g>
        <defs>
            <clipPath id="great-britain_svg__a">
                <rect width={28} height={20} fill="#fff" rx={2} />
            </clipPath>
        </defs>
    </svg>
);

export default BritishFlag;
