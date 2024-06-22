const { Component } = require("react");

class Constructor1 extends Component {
    constructor(props) {
        super(props);
        this.state = {favouriteColor: 'red'}
    }

    render() {
        return (
            <div>
                <h1>
                    my favoutie color: {this.state.favouriteColor}
                </h1>
            </div>
        )
    }
}

export default Constructor1;