type Props = {
    width?: number | string;
    height?: number | string;
};

const BritishFlag = (props: Props) => {
    return <img src="/great-britain.svg" alt="british flag" {...props} />;
};

export default BritishFlag;
