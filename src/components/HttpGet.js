import React from 'react'
import Axios from 'axios'

class HttpGet extends React.Component{

    constructor(props){
        super(props)
        this.state = {

            data:[]
        }
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({
                data:response.data
            })
        })
        .catch(error => {
            console.log(error);
        })

    }

    render(){
        const  posts =   this.state.data.map(post => <h1 key={post.id}> {post.title}</h1> );
        return(
            <div>
                {posts}
            </div>
        )
    }
}

export default HttpGet;