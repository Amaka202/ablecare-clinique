import React from 'react'
import '../styles/logo.css';
import logo from '../images/logo (2).png'

function Logo() {
    return (
        <div className='logo-div'>
           <img src={logo} alt="logo"/>
        </div>
    )
}

export default Logo;
