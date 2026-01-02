import React from "react";

type Props = Omit<React.ComponentProps<"img">, "src" | "alt">;

const BritishFlag = (props: Props) => {
    return <img src="/great-britain.svg" alt="british flag" {...props} />;
};

export default BritishFlag;
