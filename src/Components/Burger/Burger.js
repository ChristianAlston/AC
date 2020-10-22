import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import './Burger.css'

const Burger = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <div className='burger' onClick={() => setShow(!show)} >
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
            {show && <Nav />}
        </div>
    )
}

export default Burger