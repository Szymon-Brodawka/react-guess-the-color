import { useContext, useRef } from "react";
import ColorAnswer from "./ColorAnswer";
import { ColorsContext } from "../Contexts.js";

export default function ColorsRow() {
    const colorRefs = useRef([]);
    const { hexColors } = useContext(ColorsContext);

    return(
        <div className="flex flex-row gap-x-5">
            {
                hexColors.map((hexColor, i) => 
                    <ColorAnswer color={hexColor} key={hexColor} index={i} colorRefs={colorRefs}></ColorAnswer>)
            }
        </div>
    )
}