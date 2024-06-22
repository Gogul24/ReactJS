import { Component } from "react";

class getDerived extends Component{
    constructor(props){
        super(props);
        this.state ={favoriteColor:'red'}
    }

    static getDerivedStateFromProps(props,state){
        return{favoriteColor:props.favCol}
    }

    shouldComponentUpdate(){
        return true;
    }
    changeColor=()=>{
        this.setState({favoriteColor:'yellow'})
    }

    render(){
        return(
            <div>
                <h1>
                    My favorite Color is :{this.state.favoriteColor}
                </h1>
                <button type="button" onClick={changeColor}>Click here</button>
            </div>
        )
    }
}

export default getDerived;