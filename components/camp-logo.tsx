type Props = {
    width?: number | string;
    height?: number | string;
};

const CampLogo = (props: Props) => {
    return <img src="/camp.svg" alt="camp logo" {...props} />;
};

export default CampLogo;
