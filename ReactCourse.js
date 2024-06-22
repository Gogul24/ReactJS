import React,{ Component } from "react";

class ReactCourse extends Component{
    static defaultProps ={
        courseContent:[
            'JSX','ReactProps','React State','React Lifecycle Methods'
        ]
    }

    constructor(props){
        super(props);
        //set initial state
        this.state ={msg:'React Course',content:''}

        //Binding this keyword
        this.handleClick = this.handleClick.bind(this)
    }

    renderContent(){
        return(
            <ul>
                {this.props.courseContent.map(content=>(<li>{content}</li>))}
            </ul>
        )
    }
    handleClick(){
        //changing State
        this.setState({
            msg:'Course Content',
            content:this.renderContent()
        })
    }

    render(){
        return(
            <div>
                <h2>Message :</h2>
                <p>{this.state.msg}</p>
                <p>{this.state.content}</p>
                <button onClick={this.handleClick}>Click here to know contents</button>
            </div>
        )
    }
}

export default ReactCourse;