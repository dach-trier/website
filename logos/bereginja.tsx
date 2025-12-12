type Props = {
    size: number | string;
};

export default function BereginjaLogo({ size }: Props) {
    return <img src="/bereginja.svg" alt="bereginja logo" width={size} />;
}
