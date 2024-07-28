import React, { useState } from 'react'

const Onchange = () => {

    const [name,setName] = useState('');
    const [comments,setComments]=useState('');
    const handleChange = (e)=>{
        setName(e.target.value)
    }
    const handleComments = (e)=>{
        setComments(e.target.value)
    }
  return (
    <div>
        <input value={name} placeholder='enter name' onChange={handleChange} />
        <p>Name : {name}</p>
        <textarea value={comments} placeholder='enter comment' onChange={handleComments}></textarea>
        <p>Comments :{comments}</p>
    </div>
  )
}

export default Onchange;