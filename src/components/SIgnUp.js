import React from 'react'
import { useForm } from "react-hook-form";
import CustomButton from './CustomButton';
import {Link, useHistory} from 'react-router-dom';
import { Button, Loader, Alert } from 'rsuite';
import Logo from './Logo';
import '../styles/auth.css';
import nurse from '../images/undraw_medical_care_movn.png'

function SIgnUp() {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        console.log(data);
    };
    
    const handleRedirectToLogin = () => {
        history.push('/login')
    
    }

    return (
        <div>
            <header className='header-container'>
            <Link to='/' className='link-logo'>
                <Logo />
            </Link>

            <div className='home-btn-div'>
                <CustomButton handleClick={handleRedirectToLogin} text='LOGIN' />
            </div>
            </header>
            <section className="signup-section">
                <div className="signup-text">
                    <h5>Welcome!</h5>
                    <p>Register an individual account</p>
                    <p>to view dashborad</p>
                    <div>
                    <img src={nurse} alt='Nurse'/>
                    </div>
                </div>
            <form onSubmit={handleSubmit(onSubmit)} className="input-form">
                <h5>Register</h5>
                <div className="form-field">
                    <input name="firstname" placeholder="First Name" 
                        ref={
                            register({
                              required: 'This field is required' // JS only: <p>error message</p> TS only support string
                            })
                          }
                    />
                    {errors.firstname && <span>{errors.firstname.message}</span>}
                </div>
                <div className="form-field">
                    <input name="lastname" placeholder="Last Name" 
                        ref={
                            register({
                              required: 'This field is required' // JS only: <p>error message</p> TS only support string
                            })
                          }
                    />
                    {errors.lastname && <span>{errors.lastname.message}</span>}
                </div>
                
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
                <div className="form-field">
                <select name="gender" 
                    ref={
                        register({
                          required: 'This field is required' // JS only: <p>error message</p> TS only support string
                        })
                      }
                >
                    <option value="gender" selected disabled >Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                </select>                    
                {errors.gender && <span>{errors.gender.message}</span>}
                </div>
                <div className="form-field">
                    <select name="jobrole" 
                        ref={
                            register({
                              required: 'This field is required' // JS only: <p>error message</p> TS only support string
                            })
                          }
                    >
                        <option value="jobrole" selected disabled >Job Role</option>
                        <option value="doctor">Doctor</option>
                        <option value="nurse">Nurse</option>
                        <option value="clerk">Clerk</option>
                        <option value="admin">Admin</option>
                    </select>
                    {errors.jobrole && <span>{errors.jobrole.message}</span>}
                </div>
                <div className="form-field">
                    <input name="department" placeholder="department" 
                        ref={
                            register({
                              required: 'This field is required' // JS only: <p>error message</p> TS only support string
                            })
                          }
                    />
                    {errors.department && <span>{errors.department.message}</span>}
                </div>
                <div className="auth-btn">

                <CustomButton  type="submit" handleClick={handleSubmit(onSubmit)} text='SIGN UP' >SIGN UP</CustomButton> 
                {/* {loading && <Loader speed="fast" center backdrop content=""  />} */}
                    <p style={{fontSize: '0.8em', color: '#4C506D', marginTop: '1rem'}}>
                        Already have an account? 
                        <Link to="/login" style={{color: '#4C506D', textDecoration: 'underline', marginLeft: '0.5rem', fontSize: '0.8em'}}>LOGIN</Link>

                    </p>
                </div>
            </form>
            </section>
        </div>
    )
}

export default SIgnUp;
