"use client";

import styles from "./styles.module.css";
import { useViewport } from "@/components/viewport-observer";
import { Carousel, CarouselSlide } from "@dach/ui";

type SectionProps = {
    alignment: "start" | "end";
    heading: string;
    content: string;
};

const Section = (props: SectionProps) => {
    const viewport = useViewport();

    return (
        <div
            className={[
                styles["section"],
                props.alignment === "start"
                    ? styles["section-left"]
                    : styles["section-right"],
            ].join(" ")}
        >
            <div className={styles["content"]}>
                <h1>{props.heading}</h1>
                <p>{props.content}</p>
            </div>

            <Carousel
                className={styles["slides"]}
                align={
                    viewport.innerWidth >= 1024 && props.alignment === "start"
                        ? "end"
                        : "start"
                }
            >
                {Array.from({ length: 5 }).map((_, index) => {
                    return (
                        <CarouselSlide key={index} className={styles["slide"]}>
                            <div>{index}</div>
                        </CarouselSlide>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Section;
