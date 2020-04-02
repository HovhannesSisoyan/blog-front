import React from 'react';

import './Post.css';

class Post extends React.Component {
    state = {
        author: null,
    }
    componentDidMount() {        
        this.getUsernameById(this.props.author)
    }
    getUsernameById(id) {
        fetch(`http://127.0.0.1:8000/api/users/${id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(res => {
            this.setState({author: res.username})
        })
    }
    render() {
        return(
            <article className="Post" onClick={this.props.clicked}>
                <h1>{this.props.title}</h1>
                <div className="Info">
                    <div className="Author">Author: {this.state.author}</div>
                </div>
            </article>
         )
    }
}

export default Post;