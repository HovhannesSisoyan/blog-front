import React, { Component } from 'react';
import  { Route, Link, Switch } from 'react-router-dom';
import Posts from '../Posts/Posts'
import NewPost from '../NewPost/NewPost';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';
import FullPost from '../FullPost/FullPost';
import { connect } from 'react-redux';

import './Blog.css';

class Blog extends Component {

    render () {       
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='new-post'>New Post</Link></li>
                            {!this.props.logged && <li><Link to='register'>Register</Link></li>}
                            {!this.props.logged && <li><Link to='login'>Login</Link></li>}
                            {this.props.logged && <li><button onClick={this.props.onLogoutDone}>Logout</button></li>}
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path='/' exact component={Posts}/>
                    <Route path='/new-post' exact component={NewPost}/>
                    <Route path='/register' exact component={RegistrationForm}/>
                    <Route path='/login' exact component={LoginForm}/>
                    <Route path='/:id' exact component={FullPost}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        logged: state.userState.logged,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogoutDone: () => dispatch({
            type: 'LOGOUT_DONE',
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);