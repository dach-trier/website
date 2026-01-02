import React from "react";

type Props = Omit<React.ComponentProps<"img">, "src" | "alt">;

const UkrainianFlag = (props: Props) => {
    return <img src="/ukraine.svg" alt="ukrainian flag" {...props} />;
};

export default UkrainianFlag;
