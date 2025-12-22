type Props = {
    width?: string | number;
    height?: string | number;
};

export default function BritishFlag({ width, height }: Props) {
    return (
        <img
            src="/great-britain.svg"
            alt="flag of great britain"
            style={{ width, height }}
        />
    );
}
