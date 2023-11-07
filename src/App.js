import "./App.css"
import {ColorfulButton} from "./SpecialButtons/ColorfulButton";
import {SizedButton} from "./SpecialButtons/SizedButton";
import {Button} from "./Button";


function App() {
    const colors = ['blue', 'red', 'green', 'yellow']
    const sizes = ['small', 'medium', 'large']

    return (
        <div className="container">
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
                <Button
                    onClick={() => console.log('...from the other side')}
                    text="Hello"
                />
            </div>
        </div>
    );
}

export default App;
