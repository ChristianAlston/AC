import React from 'react'
import HeroBox from '../HeroBox/HeroBox'
import './Signup.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Signup = () => {
    return (
        <div>
            <div className='signupwrapper'>
                <HeroBox />
                <h3 className='account'>Create your account with us</h3>
                <form className='signupform'>
                    <input className='input' type='text' placeholder='name' />
                    <input className='input' type='text' placeholder='username' />
                    <input className='input' type='email' placeholder='email' />
                    <input className='input' type='password' placeholder='password must be longer than 8 characters' minLength='8' />
                    <button type='submit' className='submit'>Create Your Account</button>
                </form>
                <Link to='/'><button className='back' type='button'>Back</button></Link>
            </div>
            <Footer />
        </div>
    )
}

export default Signup