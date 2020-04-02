import React, { Component } from 'react';
import Input from '../../components/Input/Input';
import './RegistrationForm.css';

class RegistrationForm extends Component {

    state = {
    }

    inputChangedHandler = (event, name) => {
           
        this.setState({
            [name]: event.target.value,
        })
        
    }

    submitFormHandler = () => {
        fetch('http://127.0.0.1:8000/api/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        })
        .then(res => {
            if(res.ok) {
                alert('You have registered successfully')
                this.props.history.push('/')
            } else {
                alert('Something went wrong. Try again')
            }
        })        
    }
        

    render () {
        return (
            <div className='registration-form'>
                <Input label='email' type='email' onChange={(event) => this.inputChangedHandler(event, 'email')}/>
                <Input label='username' onChange={(event) => this.inputChangedHandler(event, 'username')}/>
                <Input label='password' type='password' onChange={(event) => this.inputChangedHandler(event, 'password')}/>
                <button onClick={this.submitFormHandler}>Register</button>
            </div>
        );
    }
}

export default RegistrationForm;