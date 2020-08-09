import React from 'react'

class ClassClick extends React.Component {

    clickHandler(){
        console.log("Class Button Clicked")
    }
        render(){
            return(
                <div>
                    <button onClick={this.clickHandler}>click</button>
                </div>
            )
        }
}

export default ClassClick;