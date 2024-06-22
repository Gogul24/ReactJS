import { Component } from "react";

class Child1 extends Component{
    render(){
        return(
            <div>
                <h1>Child Commponent</h1>
                <p>{this.props.greetings}</p>
                <p>{this.props.quote}</p>
                <p>{this.props.proverb}</p>
            </div>
        )
    }
}

export default Child1;