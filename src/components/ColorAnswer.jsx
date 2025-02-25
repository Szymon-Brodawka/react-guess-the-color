export default function ColorAnswer( { color }){
    return(
        <div className="bg-neutral-200 text-neutral-900 cursor-pointer px-2 py-2 rounded-3xl hover:bg-neutral-900 hover:text-neutral-200">
            {color}
        </div>
    )
}