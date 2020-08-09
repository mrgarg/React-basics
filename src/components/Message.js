import React from 'react'

class Message extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg: " Welcome Visitors"
        }
    }
    handleClick(){
        this.setState({
            msg:"Thanks For Subscribing"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick= {() => this.handleClick()}>Click</button>
            </div>
        );
    }
    

}

export default Message;