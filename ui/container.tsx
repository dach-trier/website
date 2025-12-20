import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;

    width?: number | string;
    height?: number | string;
    minWidth?: number | string;
    minHeight?: number | string;
    maxWidth?: number | string;
    maxHeight?: number | string;

    ratio?: string;
};

export default function Container({ ratio, children, ...props }: Props) {
    const child = React.Children.only(children);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                aspectRatio: ratio,
                ...props,
            }}
        >
            {child}
        </div>
    );
}
