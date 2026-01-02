import React from "react";

type Props = Omit<React.ComponentProps<"img">, "src" | "alt">;

const BereginjaLogo = (props: Props) => {
    return <img src="/bereginja.svg" alt="bereginja logo" {...props} />;
};

export default BereginjaLogo;
