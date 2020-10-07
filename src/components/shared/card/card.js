import React from 'react'
import './card.scss';

const Card = ({rolePeople,imgPeople,namePeople,emailPeople}) => {
    return (
        <div className="card">
            <h3>{rolePeople}</h3>
            <img src={imgPeople} alt={rolePeople}/>
            <p>{namePeople}</p>
            <button>{emailPeople}</button>
        </div>
    )
}

export default Card;