import React, { useState, useEffect } from 'react'
import Favorites from './Favorites'
import './Favorites.css'
import HeroBox from '../HeroBox/HeroBox'

const FavoritesPage = () => {
    return (
        <div className='favpage'>
            <HeroBox />
            <h2 className='your'>Your Favorites</h2>
            <Favorites />
        </div>
    )
}

export default FavoritesPage