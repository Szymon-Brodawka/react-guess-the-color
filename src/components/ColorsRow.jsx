import { useContext } from "react";
import ColorAnswer from "./ColorAnswer";
import { ColorsContext } from "../Contexts.js";

export default function ColorsRow() {
    const { hexColors } = useContext(ColorsContext);
    
    return(
        <div className="flex flex-row gap-x-5">
            {
                hexColors.map((hexColor) => <ColorAnswer color={hexColor} key={hexColor}></ColorAnswer>)
            }
        </div>
    )
}