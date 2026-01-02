"use client";

import {
    createContext,
    ReactNode,
    useContext,
    useLayoutEffect,
    useState,
} from "react";

type Scroll = {
    x: number;
    y: number;
};

const ScrollContext = createContext<Scroll | undefined>(undefined);

export function useScroll() {
    const context = useContext(ScrollContext);
    if (context === undefined || context === null) {
        throw new Error("useScroll() must be used within <ScrollObserver/>");
    }
    return context;
}

type ScrollObserverProps = {
    children: ReactNode;
};

export default function ScrollObserver({ children }: ScrollObserverProps) {
    const [scroll, setScroll] = useState<Scroll | undefined>(undefined);

    useLayoutEffect(() => {
        const scrollHandler = () => {
            setScroll({
                x: window.scrollX,
                y: window.scrollY,
            });
        };

        // init scroll
        scrollHandler();

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    return (
        scroll && (
            <ScrollContext.Provider value={scroll}>
                {children}
            </ScrollContext.Provider>
        )
    );
}
