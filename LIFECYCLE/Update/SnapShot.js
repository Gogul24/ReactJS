import { Component } from "react";

class SnapShot extends Component{
    constructor(props){
        super(props);
        this.state ={favoriteColor:'red'}
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoriteColor:'blue'})
        },3000)
    }

    getSnapshotBeforeUpdate(preProps,preState){
        document.getElementById('div1').innerHTML="My favorite color is: "+preState.favoriteColor
    }

    componentDidUpdate(){
        document.getElementById('div2').innerHTML="My favorite color is: "+this.state.favoriteColor
    }

    render(){
        return(
            <div>
                <h1>my favorite color is ${this.state.favoriteColor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        )
    }
}