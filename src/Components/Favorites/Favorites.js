import React, { useState, useEffect } from 'react'
import businessData from '../Vendor/VendorData'
import './Favorites.css'

const Favorites = () => {
    const [business, setBusiness] = useState(businessData)
    const removeItem = (id) => {
        let newFavorites = business.filter((business) => business.id !== id)
        setBusiness(newFavorites)
    }

    return (
        <>
            {
                business.map((business) => {
                    const { id, name } = business
                    return (
                        <div className='favoritebox'>
                            <div className='circle'>

                            </div>
                            <h3 className='businessname'>{name}</h3>
                            <button onClick={() => removeItem(id)} className='removeitem'>X</button>
                        </div>
                    )
                })
            }
            <button onClick={() => setBusiness([])} className='removeall'>Remove All</button>
        </>
    )
}

export default Favorites