import React from 'react'
import Burger from '../Burger/Burger'
import HeroBox from '../HeroBox/HeroBox'
import './UserHomepage.css'
import Div from '../Div/Div'
import CardList from '../Content3/Card/Card'
import { Link } from 'react-router-dom'

const UserHomepage = () => {
    return (
        <div>
            <HeroBox>
                <Burger />
            </HeroBox>
            <Div />
            <div className='homepage'>
                <div className='greeting'>
                    <h1 className='greet'>Hi Christian!</h1>
                    <p className='services'>Which service would you like done today?</p>
                </div>
                <div className='choices'>
                    <form className='choiceform'>
                        <div className='choicewheel'>
                            <CardList />
                        </div>
                    </form>
                    <Link to='/Userpage2'><button>Next</button></Link>
                </div>
            </div>
        </div>
    )
}

export default UserHomepage