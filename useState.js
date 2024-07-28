import React, { useState } from 'react'

const UseState = () => {

    const [name,setName]= useState('Guest');
    const [age,setAge] =useState(0);

    const Reset=()=>{
        setAge(0);
        setName('Guest')
    }
    const handleClick =()=>{
        setName('Gokul')
        setAge(age+1)
    } 

  return (
    <div>
        <p>Name : {name}</p>
        <p>Age : {age}</p>
        <button onClick={handleClick}>Update Name</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default UseState;