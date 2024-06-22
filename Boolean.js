const Boolean =() =>{
    const display1 = true;
    const display2 = false;
    return(
        <div>
            {display1 && <h2>Display - true value</h2>}<br/>
            {display2 && <h2>Display - false value</h2>}
        </div>
    )
}

export default Boolean;