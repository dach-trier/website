type Props = {
    width?: number | string;
    height?: number | string;
};

export default function CampLogo({ width, height }: Props) {
    return <img src="/camp.svg" alt="camp logo" style={{ width, height }} />;
}
