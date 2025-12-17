"use client";

import { ReactNode, useState, useMemo } from "react";

import Shade from "@/ui/shade";
import Color from "@/ui/color";
import State from "@/ui/state";
import blend from "@/ui/blend";

type ButtonProps = {
    children: ReactNode;

    foregroundColor?: Color;
    foregroundShade?: Shade;
    backgroundColor?: Color;
    backgroundShade?: Shade;
};

export default function Button({
    children,
    foregroundColor = "black",
    foregroundShade = "normal",
    backgroundColor = "white",
    backgroundShade = "normal",
}: ButtonProps) {
    const [state, setState] = useState<State>("cold");

    const foreground = useMemo(
        () => blend({ color: foregroundColor, shade: foregroundShade }),
        [foregroundColor, foregroundShade],
    );

    const background = useMemo(
        () => blend({ color: backgroundColor, shade: backgroundShade, state }),
        [backgroundColor, backgroundShade, state],
    );

    return (
        <button
            className="
                cursor-pointer select-none
                px-2 py-2 rounded-sm
                shadow-xl
                transition-colors
            "
            onMouseLeave={() => setState("cold")}
            onMouseEnter={() => setState("hot")}
            onMouseDown={() => setState("active")}
            onMouseUp={() => setState("hot")}
            style={{ color: foreground, backgroundColor: background }}
        >
            {children}
        </button>
    );
}
