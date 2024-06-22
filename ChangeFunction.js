import { useState } from "react";

export default function ChangeFunction(){
    const [name,setName] = useState('Gokul')
    const[age,setAge] = useState('23')
    const[location,setLocation] = useState('Coimbatore')

    const handleEvent =()=>{
        setName('Gopal')
        setAge('25')
        setLocation('Mumbai')
    }

    return(
        <div>
            <h1>Functional component - State Modification</h1>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>Location:{location}</p>
            <button type="button" onClick={handleEvent}>Click here to change the value</button>
        </div>
    )
}