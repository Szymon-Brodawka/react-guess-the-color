import ColorBlock from "./ColorBlock";
import ColorsRow from "./ColorsRow";

export default function Container() {
    return(
        <div className="max-w-7xl flex flex-col items-center justify-center gap-y-15">
            <h1 className="text-2xl">Guess the Color</h1>
            <ColorBlock backgroundColor={"444444"}></ColorBlock>
            <ColorsRow colors={ ["df4929", "3981a0", "6a1574"] }></ColorsRow>
        </div>
    )
}