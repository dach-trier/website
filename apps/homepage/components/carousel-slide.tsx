import React from "react";

const CarouselItem = (
    props: React.ComponentPropsWithRef<"div"> & { size?: string },
) => {
    const { className, size, style, ...rest } = props;
    return (
        <div
            style={{ flex: `0 0 ${size ?? "100%"}`, ...style }}
            className={`embla__slide select-none ${className}`}
            {...rest}
        />
    );
};

export default CarouselItem;
