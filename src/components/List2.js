import React from 'react'

export const List2 = () => {

    const names = ["Sahil","Aman","Abhishek"]
    const name = names.map((name)=> <h1> {name}</h1> )
    return <div> {name} </div>
}