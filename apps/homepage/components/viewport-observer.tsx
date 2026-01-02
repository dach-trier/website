"use client";

import {
    useLayoutEffect,
    useState,
    ReactNode,
    useContext,
    createContext,
} from "react";

type Viewport = {
    innerWidth: number;
    innerHeight: number;
};

const ViewportContext = createContext<Viewport | undefined>(undefined);

type ViewportObserverProps = {
    children: ReactNode;
};

export function useViewport() {
    const context = useContext(ViewportContext);
    if (context === undefined || context === null) {
        throw new Error(
            "useViewport() must be used within <ViewportObserver/>",
        );
    }
    return context;
}

export default function ViewportObserver({ children }: ViewportObserverProps) {
    const [viewport, setViewport] = useState<Viewport | undefined>();

    useLayoutEffect(() => {
        const resizeHandler = () => {
            setViewport({
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight,
            });
        };

        // init viewport
        resizeHandler();

        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, []);
    return (
        viewport && (
            <ViewportContext.Provider value={viewport}>
                {children}
            </ViewportContext.Provider>
        )
    );
}
