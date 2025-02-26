import { useContext } from "react";
import { ColorAnswersContext, RightColorContext } from "../Contexts.js";

export default function ColorAnswer( { color, index, colorRefs }){
    const colorRefs = useContext(ColorAnswersContext);
    const rightColor = useContext(RightColorContext);

    const update = () => {
        colorRefs.current.forEach((colorRef) => {
            colorRef.style.backgroundColor = colorRef.textContent === rightColor ? "green" : "red"
        });
    }

    return(
        <div
            className="bg-neutral-200 text-neutral-900 cursor-pointer px-2 py-2 rounded-3xl hover:bg-neutral-900 transition-colors duration-150 hover:text-neutral-200"
            ref={(element) => colorRefs.current[index] = element}
            onClick={update}
        >
            {color}
        </div>
    )
}