import { Component } from "react";
class StyleProperty extends Component{
    render(){
        const element ="myId";
        const message1 = "Class Component"
        const message2 = "style Property"
        return(
            <div>
                <h1 id={element}>{message1}</h1>
                <h2>{message2}</h2>
                <h3>Testing</h3>
            </div>
        )
    }
}

export default StyleProperty;