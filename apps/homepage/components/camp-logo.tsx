import React from "react";

type Props = Omit<React.ComponentProps<"img">, "src" | "alt">;

const CampLogo = (props: Props) => {
    return <img src="/camp.svg" alt="camp logo" {...props} />;
};

export default CampLogo;
