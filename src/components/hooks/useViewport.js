import React from 'react'

const isBrowser = typeof window !== "undefined"

export default function useViewport() {
    const [width, setWidth] = React.useState(1000);

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);

    return { width };
}
