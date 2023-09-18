import React, { useState } from 'react'

// Firebase
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"
import { auth, firestore } from "../firebase"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { useSendSignInLinkToEmail } from 'react-firebase-hooks/auth'

function Cards(props) {
    const cardsRef = firestore.collection(props.type)
    const [cardName, setCardName] = useState("")

    const query = cardsRef.orderBy('createdAt').limit(25)
    const [cards] = useCollectionData(query, { idField: 'id' })

    const addCard = async(e) => {
        e.preventDefault()

        await cardsRef.add({
            name: cardName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })

        alert("Card Added!")
        setCardName('')
    }

    return (
        <div className='cards'>
            <div className='add-card-container'>
                <input
                    className='input-card-name'
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder='add card'
                />
                <button
                    className='add-card-button'
                    onClick={(e) => addCard(e)}
                >
                    Add
                </button>
            </div>

            <div className='cards-display'>
                {cards && cards.map((card, key) => 
                    <div key={key}>{card.name}</div>
                )}
            </div>
        </div>
    )
}

export default Cards