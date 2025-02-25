import { useContext } from "react"
import { RightColorContext } from "../Contexts/RightColorContext"

export default function ColorBlock() {
    const backgroundColor = useContext(RightColorContext);
    return(
        <div 
            className={`border-2 border-neutral-100 w-10 h-10`}
            style={ {backgroundColor: `${backgroundColor}`} }
        >

        </div>
    )
}