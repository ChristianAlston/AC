import React from 'react'
import { useState } from 'react'
import './Card.css'
import dog from './dog.svg'
import car from './car-wash.svg'
import babysitter from './nurse.svg'
import cleaning from './cleaning.svg'
import food from './food-delivery.svg'


const cardArray = [
    {
        logoId: 1,
        logo: dog,
        serviceName: 'Dog Walking',
        description: 'We walk your dogs for you We know how hard it is to find a good dog walker when you aint home.'
    },
    {
        logoId: 2,
        logo: babysitter,
        serviceName: 'Babysitting',
        description: 'Need a break? Date night? No problem we got you covered.'
    },
    {
        logoId: 3,
        logo: cleaning,
        serviceName: 'Cleaning',
        description: 'Need your house cleaned as well? We have the best in the world.'
    },
    {
        logoId: 4,
        logo: car,
        serviceName: 'Car Wash',
        description: 'Everyone needs a new shine every once in a while. See what we can do for you.'
    },
    {
        logoId: 5,
        logo: food,
        serviceName: 'Food delivery',
        description: 'Forget about Door Dash and Uber Eats. We can give you the best food runners near you. Did we mention this is all for free?'
    }
]

const Card = (props) => {
    // setting the variable name that you want to be apart of the props you call for each component. you structured the objects properties.
    const { logo, serviceName, description } = props.card
    return (
        <div className='card'>
            <img className='logoOf' src={logo} />
            <h3 className='servicename'>{serviceName}</h3>
            <p className='servicedescription'>{description}</p>
        </div>
    )
}


const CardList = () => {
    return (
        <div className='cardlist'>
            {cardArray.map((card) => {
                // card must have a unique key in order to be rendered
                // the props you are passing here are the props from the card object
                return <Card key={card.logoId} card={card}></Card>
            })}
        </div>
    )
}



export default CardList