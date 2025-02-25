import { useContext } from "react";
import { ColorsContext } from "../Contexts/ColorsContext";

export default function ColorAnswer( { color }){
    const { updateHexColors } = useContext(ColorsContext);

    return(
        <div
            onClick={updateHexColors}
            className="bg-neutral-200 text-neutral-900 cursor-pointer px-2 py-2 rounded-3xl hover:bg-neutral-900 hover:text-neutral-200">
            {color}
        </div>
    )
}