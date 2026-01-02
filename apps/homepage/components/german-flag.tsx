import React from "react";

type Props = Omit<React.ComponentProps<"img">, "src" | "alt">;

const GermanFlag = (props: Props) => {
    return <img src="/germany.svg" alt="german flag" {...props} />;
};

export default GermanFlag;
