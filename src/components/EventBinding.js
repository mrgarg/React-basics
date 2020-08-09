// so four way of binding
// 1) use arrow function while defining event handler function
// 2) binding in constructor
// 3) binding while rendering
// 4) use arrow function in rendering onClick


import React from 'react'

class EventBinding extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg: "Hello"
        }
        //this.handleClick = this.handleClick.bind(this); // used when without arrow function is render on click 
    }
    // handleClick(){
    //     this.setState({
    //         msg:"Thanks For Subscribing"
    //     })
    // console.log(this);
    // }
    handleClickArrow=()=>{
        this.setState({
               msg:"Thanks For Subscribing"
        })

    }
    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                {/* <button onClick= {this.handleClick}>Click</button> */}
                {/* <button onClick= {()=> this.handleClick()}>Click</button> */}

                <button onClick= {this.handleClickArrow}>Click</button>

            </div>
        );
    }
    

}

export default EventBinding;