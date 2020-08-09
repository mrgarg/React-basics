// methods pass as props
// for passing parameters from child to parent :- use arrow function
import React from 'react'
import ChildComponent from './ChildComponent';
class ParentComponent extends React.Component{

    constructor(props){
        super(props)
        this.state={
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(something){
        alert(`Hello ${this.state.parentName} from ${something}`)
    }

    render(){
        return(
            <div>
                <ChildComponent clickHandler = {this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent;