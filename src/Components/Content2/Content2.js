import React from 'react'
import './Content2.css'

const Content2 = () => {
    return (
        <div className='content2'>
            <div className='box'>
                <h1 className='hero'>This is an app that allows you to order services directly from vendors to your apartment.
                Here are some of our partners.</h1>
            </div>
            <div className='listofcompanies'>
                <ul className='companies'>
                    <li>Styl Residential</li>
                    <li>Keller Williams</li>
                    <li>Berkshires</li>
                    <li>Alston Residence</li>
                    <li>Kephi Inc</li>
                </ul>
            </div>
        </div>
    )
}

export default Content2