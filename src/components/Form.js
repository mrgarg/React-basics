import React from 'react'


class Form extends React.Component{

    constructor(props){
        super(props)
        this.state={
            userName:'',
            comments:'',
            topic:'react'
        }
    }
    nameHandler = event => {
        this.setState({
            userName: event.target.value
        })
    }

    commentHandler = event => {
        this.setState({
            comments:event.target.value
        })
    }
    
    topicHandler = event => {
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault() // to prevent default behaviour of form in which data is erased
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
    }
    render(){

        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User Name</label>
                    <input 
                    type ="text"
                    value={this.state.userName} 
                    onChange={this.nameHandler}/>
                </div>

                <div>
                    <label>Comments</label>
                    <textarea
                        value = {this.state.comments}
                        onChange={this.commentHandler}
                    />
                </div>

                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.topicHandler}>
                        <option value="reac"> react</option>
                        <option value ="vue"> vue</option>
                        <option value ="angular">angular</option>
                    </select>
                </div>
                <button type="submit">Submit</button>

               
            </form>
        )
    }

}

export default Form;