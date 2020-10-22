import React from 'react'
import './Content1.css'
import Video from './video.mp4'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Burger from '../Burger/Burger'
import Div from '../Div/Div'
const Content1 = () => {
    return (
        <div className='content1'>
            <Div />
            <Burger />
            <div className='introbox'>
                <h1 className='serviceintro'>Our Services Rock.</h1>
                <p className='subintro'>See what services we have to offer.</p>
            </div>
            <div className='over'>
                <video autoPlay loop muted
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        height: '100vh',
                        width: '100%',
                        objectFit: 'cover',
                        zIndex: '-1',
                        mixBlendMode: 'overlay'

                    }}
                >
                    <source src={Video} type='video/mp4' />
                </video>
            </div>

        </div>
    )
}

export default Content1