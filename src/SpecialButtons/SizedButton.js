import {Button} from "../Button";

export const SizedButton = (props) => {
    const {size} = props

    return (
        <Button className={`${size} generic`} onClick={() => console.log(`I am a ${size} button!`)} text={size}/>
    )
}