import { Component } from "react";

class Unmounting extends Component{
    constructor(props){
        super(props);
        this.state={show:true}
    }
    delHeader(){
        this.setState({show:false})
    }
    render(){
        let myheader;
        if(this.state.show){
            myheader=<Child/>
        }
        return(
            <div>
                {myheader}
                <h1>UnMounting: componentWillUnmount() function </h1>
                <button type="button" onClick={this.delHeader}>Delete Header</button>
            </div>
        )
    } 
}

class Child extends Component{
    componentWillUnmount(){
        alert('The component named header is unmounted')
    }
    render(){
        return(
            <h1>Hello world</h1>
        )
    }
}
export default Unmounting;