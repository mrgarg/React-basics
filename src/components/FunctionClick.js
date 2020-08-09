import React from 'react'

export const FunctionClick = () => {

    const  clickHandler = () => {
       
        console.log("Button Clicked FUNCTION")
        
    }
    return(
        <div>

            <h1><button onClick={clickHandler}>click</button></h1>
        </div>
    )
}

