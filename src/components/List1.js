import React from 'react'

export const List1 = () => {

    const names = ["Sahil","Aman","Abhishek"]
    return(
        <div>
            {
            names.map((name,index)=> <h1 key={index}> {name}</h1> )
            }
        </div>
        
    )
}