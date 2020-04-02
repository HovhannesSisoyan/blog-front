import React, { Component } from 'react';
import Input from '../../components/Input/Input';
import './LoginForm.css';
import { connect } from 'react-redux';

class LoginForm extends Component {

    state = {
    }

    inputChangedHandler = (event, name) => {
        this.setState({
            [name]: event.target.value,
        })
        
    }

    submitFormHandler = () => {
       
        fetch('http://127.0.0.1:8000/auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(res => {
            if (res.token) {              
                this.props.onLoginDone(res.id, res.username, res.email, res.token)            
                alert('You have login successfully');
                this.props.history.push('/')
             } else {
                alert('Something went wrong. Try again')
             } 
        })      
    }
        

    render () {      
        return (
            <div className='login-form'>
                <Input label='username' onChange={(event) => this.inputChangedHandler(event, 'username')}/>
                <Input label='password' type='password' onChange={(event) => this.inputChangedHandler(event, 'password')}/>
                <button onClick={this.submitFormHandler}>Login</button>
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
        onLoginDone: (id, username, email, token) => dispatch({
            type: 'LOGIN_DONE',
            payload: {
                id,
                username,
                email,
                token,
            } 
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);