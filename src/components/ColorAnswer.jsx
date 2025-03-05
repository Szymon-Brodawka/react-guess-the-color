import useUpdateColors from "../hooks/useUpdateColors.js";

export default function ColorAnswer( { color, index, colorRefs }){
    //Remove updateHexColors and rightColor
    const { update } = useUpdateColors(colorRefs);

    return(
        <button
            className="bg-neutral-200 text-neutral-900 cursor-pointer px-2 py-2 rounded-3xl hover:bg-neutral-900 transition-colors duration-150 hover:text-neutral-200"
            ref={(element) => colorRefs.current[index] = element}
            onClick={update}
        >
            {color}
        </button>
    )
}