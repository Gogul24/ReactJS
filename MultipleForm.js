import { useState } from "react";

const MultipleForm = ()=>{
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        message:""
    })
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(`Name: ${formData.name},Email:${formData.email},Message: ${formData.message}`)
    }
    const handleChange =(e)=>{
        const {name,value}=e.target;
        setFormData((prevData)=>
            ({...prevData,[name]:value}))
        console.log(setFormData)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Multiple Form Input</h1>
                Name:
                <input type="text" id="name" name="name" value={formData.name}
                onChange={handleChange} required/><br/><br/>
                Email:
                <input type="email" id="email" name="email" value={formData.email}
                onChange={handleChange} required/><br/><br/>
                Message:
                <input type="text" id="message" name="message" value={formData.message}
                onChange={handleChange} required/><br/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default MultipleForm;