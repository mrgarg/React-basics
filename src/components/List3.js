import React from 'react'


export const List3 = () => {
    const persons =[
        {
            id:1,
            name:"Sahil",
            age:30
        },
        {
            id:2,
            name:"Aman",
            age:30
        },
        {
            id:3,
            name:"Abhishel",
            age:30
        }
    ]
    const per  = persons.map((name)=> <h1>{name.id} and {name.name} and {name.age}</h1>)
    return(
        <div>
            {per}
        </div>

    )
}