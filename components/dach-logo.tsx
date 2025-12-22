type Props = {
    width?: number | string;
    height?: number | string;
};

const DachLogo = (props: Props) => {
    return <img src="/dach.svg" alt="dach logo" {...props} />;
};

export default DachLogo;
