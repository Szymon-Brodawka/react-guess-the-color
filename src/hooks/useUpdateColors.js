import { useCallback, useEffect, useRef } from "react";
import useTimeout from "./useTimeout";

export default function useUpdateColors(colorRefs, rightColor, updateHexColors) {
    const DELAY = 1000;
    const { reset } = useTimeout(updateHexColors, DELAY);
    const updateAnwersColor = () => {
        colorRefs.current.forEach((colorRef) => {
            colorRef.style.backgroundColor = colorRef.textContent === rightColor ? "green" : "red"
        });
    }
    
    const update = useCallback(() => {
        reset();
        updateAnwersColor();
    }, [colorRefs, rightColor]);
    

    return { update };
}