import { useContext, useRef } from "react";
import ColorAnswer from "./ColorAnswer";
import { ColorsContext } from "../Contexts.js";

export default function ColorsRow() {
    const colorRefs = useRef([]);
    const { hexColors } = useContext(ColorsContext);

    return(
        <div className="grid gap-x-5 grid-cols-1 gap-y-8 lg:grid-cols-3">
            {
                hexColors.map((hexColor, i) => 
                    <ColorAnswer color={hexColor} key={hexColor} index={i} colorRefs={colorRefs}></ColorAnswer>)
            }
        </div>
    )
}