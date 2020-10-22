import React from 'react'
import HeroBox from '../HeroBox/HeroBox'
import './Userpage2.css'

const Userpage2 = () => {
    return (
        <div className='page2'>
            <HeroBox />
            <div className='resultstop'>
                <h3 className='details'>Ok! When will you need this service?</h3>
                <form className='dateform'>
                    <input type='date' className='date' />

                    <button className='next'>Next</button>
                </form>
            </div>
        </div>
    )
}

export default Userpage2