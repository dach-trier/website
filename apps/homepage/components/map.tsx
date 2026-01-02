import { CSSProperties } from "react";

type Props = {
    className?: string;
    style?: Omit<CSSProperties, "position">;
};

const Map = ({ className, style }: Props) => {
    return (
        <div className={className} style={{ position: "relative", ...style }}>
            <div
                style={{
                    position: "absolute",
                    zIndex: 2,
                    width: "100%",
                    height: "100%",
                    boxShadow: "0 0 20px 20px white inset",
                }}
            />

            <img src="/map.svg" alt="map" className="w-full h-full" />
        </div>
    );
};

export default Map;
