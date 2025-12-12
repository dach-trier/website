type Props = {
    size: number | string;
};

export default function CampLogo({ size }: Props) {
    return <img src="/camp.svg" alt="camp logo" width={size} />;
}
