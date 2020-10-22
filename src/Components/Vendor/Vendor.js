import React, { useState } from 'react'
import businessData from './VendorData'




const Business = () => {
    const [store, setStore] = useState([])
    const addItem = (item) => {
        store.push(item)
        console.log(store)
    }

    const removeItem = (id) => {
        let newStore = store.filter((business) => business.id !== id)
        setStore(newStore)
        console.log(newStore)
    }

    const removeAll = () => {
        setStore([])
        console.log(store)
    }


    return (
        <>
            {
                businessData.map((person) => {
                    const { id, name } = person
                    return (
                        <div key={id}>
                            <h2>{id}</h2>
                            <h1>{name}</h1>
                            <button onClick={() => addItem(person)}>Add To Favorites</button>
                            <button onClick={() => removeItem(id)}>Remove</button>
                        </div>
                    )
                })
            }

            <button onClick={() => removeAll()}>Double Tap to Remove All</button>
        </>
    )
}



export default Business