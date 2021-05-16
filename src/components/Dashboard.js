import React from 'react'
import Logo from './Logo';
import { useHistory, Link} from 'react-router-dom';
import '../styles/dashboard.css';
import CustomFooter from './CustomFooter';
import Dash from './Dash';
import Patients from './Patients';
import CustomButton from './CustomButton';

function Dashboard() {
    const history = useHistory();
    
    const handleLogOut = () => {
        sessionStorage.removeItem('isAuth');
        history.push('/login');
    }

    return (
        <div className='dashboard-container'>
            <header className='dashboard-header'>
                    <Link to='/' style={{color: '#2D3047', textDecoration: 'none', marginLeft: '0.5rem'}} className='dash-logo'>
                    <Logo />
                    
                    </Link>

                <div>
                <CustomButton handleClick={handleLogOut} text='SIGN OUT' />

                </div>
            </header>
            <main>
                <Dash />
                <Patients />
            </main>
            <CustomFooter />
        </div>
    )
}

export default Dashboard;
