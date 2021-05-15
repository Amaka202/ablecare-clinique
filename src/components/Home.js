import React from 'react'
import Logo from './Logo';
import CustomButton from './CustomButton';
import {Link, useHistory} from 'react-router-dom';
import '../styles/home.css';
import CustomFooter from './CustomFooter';
import heroImage from '../images/undraw_medicine_b1ol.png'

function Home() {
    const history = useHistory();

    const handleRedirectToLogin = () => {
        history.push('/login')

    }

    const handleRedirectToSignUp = () => {
        history.push('/signup')

    }

    return (
        <div>
            <header className='header-container'>
            <Link to='/' className='link-logo'>
                <Logo />
            </Link>
            <Link to='/dashboard' className='nav-text' style={{color: '#2D3047', textDecoration: '', marginLeft: '0.5rem'}}>
                <p >DASHBOARD</p>
            </Link>
            <div className='home-btn-div'>
                <CustomButton handleClick={handleRedirectToLogin} text='SIGN IN' />
            </div>
            </header>
            <main className='main-container'>
                <div className='main-content'>
                    <div className='hero-text'>
                        <h1>Hospital Management</h1>
                        <h3>For AbleCare  
                            <span> Clinique</span>
                        </h3>
                        <p>Not just better healthcare, but a better healthcare experience.</p>
                        <p>Are you a staff? register to view hospital metrics</p>
                        <div className='hero-text-btn'>
                            <CustomButton handleClick={handleRedirectToSignUp} text='GET STARTED' />
                        </div>
                    </div>
                    <div className='hero-image'>
                        <img src={heroImage} alt='a doctor and a nurse'/>
                    </div>
                </div>
            </main>
            <footer>
                <CustomFooter />
            </footer>
        </div>
    )
}

export default Home;
