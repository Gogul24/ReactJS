import { Component } from "react";

class DidMount extends Component{
    constructor(props){
        super(props);
        this.state ={favoriteColor:'red'}
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoriteColor:'green'})
        },1000)
    }

    render(){
        return(
            <h1>
                My Favorite Color is:
                {this.state.favoriteColor}
            </h1>
        )
    }
}

export default DidMount;