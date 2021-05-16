import React from 'react'
import '../styles/logo.css';
import logo from '../images/nurse-logo (1).png'

function Logo() {
    return (
        <div className='logo-div'>
            <div>
                <img src={logo} alt='nurse'/>
            </div>
           <div>
            <p>ablecare</p>
            <p className='ital-para'>Clinique</p>
           </div>
        </div>
    )
}

export default Logo;
