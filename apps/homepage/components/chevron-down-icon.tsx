import IconProps from "@/types/icon-props";

const ChevronDownIcon = (props: IconProps) => {
    const {
        fill = "none",
        stroke = "currentColor",
        strokeWidth = 1.5,
        ...rest
    } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            {...rest}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
};

export default ChevronDownIcon;
