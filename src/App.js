import "./App.css"
import {ColorfulButton} from "./SpecialButtons/ColorfulButton";
import {SizedButton} from "./SpecialButtons/SizedButton";
import {Button} from "./Button";


function App() {
    const colors = ['blue', 'red', 'green', 'yellow']
    const sizes = ['small', 'medium', 'large']
    const contents = [
        <span>span tag</span>,
        <img src={'http://placekitten.com/150/155'} alt={'cat'}/>,
        <>
            <div>multiple elements</div>
            <img src={'http://placekitten.com/100/175'} alt={'cat'}/>
        </>
    ]

    return (
        <div className="container">
            <div>
                <Button
                    onClick={() => console.log('...from the other side')}
                    content="Hello"
                />
            </div>
            <div>
                {
                    colors.map((color) => (
                        <ColorfulButton color={color}/>
                    ))
                }
            </div>
            <div>
                {
                    sizes.map((size) => (
                        <SizedButton size={size}/>
                    ))
                }
            </div>
            <div>
                {
                    contents.map((content) => (
                        <Button content={content}/>
                    ))
                }
            </div>
        </div>
    );
}

export default App;
