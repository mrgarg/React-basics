// methods pass as props
// for passing parameters from child to parent :- use arrow function
import React from 'react'
import { Destructuring_props } from './Destructuring_props'

function ChildComponent(props){


    return(

        <div>
            <button onClick={() => props.clickHandler(`Child`)}>Click</button>
        </div>
    )


}

export default ChildComponent;