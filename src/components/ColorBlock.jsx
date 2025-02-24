export default function ColorBlock({ backgroundColor }) {
    
    return(
        <div 
            className={`border-2 border-neutral-100 w-10 h-10`}
            style={ {backgroundColor: `${backgroundColor}`} }
        >

        </div>
    )
}