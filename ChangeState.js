import { Component } from "react";

class ChangeState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Gokul',
            age: '22',
            location: 'coimbatore'
        }
        this.change = () => {
            this.setState({
                name: 'raveena',
                age: '25',
                location: 'mumbai'
            })
        }

    }

    render() {
        return (
            <div>
                <h1>change the state value using setState()</h1>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
                <p>Location: {this.state.location}</p>

                <p>
                    <button
                        type="button"
                        onClick={this.change}
                    >click here</button> to change the values
                </p>
            </div>
        )
    }
}

export default ChangeState;