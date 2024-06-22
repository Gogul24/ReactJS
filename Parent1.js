import {Component} from 'react';
import Child1 from './Child1'

class Parent1 extends Component{
    render(){
        return(
        <div>
            <h1>Parent1 Component</h1>
            <Child1 greetings ="Hello World" quote="Morning Quote" proverb="Evening provern"/>
        </div>
        )
    }
}

export default Parent1;