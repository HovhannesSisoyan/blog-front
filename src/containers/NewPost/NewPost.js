import React, { Component } from 'react';
import { connect } from 'react-redux';

import './NewPost.css';

class NewPost extends Component {
    state = {
        author: null,
        title: '',
        content: '',
        //category: 'Information technology',
    }

    componentDidMount() {
        this.setState({ author: this.props.id })
    }

    postDataHandler = () => {
        fetch('http://127.0.0.1:8000/api/posts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(res => {
            res.id ? alert('Your post added successfully') : alert('Something went wrong. Try again')
        })    
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Category</label>
                <select value={this.state.category} onChange={(event) => this.setState({category: event.target.value})}>
                    <option value="Information technology">Information technology</option>
                    <option value="Business">Business</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        logged: state.userState.logged,
        id: state.userState.id
    };
};

export default connect(mapStateToProps, null)(NewPost);