import { useContext } from "react";
import { RightColorContext } from "../Contexts.js";

export default function ColorBlock() {
    const backgroundColor = useContext(RightColorContext);
    return(
        <div 
            className={`border-6 border-neutral-100 w-24 h-24`}
            style={ {backgroundColor: `${backgroundColor}`} }
        >

        </div>
    )
}