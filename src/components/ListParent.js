import React from 'react'
import { ListChild } from './ListChild'


export const ListParent = () => {
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
    const per  = persons.map((person)=> <ListChild key={person.id} name={person}/>)
    return(
        <div>
            {per}
        </div>

    )
}