import React from 'react'

const ClickEvents = () => {
    const handleClick = (e) =>{
        e.target.textContent = 'Hellooo'
    }
  return (
        <button onClick={(e)=>handleClick(e)}>Click me</button>
  )
}

export default ClickEvents