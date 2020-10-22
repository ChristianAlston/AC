import React from 'react'
import Burger from '../Burger/Burger'
import '../Login/Login.css'

const HeroBox = () => {
    return (
        <div className='topblock'>

            <h1 className='herotitle'> Apartment <span>Concierge</span> </h1>
            <Burger />
        </div>
    )
}

export default HeroBox