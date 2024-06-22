import { useRef } from "react"
function Uncontrolled(){
    const selectRef = useRef(null)
    const inputRef = useRef(null)
    const checkRef = useRef(null)

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("Input Value :", inputRef.current.value);
        console.log("Select Values :", selectRef.current.value);
        console.log("Checked Value :",checkRef.current.checked);
    }

    return(  
        <form onSubmit={handleSubmit}>
            Name:
            <input type="text" ref={inputRef}></input>
            Favorite Color :
            <select ref={selectRef}>
                <option value={"red"}>Red</option>
                <option value={"blue"}>Blue</option>
                <option value={"green"}>Green</option>
            </select><br></br><br></br>
            Do you like react ?
            <input type="checkbox" ref={checkRef}></input>
            <button type="submit">Submit</button>
        </form> 
    )
}
export default Uncontrolled;