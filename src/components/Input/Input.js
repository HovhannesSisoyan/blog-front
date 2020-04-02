import React from 'react'
import './Input.css'

const input = (props) => {
    return (
        <div className='Input'>
            <label className='Label'>{props.label}</label>
            <input className='input' {...props}/>
        </div>
    );
};

export default input