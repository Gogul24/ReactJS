import './first.css'
function JsonElement(){
    const item =[
        {
            name:'pen',
            price:'10$'
        },
        {
            name:'pencil',
            price:'5$'
        },
        {
            name:'eraser',
            price:'2$'
        }
    ] 
    return(
 
        <div style={{fontSize:18,color:'red',fontFamily:'sans-serif',textAlign:'center'}}>
            <h1>Json Elements</h1>
            {
                item.map((item)=>(
                    <li>
                        <span>{item.name}</span>&nbsp;-
                        <span>{item.price}</span>
                    </li>
                ))
            }
        </div>
    )
}


export default JsonElement;