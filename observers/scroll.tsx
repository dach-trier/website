"use client";

import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

type Scroll = {
    x: number;
    y: number;
};

const ScrollContext = createContext<Scroll | undefined>(undefined);

export function useScroll() {
    return useContext(ScrollContext);
}

type ScrollObserverProps = {
    children: ReactNode;
};

export function ScrollObserver({ children }: ScrollObserverProps) {
    const [scroll, setScroll] = useState<Scroll | undefined>(undefined);

    useEffect(() => {
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
        <ScrollContext.Provider value={scroll}>
            {children}
        </ScrollContext.Provider>
    );
}
