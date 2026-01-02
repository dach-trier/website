import IconProps from "@/types/icon-props";

const CheckIcon = (props: IconProps) => {
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
                d="m4.5 12.75 6 6 9-13.5"
            />
        </svg>
    );
};

export default CheckIcon;
