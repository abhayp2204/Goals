import React, { useState } from 'react'
import Card from './Card'
import '../css/Card.css'

// Firebase
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"
import { auth, firestore } from "../firebase"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { useSendSignInLinkToEmail } from 'react-firebase-hooks/auth'

function Cards(props) {
    const cardsRef = firestore.collection(props.type)
    const timeRef = firestore.collection('timeline')

    const [cardName, setCardName] = useState("")

    const query = cardsRef.orderBy('createdAt').limit(25)
    const [cards] = useCollectionData(query, { idField: 'id' })

    const addCard = async (e) => {
        e.preventDefault()

        await cardsRef.add({
            name: cardName,
            image: Math.floor(Math.random() * 62) + 1,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setCardName('')
    }

    const deleteCard = async (cardName) => {
        cardsRef.where("name", "==", cardName).get()
            .then(snapshot => {
                snapshot.docs[0].ref.delete()
            })
    }

    const completeCard = async (cardName) => {
        await timeRef.add({
            cardName: cardName,
            completedAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
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
                    <Card
                        key={key}
                        card={card}
                        image={card.image}
                        onDelete={() => deleteCard(card.name)}
                        onComplete={() => completeCard(card.name)}
                    />
                )}
            </div>
        </div>
    )
}

export default Cards
