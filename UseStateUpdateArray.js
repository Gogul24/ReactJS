import React, { useState } from 'react'

const UseStateUpdateArray = () => {
    const [fruits,setFruits] = useState(['apple','orange','banana'])

    const deleteItem =(index)=>{
        setFruits(fruits.filter((element,i)=>i!==index))
    }

    const addFruit= ()=>{
        const newFruit = document.getElementById('fruitsId').value.trim()
        document.getElementById('fruitsId').value = ''

        if(newFruit ===""){
            const errorMsg  = document.createElement('p');
            errorMsg.textContent = `Invalid values`
            document.getElementById('error').appendChild(errorMsg)
        }else{
            setFruits(f=>[...f,newFruit]);
        }
        
        
    }
  return (
    <div>
        <h1>Fruits List</h1>
        <ul>
            {
                fruits.map((fruit,index)=>
                     <li key={index} onClick={()=>deleteItem(index)}>{fruit}</li>)                
            }
        </ul>
        <input type="text" id='fruitsId' />
        <button onClick={addFruit}>Add</button>
        <p>click on the item to delete</p>
        <div id='error'></div>
        
    </div>
  )
}

export default UseStateUpdateArray