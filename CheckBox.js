import { useState } from "react";

const CheckBox = () =>{
    const [isChecked,setIsChecked]=useState(false)
    const handleChange=(event)=>{setIsChecked(event.target.value)}
    return(
        <div>
            <h2>Color :</h2>
            <input type="checkbox" name="color" checked={isChecked} onChange={handleChange}></input>
            Blue
            {isChecked && <div>Blue is Selected</div>}
        </div>
    )
}

export default CheckBox;