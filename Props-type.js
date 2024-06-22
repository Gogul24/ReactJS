import { Component } from "react";
import PropTypes from 'prop-types'

class PropTypes1 extends Component{
    render(){
        return(
            <div>
                <h1>Validation under proccess</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Value</th>
                            <th>Valid</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Array</td>
                            <td>{this.props.propArray}</td>
                            <td>{this.props.propArray ? 'true':'false'}</td>
                        </tr>

                        <tr>
                            <td>Boolean</td>
                            <td>{this.props.propBool}</td>
                            <td>{this.props.propBool ? 'true':'false'}</td>
                        </tr>

                        <tr>
                            <td>Function</td>
                            <td>{this.props.propFunc(200)}</td>
                            <td>{this.props.propFunc(200) ? 'true':'false'}</td>
                        </tr>

                        <tr>
                            <td>String</td>
                            <td>{this.props.propString}</td>
                            <td>{this.props.propString ? 'true':'false'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

PropTypes1.defaultProps = {
    propArray:[1,23,45,6,7],
    propBool:true,
    propFunc:function(x){return x*5},
    propString:"Hello World"
}

export default PropTypes1;