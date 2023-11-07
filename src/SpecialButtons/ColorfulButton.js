import {Button} from "../Button";

export const ColorfulButton = (props) => {
    const {color} = props

    return (
        <Button className={color} onClick={() => alert(`I am a ${color} button!`)} text={color}/>
    )
}