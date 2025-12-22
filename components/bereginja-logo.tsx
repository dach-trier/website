type Props = {
    width?: number | string;
    height?: number | string;
};

const BereginjaLogo = (props: Props) => {
    return <img src="/bereginja.svg" alt="bereginja logo" {...props} />;
};

export default BereginjaLogo;
