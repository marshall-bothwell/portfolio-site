import { useState, useEffect } from 'react'

function getWindowSize() {
    const height = window.innerHeight;
    const width = window.innerWidth;

    return {
        height,
        width
    }
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState(getWindowSize())

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        }
    }, [])

    let smallWindow = false

    if (windowSize.width < 740) {
        smallWindow = true;
    } else {
        smallWindow = false;
    }


    return smallWindow;
}

export default useWindowSize;