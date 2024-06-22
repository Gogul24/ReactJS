import { useState } from "react";

const FormValidation = () =>{
    const [InputValue,SetInputValue] =useState(" ")
    const [InpurError,SetInputError] = useState(null)

    const handleSubmit = (event) => {
        const value = event.target.value;
        SetInputValue(value)
    }

    const handleChange =(e) =>{
        e.preventDefault();
        if(InputValue.length>=5){
            SetInputError(null)
            alert('Form submitted sucessfully')
        }
        else{
            SetInputError('Input must be more than 5 character')
        }
    }   
    return(
        <div>
            <form onSubmit={handleSubmit}>
                Enter thr name of the Fruit:
                <input type="text" value={InputValue} onChange={handleChange}/>
                {
                    InpurError && <div style={{color:'red'}}>{InpurError}</div>
                }
            </form>
        </div>
    )
}
export default FormValidation;