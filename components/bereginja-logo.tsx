type Props = {
    width?: string | number;
    height?: string | number;
};

export default function BereginjaLogo({ width, height }: Props) {
    return (
        <img
            src="/bereginja.svg"
            alt="bereginja logo"
            style={{ width, height }}
        />
    );
}
