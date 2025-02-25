import { useContext } from "react"
import ColorAnswer from "./ColorAnswer"
import { ColorsContext } from "../Contexts/ColorsContext"

export default function ColorsRow() {
    const colors = useContext(ColorsContext);
    
    return(
        <div className="flex flex-row gap-x-5">
            {
                colors.map((color) => <ColorAnswer color={color} key={color}></ColorAnswer>)
            }
        </div>
    )
}