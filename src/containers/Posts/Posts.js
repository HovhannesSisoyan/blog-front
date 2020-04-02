import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Post from '../../components/Post/Post'
import './Posts.css'

class Posts extends Component {
    state = {
        posts: [],
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    componentDidMount () {
        fetch('http://localhost:8000/api/posts/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => response.json())
        .then( response => {
            this.setState({posts: response});
        } )
        .catch(error => {
             console.log(error);
        });

    }



    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Link to={'/'+post.id} key={post.id}>
                        <Post  
                            title={post.title}
                            content={post.content}
                            author={post.author}
                            createdAt={post.created_at}
                            clicked={() => this.postSelectedHandler(post.id)}
                        />
                    </Link>
                )
            });
        }
        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}


export default Posts;