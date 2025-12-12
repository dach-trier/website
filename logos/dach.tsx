type Props = {
    size: number | string;
};

export default function DachLogo({ size }: Props) {
    return <img src="/dach.svg" alt="dach logo" width={size} />;
}
