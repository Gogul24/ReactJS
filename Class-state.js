import { Component } from "react";

class Stateful extends Component{
    constructor(){
        super();
        this.state = {
            data:[
                { name:"MS Dhoni"},
                { name:"Virat Kholi"},
                { name:'Rohit Sharma'},
                { name:'Ravindra Jadeja'}
            ]
        }
    }
    render(){
        return(
            <div>
                <ul>
                    {this.state.data.map((item)=>(
                        <li>{item.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Stateful;