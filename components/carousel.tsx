"use client";

import React, { ReactNode, useRef } from "react";
import mergeRefs from "@/utils/merge-refs";

type Props = {
    children?: ReactNode;
    width?: string | number;
    height?: string | number;
    gap?: number;
};

const Carousel = (props: Props) => {
    const { width, height, gap, ...rest } = props;

    const children = React.Children.toArray(rest.children).map((child) => {
        if (React.isValidElement(child)) {
            return child;
        }
        return <span>{child}</span>;
    });

    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const firstRef = useRef<HTMLElement>(null);
    const lastRef = useRef<HTMLElement>(null);
    const offsetRef = useRef<number>(0);

    const ready = () => {
        return (
            containerRef.current !== null &&
            trackRef.current !== null &&
            firstRef.current !== null &&
            lastRef.current !== null
        );
    };

    const validate = () => {
        if (!ready()) {
            return;
        }

        const containerRect = containerRef.current!.getBoundingClientRect();
        const trackRect = trackRef.current!.getBoundingClientRect();
        const firstRect = firstRef.current!.getBoundingClientRect();
        const lastRect = lastRef.current!.getBoundingClientRect();
        const blockSize = lastRect.right - firstRect.left + (gap ?? 0);

        if (trackRect.left >= containerRect.left) {
            containerRef.current!.scrollLeft += blockSize;
            return;
        }

        if (trackRect.right <= containerRect.right) {
            containerRef.current!.scrollLeft -= blockSize;
            return;
        }
    };

    const scrollTo = (offset: number) => {
        if (!ready()) {
            return;
        }

        console.log("???");

        offsetRef.current = offset;
        trackRef.current!.style.left = `-${offset}px`;

        validate();
    };

    const scrollLeft = (n: number) => {
        scrollTo(Math.max(0, offsetRef.current - n));
    };

    const scrollRight = (n: number) => {
        scrollTo(offsetRef.current + n);
    };

    return (
        <div
            ref={containerRef}
            style={{
                width,
                maxWidth: width,
                height,
                maxHeight: height,
                outline: "1px solid #000",
                overflowX: "auto",
                scrollbarWidth: "none",
            }}
            onScroll={validate}
        >
            <div
                ref={trackRef}
                style={{ width: "fit-content", display: "flex", gap }}
            >
                {children}

                {children?.map((child, i) => {
                    if (i === 0) {
                        return React.cloneElement(child, {
                            ref: mergeRefs(child.props.ref, firstRef),
                        });
                    }

                    if (i === children.length - 1) {
                        return React.cloneElement(child, {
                            ref: mergeRefs(child.props.ref, lastRef),
                        });
                    }

                    return child;
                })}

                {children}
            </div>
        </div>
    );
};

export default Carousel;
