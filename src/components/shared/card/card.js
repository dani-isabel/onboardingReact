import React from 'react'
import './card.scss';

const Card = ({rolePeople,imgPeople,namePeople,emailRoute,emailPeople}) => {
    return (
        <div className="card">
            <h3>{rolePeople}</h3>
            <img src={imgPeople} alt={rolePeople}/>
            <p>{namePeople}</p>
            <a target="_blanck" href={emailRoute}>{emailPeople}</a>
        </div>
    )
}

export default Card;