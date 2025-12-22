type Props = {
    width?: number | string;
    height?: number | string;
    stroke?: string;
    strokeWidth?: number;
};

export default function CheckIcon({
    width,
    height,
    stroke = "currentColor",
    strokeWidth = 1.5,
}: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke={stroke}
            strokeWidth={strokeWidth}
            width={width}
            height={height}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
            />
        </svg>
    );
}
