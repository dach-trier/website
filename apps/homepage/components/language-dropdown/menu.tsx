"use client";

import React, { ReactNode, MouseEvent } from "react";

type Props = {
    children?: ReactNode;
    onSelection?(selection: "en" | "de" | "uk"): void;
};

const Menu = React.forwardRef<HTMLDivElement, Props>(
    ({ onSelection, ...props }: Props, ref) => {
        const children = React.Children.toArray(props.children)
            .map((child) => {
                if (React.isValidElement(child)) return child;

                return <span>{child}</span>;
            })
            .map((child) =>
                React.cloneElement(child, {
                    onClick: (event: MouseEvent) => {
                        if (child.props.locale) {
                            onSelection?.(child.props.locale);
                        }
                        child.props.onClick?.(event);
                    },
                }),
            );

        return (
            <div
                ref={ref}
                className="
                    w-60 py-3 rounded-sm
                    bg-white 
                    outline outline-stone-300
                    shadow-lg
                "
            >
                {children}
            </div>
        );
    },
);

export default Menu;
