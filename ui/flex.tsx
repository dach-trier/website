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
    justify?: JustifyContent;
    align?: AlignItems;
    gap?: number;
};

export default function Flex({ children, justify, align, gap }: Props) {
    return (
        <div
            className="flex"
            style={{ justifyContent: justify, alignItems: align, gap }}
        >
            {children}
        </div>
    );
}
