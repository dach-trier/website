"use client";

import { useRef, useState, useEffect, useMemo } from "react";

type Props = {
    heading: string;
    content: string;
    date: string;

    width?: number | string;
    height?: number | string;
};

type Dimensions = {
    width: number;
    height: number;
};

// prettier-ignore
const containerStyle = {
    horizontal: { gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto"  },
    vertical:   { gridTemplateColumns: "1fr", gridTemplateRows: "auto auto" },
};

const contentStyle = {
    horizontal: { padding: "50px 30px" },
    vertical: { padding: "30px" },
};

const PostCard = ({ heading, content, date }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState<Dimensions | undefined>(
        undefined,
    );

    useEffect(() => {
        if (ref.current === undefined || ref.current === null) {
            return;
        }

        const observer = new ResizeObserver((entries) => {
            if (entries[0] === undefined) {
                return;
            }

            setDimensions({
                width: entries[0].contentRect.width,
                height: entries[0].contentRect.height,
            });
        });

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    const orientation = useMemo(() => {
        if (dimensions === undefined) {
            return undefined;
        }

        if (dimensions.width > 420) {
            return "horizontal";
        }

        return "vertical";
    }, [dimensions]);

    return (
        <div
            ref={ref}
            className="shadow shadow-strone-300"
            style={{
                display: "grid",
                borderRadius: 4,
                overflow: "clip",
                ...(orientation ? containerStyle[orientation] : {}),
            }}
        >
            {dimensions && (
                <>
                    <div className="bg-stone-100 min-h-50" />

                    <div
                        className="bg-stone-50 flex flex-col"
                        style={{
                            ...(orientation ? contentStyle[orientation] : {}),
                        }}
                    >
                        <h1 className="font-bold text-3xl">{heading}</h1>
                        <div className="h-5" />
                        <p>{content.slice(0, 90) + "..."}</p>
                        <div className="h-5" />
                        <p className="mt-auto">{date}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default PostCard;
