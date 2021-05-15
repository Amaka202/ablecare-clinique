import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import CustomButton from './CustomButton';
import {Link, useHistory} from 'react-router-dom';
import { Button, Loader, Alert } from 'rsuite';
import Logo from './Logo';
import '../styles/auth.css';
import doctor from '../images/undraw_doctor_kw5l.png'

function Login() {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        let userSignedUp = JSON.parse(localStorage.getItem('alblecareAuth'));
        if(userSignedUp){
            if(userSignedUp.email === data.email && userSignedUp.password  === data.password){
                sessionStorage.setItem('isAuth', true)
                history.push('/dashboard')
            }else{
                Alert.error('Wrong Email or password', 4000)
            }
        }else{
            Alert.error('User does not exist', 4000)
        }
    };
    
    const handleRedirectToSignUp = () => {
        history.push('/signup')
    
    }

    return (
        <div>
            <header className='auth-header-container'>
            <Link to='/' className='auth-link-logo'>
                <Logo />
            </Link>
            <div className='auth-btn-div'>
                <CustomButton handleClick={handleRedirectToSignUp} text='SIGN UP' />
            </div>
            </header>
            <section className="signup-section">
                <div className="signup-text">
                    <h5>Welcome Back!</h5>
                    <p>Login to view dashboard</p>
                    <div>
                    <img src={doctor} alt='Doctor'/>
                    </div>
                </div>
            <form onSubmit={handleSubmit(onSubmit)} className="input-form">
            <h5>Login</h5>

                <div className="form-field">
                    <input name="email" placeholder="Email" 
                        ref={
                            register({
                              required: 'This field is required',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                              }
                            })
                          }
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div className="form-field">
                    <input name="password" placeholder="Password" type='password'
                        ref={
                            register({
                              required: 'This field is required',
                              minLength: {
                                value: 6,
                                message: 'password should be at least 6 characters' 
                              }
                            })
                          }
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                
                <div className="">

                <CustomButton className="primary-btn" type="submit" handleClick={handleSubmit(onSubmit)} text='LOGIN' />
                {/* {loading && <Loader speed="fast" center backdrop content=""  />} */}
                    <p style={{fontSize: '0.8em', color: '#4C506D', marginTop: '1rem'}}>
                        New user? 
                        <Link to="/signup" style={{color: '#4C506D', textDecoration: 'underline', marginLeft: '0.5rem', fontSize: '0.8em'}}>SIGN UP</Link>
                    </p>
                </div>
            </form>
            </section>
        </div>
    )
}

export default Login;
