import React from 'react'

class Counter extends React.Component{

    constructor(props){
        super(props)
        this.state={
            count: 1
        }
    }
    increaseCounter(){
        // this.setState({
        //     count:this.state.count + 1  // use of current state
        // })
        // this.state.count = this.state.count+1 // never change the state directly
        //console.log(this.state.count)

        this.setState((prevState,props) => ({
            count:prevState.count+ 2   // use of prevState
    }))

    }

    render(){

        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.increaseCounter()}>Click</button>
            </div>
        )
    }
}

export default Counter;