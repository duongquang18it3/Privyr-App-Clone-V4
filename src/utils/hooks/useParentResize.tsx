import { useLayoutEffect, useState } from "react";

export const useParentResize = (parentRef: React.RefObject<HTMLDivElement>) => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            if (parentRef && parentRef.current) {
                const { width, height } =
                    parentRef.current?.getBoundingClientRect();
                setSize([width, height]);
            } else {
                setSize([window.innerWidth, window.innerHeight]);
            }
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
};
