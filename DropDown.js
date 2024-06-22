import { useState } from "react";

function Dropdown(){
    const[selectOption,setselectOption] = useState('option')
    const handleChange =(event)=>{setselectOption(event.target.value)}
    return(
        <div>
            <h2>Select an option</h2>
            <select value={selectOption} onChange={handleChange}>
                <option value={"Java"}>Java</option>
                <option value={"DSA"}>DSA</option>
                <option value={"HTML"}>HTML</option>
                <option value={"CSS"}>CSS</option>
                <option value={"JS"}>JS</option>
            </select>
            <h2>Select Option:{selectOption}</h2>
        </div>
    )
}
export default Dropdown;