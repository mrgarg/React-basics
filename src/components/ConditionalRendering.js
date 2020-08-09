import React from 'react'


class ConditionalRendering extends React.Component{

    constructor(props){
        super(props)
        this.state={
            LoggedIn : true
        }
    }


    render(){

        return(
            this.state.LoggedIn ? (<div>Hello Sahil</div>) : (<div>Hello Guest</div>) 
        );
        

    //     let msg
    //     if(this.state.LoggedIn){
    //         msg = <div>Hello Sahil</div>
    //     }
    //     else{
    //         msg = <div>Hello Guest</div>
    //     }

    // return(<div>{msg}</div>)


    //     if(this.state.LoggedIn){
    //         return(
    //             <div>
    //                 <h1>Hello Sahil</h1>
    //             </div>
    //         )
    //     }
    //     else{
    //         return(
    //             <div>
    //                 <h1>Hello Guest</h1>
    //             </div>
    //         )
    //     }
    // }
}
}

export default ConditionalRendering;