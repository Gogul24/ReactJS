import { useState } from "react";

export default function ExeChangeFunction(){
    const [productid,setid] = useState('1021')
    const[productname,setname] = useState('Washing Machine')
    const[productprice,setprice] = useState(27000)

    const handleEvent =()=>{
        setprice(27000 -(27000*(10/100)))
    }

    return(
        <div>
            <h1>SAMSUNG WASHING MACHINE</h1>
            <p>(using Change-Function)</p>
            <p>Product ID:{productid}</p>
            <p>Product Name:{productname}</p>
            <p>Price:{productprice}</p>
            <button type="button" onClick={handleEvent}>Click here to get Discount Price</button>
        </div>
    )
}