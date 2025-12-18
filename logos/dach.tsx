type Props = {
    width?: string | number;
    height?: string | number;
};

export default function DachLogo({ width, height }: Props) {
    return <img src="/dach.svg" alt="dach logo" style={{ width, height }} />;
}
