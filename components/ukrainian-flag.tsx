type Props = {
    width?: number | string;
    height?: number | string;
};

export default function UkrainianFlag({ width, height }: Props) {
    return (
        <img
            src="/ukraine.svg"
            alt="flag of ukraine"
            style={{ width, height }}
        />
    );
}
