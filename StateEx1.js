import { Component } from "react";


export default class StateExample extends Component(){
    state={
        username:'Gokul',
        userage:'22'
    }
    render(){
        return(
            <div>
                <h1>{this.state.username}</h1>
                <h1>{this.state.userage}</h1>
            </div>
        )
    }
}