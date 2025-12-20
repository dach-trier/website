import { ReactNode } from "react";

type JustifyContent =
    | "start"
    | "end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";

type AlignItems = "start" | "end" | "center" | "stretch";

type Props = {
    children?: ReactNode;
    direction?: "row" | "column";
    justify?: JustifyContent;
    align?: AlignItems;
    gap?: number;
};

export default function Flex({
    children,
    direction,
    justify,
    align,
    gap,
}: Props) {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: direction,
                justifyContent: justify,
                alignItems: align,
                gap,
            }}
        >
            {children}
        </div>
    );
}
