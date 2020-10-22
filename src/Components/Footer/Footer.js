import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <ul className='listoficons'>
                <li><i class="fab fa-facebook-f"></i></li>
                <li><i class="fab fa-twitter"></i></li>
                <li><i class="fab fa-instagram"></i></li>
            </ul>
            <p className='copyright'>Apartment Concierge 2020</p>
        </div>
    )
}

export default Footer