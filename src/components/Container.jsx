import ColorBlock from "./ColorBlock";
import ColorsRow from "./ColorsRow";
import { ColorsContext } from "../Contexts/ColorsContext";
import { RightColorContext } from "../Contexts/RightColorContext";
import { useState } from "react";

function getRandomHexColor() {
    const NUMBER_OF_VALUES = 16;
    const HEX_NUMBER_LENGTH = 6;
    let hexColor = "#";

    for(let i = 0; i < HEX_NUMBER_LENGTH; i++){
        let randomValue = Math.floor(Math.random() * NUMBER_OF_VALUES).toString();

        switch(randomValue){
            case "10":
                randomValue = "A"
            case "11":
                randomValue = "B"
            case "12":
                randomValue = "C"
            case "13":
                randomValue = "D"
            case "14":
                randomValue = "E"
            case "15":
                randomValue = "F"
        }

        hexColor += randomValue;
    }

    return hexColor;
}

function getRandomHexColors() {
    const NUMBER_OF_COLORS = 3;
    const hexColors = [];

    for(let i = 0; i < NUMBER_OF_COLORS; i++)
    {
        let randomHexColor = getRandomHexColor();
        hexColors.push(randomHexColor);
    }

    return hexColors;
}

function getRandomRightColor(colors) {
    const NUMBER_OF_COLORS = colors.length;
    const randomIndex = Math.floor(Math.random() * NUMBER_OF_COLORS);
    const rightColor = colors[randomIndex];

    return rightColor;
}

export default function Container() {
    const [ hexColors, setHexColors ] = useState(getRandomHexColors());
    const [ chosenColor, setChosenColor ] = useState(getRandomRightColor(hexColors));

    const updateHexColors = () => {
        const colors = getRandomHexColors(); 
        setHexColors(colors);
        setChosenColor(getRandomRightColor(colors));
    }

    return(
        <div className="max-w-7xl flex flex-col items-center justify-center gap-y-15">
            <h1 className="text-2xl">Guess the Color</h1>
            <ColorsContext.Provider value={ { hexColors, updateHexColors } }>
            <RightColorContext.Provider value={ chosenColor }>
                <ColorBlock></ColorBlock>
                <ColorsRow></ColorsRow>
            </RightColorContext.Provider>
            </ColorsContext.Provider>
        </div>
    )
}