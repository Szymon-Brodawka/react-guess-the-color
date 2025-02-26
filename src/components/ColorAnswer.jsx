import { useContext } from "react";
import { ColorsContext, RightColorContext } from "../Contexts.js";

export default function ColorAnswer( { color }){
    const { updateHexColors } = useContext(ColorsContext);
    const rightColor = useContext(RightColorContext);

    return(
        <div
            onClick={updateHexColors}
            className="bg-neutral-200 text-neutral-900 cursor-pointer px-2 py-2 rounded-3xl hover:bg-neutral-900 transition-colors duration-150 hover:text-neutral-200"
            style={{ backgroundColor: color === rightColor ? "green" : "red" }}
        >
            {color}
        </div>
    )
}