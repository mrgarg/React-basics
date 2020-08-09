import React from 'react';

class Welcome extends React.Component{
    render(){
        return (
            <div>
                <br/>
                <br/>
                Class Components
                 <h1>Welcome To {this.props.name} {this.props.sirName}</h1>
            </div>
       )
    }
}
export default Welcome;