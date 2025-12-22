type Props = {
    width?: string | number;
    height?: string | number;
    stroke?: string;
    strokeWidth?: number;
};

export default function ChevronDownIcon({
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
            strokeWidth={strokeWidth}
            stroke={stroke}
            width={width}
            height={height}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}
