import { useState } from "react";
function InputvalueFunction(){
    const [value,setValue] = useState("");
    function handleChange(event){
        //gives the value of the target element
        let value = event.target.value;
        setValue(value);
    }

    return(
        <div>
            <h3>
                Using the <i> handleChange() function </i> with inputs in react functional components
            </h3>
            <input placeholder="type something " type="text" onChange={handleChange} value={value}></input><br></br><br></br>
            <div style={{color:'blue'}}>
                The text entered in the input field is {value}
            </div>
        </div>
    )
}

export default InputvalueFunction;