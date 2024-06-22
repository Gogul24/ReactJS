import jsondata from './Data.json'
import { useState } from 'react'
import '../App.css'

const ModernElectroics = () => {
    const [value, setValue] = useState([])

   const handleClick =() =>{
    setValue(
            jsondata.data.map((dat)=>(
                <>
                <tr>
            <td>{dat.id}</td>
            <td>{dat.name}</td>
            <td>{dat.price}</td>
            <td>{dat.qty}</td>
            </tr>
            </>
            
        ))
    )
   }
  return (
    <div class="App">
        <h1>ModernElectroics</h1>
        <div>
            <table border="1" class="center">
                <tr>
                    <th>Prod id</th>
                    <th>Prod Name</th>
                    <th>Price</th>
                    <th>qty</th>
                </tr>
                
                {value}
                
            </table>
            <button type="button" onClick={handleClick}>
            Click to display
        </button> 
        </div>
 
    </div>
  )
}

export default ModernElectroics