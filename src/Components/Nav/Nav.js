import React from 'react'
import Burger from '../Burger/Burger'

import './Nav.css'

const Nav = () => {
    return (
        <div>
            <div className='navdiv'>
                <Burger />
                <ul className='navlist'>
                    <li className='navlink'>Home</li>
                    <li className='navlink'>Favorites</li>
                    <li className='navlink'>My Profile</li>
                    <li className='navlink'>Logout</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav