import {Button} from "../Button";

export const ColorfulButton = (props) => {
    const {color} = props


    // can also build a string like this
    // const string = "I am a " + color + " button"
    return (
        <Button
            className={color}
            onClick={() => console.log(`I am a ${color} button!`)}
        >
            {color}
        </Button>
    )
}