import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount () {        
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
                fetch(`http://localhost:8000/api/posts/${this.props.match.params.id}/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Token 782f8d6efb1a05127623c65e77d0887615166556'
                    }
                })
                .then(res => res.json())
                    .then( response => {
                        this.setState( { loadedPost: response } );                       
                    } );
            }
        }
    }

    render () {
        let post = null;
        if ( this.props.match.params.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedPost ) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.content}</p>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;