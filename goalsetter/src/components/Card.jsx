import React from 'react'
import '../css/Card.css'

function Card(props) {
    return (
        <div className='card'>
            {props.card.name}
            <button onClick={() => props.onDelete()} className="delete-button">
                Delete
            </button>
        </div>
    )
}

export default Card