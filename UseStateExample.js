import React, { useState } from 'react'

const UseStateExample = () => {

   const [num,setNum] = useState(0);

const increament = ()=>{
    setNum(num+1);
}
const decreament =()=>{
    setNum(num-1);
}
const Reset = ()=>{
    setNum(0);
}
  return (
    <div>
        <p>{num}</p>
        <button onClick={increament}>Increament</button>
        <button onClick={decreament}>Decreament</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default UseStateExample