"use client";

import { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";

type Props = {
    children?: ReactNode;
    width?: string | number;
    height?: string | number;
};

const Carousel = (props: Props) => {
    const { width, height, children } = props;
    const [emblaRef] = useEmblaCarousel({ loop: true });

    return (
        <div
            style={{ width, height }}
            className="embla overflow-hidden"
            ref={emblaRef}
        >
            <div className="embla__container flex">{children}</div>
        </div>
    );
};

export default Carousel;
