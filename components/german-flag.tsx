type Props = {
    width?: string | number;
    height?: string | number;
};

export default function GermanFlag({ width, height }: Props) {
    return (
        <img
            src="/germany.svg"
            alt="flag of germany"
            style={{ width, height }}
        />
    );
}
