import React from 'react'
import {Button} from 'rsuite';
import '../styles/logo.css';

function CustomButton(props) {
    return (
        <div className='btn-container'>
            <Button onClick={props.handleClick}>{props.text}</Button>
        </div>
    )
}

export default CustomButton;
