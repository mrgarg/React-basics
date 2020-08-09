import React from 'react'

export const ListChild = ({name}) =>{

    return(
        <div>
            <h1>{name.id} and {name.name} and {name.age}</h1>
        </div>
    )
}