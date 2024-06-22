import { Component } from "react";
class InputValue extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'Gokul',
            age:'22',
            gender:'Male'
        }
    }
    handleClick =()=>{
        this.setState({name:document.getElementById('newName').value})
        this.setState({age:document.getElementById('newAge').value})
        this.setState({gender:document.getElementById('newGender').value})
    }

    render(){
        return(
            <div>
                <h1>Getting the input value and change the age</h1>
                <p>Name : {this.state.name}</p>
                <p>Age : {this.state.age}</p>
                <p>Gender : {this.state.gender}</p>
                <input type="text" id="newName" placeholder="Enter your name"></input><br></br>
                <input type="text" id="newAge" placeholder="Enter your age"></input><br></br>
                <input type="text" id="newGender" placeholder="Enter your gender"></input><br></br>
                <button type="button" onClick={this.handleClick}>Click here to change</button>
            </div>
        )
    }
}

export default InputValue;