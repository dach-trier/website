type Props = {
    width?: number | string;
    height?: number | string;
};

const UkrainianFlag = (props: Props) => {
    return <img src="/ukraine.svg" alt="ukrainian flag" {...props} />;
};

export default UkrainianFlag;
