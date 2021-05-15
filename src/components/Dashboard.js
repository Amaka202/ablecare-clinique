import React from 'react'
import Logo from './Logo';
import {Link, useHistory} from 'react-router-dom';

import avatar from '../images/user-alt.png';
import '../styles/dashboard.css';
import CustomFooter from './CustomFooter';
import Dash from './Dash';
import Patients from './Patients';

function Dashboard() {
    const history = useHistory();

    let currentUser = JSON.parse(localStorage.getItem('alblecareAuth'));
    
    const handleLogOut = () => {
        sessionStorage.removeItem('isAuth');
        history.push('/login');
    }

    return (
        <div className='dashboard-container'>
            <header className='dashboard-header'>
                <Logo />
                <ul>
                    <li onClick={handleLogOut} style={{cursor:'pointer'}}>LOG OUT</li>
                    <li>
                        <img src={avatar} alt='avatar'/>
                        {currentUser.firstname}
                    </li>
                </ul>
            </header>
            <main>
                <Dash />
                <Patients />
            </main>
            <CustomFooter />
        </div>
    )
}

export default Dashboard
