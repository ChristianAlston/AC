import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import HeroBox from '../HeroBox/HeroBox'
import Footer from '../Footer/Footer'


const Login = () => {
    return (
        <div className='loginwrap'>
            <div className='imagewrapper'>
                <div className='heroimage'>
                    <HeroBox />
                    <div className='formwrapper'>
                        <form className='form'>
                            <h4 className='into'>Sign in to your account </h4>
                            <input placeholder='username' type='text'></input>
                            <input placeholder='password' type='password'></input>
                            <button type='submit' className='login'>Login</button>
                        </form>
                        <p className='create'>Don't have an account?</p>
                        <Link to='/Signup'> <button className='signup' >Sign up</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login