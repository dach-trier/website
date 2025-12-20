"use client";

import React, { ReactNode, useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

type Props = {
    children: ReactNode;
    width?: number | string;
    height?: number | string;
    x?: "left" | "center" | "right";
    y?: "top" | "bottom";
    spacing?: number;
};

function useDropdownState(): [boolean, () => void, () => void, () => void] {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const open = () => {
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
    };

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return [isOpen, open, close, toggle];
}

export interface DropdownRef {
    open(): void;
    close(): void;
    toggle(): void;
}

const Dropdown = React.forwardRef<DropdownRef, Props>((props, ref) => {
    const { width, height, x = "center", y = "bottom", spacing = 5 } = props;

    const children = React.Children.toArray(props.children).map((child) => {
        if (React.isValidElement(child)) {
            return child;
        }

        return <span>{child}</span>;
    });

    if (children.length !== 2) {
        throw new Error(
            "<Dropdown /> expected exactly two children to represent a trigger and a menu. Found " +
                children.length,
        );
    }

    const [isOpen, open, close, toggle] = useDropdownState();

    React.useImperativeHandle(ref, () => ({ open, close, toggle }));

    const triggerRef = useRef<HTMLElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    /**
     * Updates the menu's stylesheets to position itself relative
     * to the dropdown trigger component.
     */
    const setPosition = (
        y: "top" | "bottom",
        x: "left" | "center" | "right",
    ) => {
        if (!menuRef.current) {
            return;
        }

        const menu = menuRef.current;

        menu.style.removeProperty("top");
        menu.style.removeProperty("bottom");
        menu.style.removeProperty("left");
        menu.style.removeProperty("right");
        menu.style.removeProperty("translate");

        switch (y) {
            case "top":
                menu.style.bottom = `calc(100% + ${spacing}px)`;
                break;

            case "bottom":
                menu.style.top = `calc(100% + ${spacing}px)`;
                break;
        }

        switch (x) {
            case "left":
                menu.style.left = "0";
                break;

            case "center":
                menu.style.left = "50%";
                menu.style.translate = "-50% 0";
                break;

            case "right":
                menu.style.right = "0";
                break;
        }

        menu.style.transformOrigin = `${y === "top" ? "bottom" : "top"} ${x}`;
    };

    /**
     * Checks whether the menu is fully visible within the viewport.
     * Ignores CSS transforms.
     */
    const fits = () => {
        if (!window || !menuRef.current) return;

        const menu = menuRef.current;
        const transform = menu.style.transform;
        menu.style.removeProperty("transform");
        const rect = menu.getBoundingClientRect();
        menu.style.transform = transform;
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    /**
     * Determines the optimal position for the menu relative
     * to the trigger element.
     */
    const reposition = () => {
        if (!menuRef.current) return;

        setPosition(y, x);
        if (fits()) return;

        setPosition(y === "top" ? "bottom" : "top", x);
        if (fits()) return;

        setPosition(y, x);
    };

    useEffect(() => {
        if (!isOpen) return;

        reposition();

        window.addEventListener("resize", reposition);
        window.addEventListener("scroll", reposition);

        const detectOutsideClick = (e: MouseEvent) => {
            if (
                menuRef.current &&
                triggerRef.current &&
                !menuRef.current.contains(e.target as Node) &&
                !triggerRef.current.contains(e.target as Node)
            )
                close();
        };

        window.addEventListener("mousedown", detectOutsideClick);

        return () => {
            window.removeEventListener("resize", reposition);
            window.removeEventListener("scroll", reposition);
            window.removeEventListener("mousedown", detectOutsideClick);
        };
    }, [isOpen, reposition]);

    return (
        <div className="relative" style={{ width, height }}>
            {React.cloneElement(children[0]!, {
                ref: triggerRef,
                onClick: (event: MouseEvent) => {
                    children[0]!.props.onClick?.(event);
                    toggle();
                },
            })}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="dropdown-menu-container"
                        ref={menuRef}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: "tween", duration: 0.15 }}
                        className="absolute z-1000"
                    >
                        {children[1]}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
});

export default Dropdown;
