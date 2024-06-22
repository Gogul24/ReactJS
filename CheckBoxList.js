import { Checkbox } from '@mui/material'
import React,{ Component, useState } from 'react'

const CheckBoxList = ({checkboxes}) =>{
    const [checkState,setCheckState] = useState(new Array(checkboxes.length).fill(false))

    const handleChange = (position) =>{
        const updatedCheck = checkboxes.map((item,index)=>index=== position ?!item:item)
        setCheckState(updatedCheck)
    }

    return(
        <div>
            {
                checkboxes.map((item,index)=>
                <div key={index}>
                    <label>
                        <input type='checkbox'>
                        checked={checkState[index]}
                        onChange ={handleChange}
                        </input>
                        {item}
                    </label>
                </div>)
            }
        </div>
    )
}

export default CheckBoxList;