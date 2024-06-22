import { Component } from "react";

class ChangeExe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productId:'1',
            productName: 'Washing Machine',
            productPrice:27000
        }
        this.change = () => {
            this.setState({
                productPrice: 27000 -(27000*(10/100))
            })
        }
    }

    render() {
        return (
            <div>
                <h1>SAMSUNG WASHING MACHINE</h1>
                <p>(using Change-State)</p>
                <p>Product ID: {this.state.productId}</p>
                <p>Product Name: {this.state.productName}</p>
                <p>Product Price: {this.state.productPrice}</p>
                <p>Click the below button to get 10% Discount</p>
                <button type="button" onClick={this.change}>Discount</button>
            </div>
        )
    }
}

export default ChangeExe;