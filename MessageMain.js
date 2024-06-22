import { Component } from "react";
import Logout from "./MessageLogout";
import Login from "./MessageLogin";
import Message from "./Message";

class Main extends Component{
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.state = {isLoggedIn: false}
    }
    handleLogin(){
        this.setState({isLoggedIn:true})
    }
    handleLogout(){
        this.setState({isLoggedIn:false})
    }
    render(){
        return(
            <div>
                <h1>Conditional Rendering Example</h1>
                <Message isLoggedIn = {this.state.isLoggedIn}></Message>
                {
                    (this.state.isLoggedIn) ? (
                        <Logout isclickinfo={this.handleLogout}></Logout>
                    ):(
                        <Login isclickinfo={this.handleLogin}></Login>
                    )
                }
            </div>
        )
    }
}

export default Main;