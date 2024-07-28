import React, { useState } from 'react'

const UsestateTask = () => {
    const [color,setColor]  = useState('#FF0000')
    const handleColor = (e)=>{
        setColor(e.target.value)
    }
  return (
    <div>
        <p>Select color</p>
        <p style={{backgroundColor: color}}>Color Selected : {color}</p>
        <input type="color" value={color} onChange={handleColor}/>
    </div>
  )
}

export default UsestateTask