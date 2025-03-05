import { useCallback, useEffect, useRef } from "react";
import useTimeout from "./useTimeout";

export default function useUpdateColors(colorRefs, rightColor, updateHexColors) {
    const { clear, reset } = useTimeout(updateHexColors, 1000);
    const updateAnwersColor = () => {
        colorRefs.current.forEach((colorRef) => {
            colorRef.style.backgroundColor = colorRef.textContent === rightColor ? "green" : "red"
        });
    }
    
    clear();
    const update = useCallback(() => {
        reset();
        updateAnwersColor();
    }, [colorRefs, rightColor]);
    

    return { update };
}