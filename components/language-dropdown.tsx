"use client";

import { useRef } from "react";

import Dropdown, { DropdownRef } from "@/ui/dropdown";

import Trigger from "@/components/language-dropdown/trigger";
import Menu from "@/components/language-dropdown/menu";
import Item from "@/components/language-dropdown/item";

type Props = {
    width?: number | string;
    height?: number | string;
    x?: "left" | "center" | "right";
    y?: "top" | "bottom";
    spacing?: number;
};

export default function LanguageDropdown({
    width,
    height,
    x,
    y,
    spacing = 0,
}: Props) {
    const dropdownRef = useRef<DropdownRef>(null);

    return (
        <Dropdown
            ref={dropdownRef}
            spacing={spacing}
            {...{ x, y, width, height }}
        >
            <Trigger width="100%" height="100%" />
            <Menu onSelection={() => dropdownRef.current?.close()}>
                <Item locale="en" />
                <Item locale="de" />
                <Item locale="uk" />
            </Menu>
        </Dropdown>
    );
}
