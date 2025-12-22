type Props = {
    width?: number | string;
    height?: number | string;
};

const GermanFlag = (props: Props) => {
    return <img src="/germany.svg" alt="german flag" {...props} />;
};

export default GermanFlag;
