function ArrayElements(){
    const item = ['pen','paper','eraser']
    const fruits =['apple','orange','banana']
    const display = (event,message) =>{alert(event.target.id);
                                        alert(message)}
    return(
        <div>
            <h1>Array element 1</h1>
            <ul>
                {item.map((item)=>(
                    <li>{item}</li>
                ))}
            </ul>
            <h1>Array Elements 2</h1>
            <ol>
                {fruits.map((x)=>(
                    <li>{x}</li>
                ))}
            </ol>
            <button id="myId" onClick={(event)=>display(event,"Hello There")}>Click here ;)</button>
        </div>
    )
}

export default ArrayElements;