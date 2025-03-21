import { useCallback, useContext } from "react";
import useTimeout from "./useTimeout";
import { ColorsContext, RightColorContext } from "../Contexts";

export default function useUpdateColors(colorRefs) {
    const DELAY = 2000;
    const { updateHexColors } = useContext(ColorsContext);
    const rightColor = useContext(RightColorContext);
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