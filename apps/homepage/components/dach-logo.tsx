import React from "react";

type Props = Omit<React.ComponentProps<"img">, "src" | "alt">;

const DachLogo = (props: Props) => {
    return <img src="/dach.svg" alt="dach logo" {...props} />;
};

export default DachLogo;
