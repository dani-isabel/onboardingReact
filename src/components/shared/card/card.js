import React from 'react'
import './card.scss';

const Card = ({rolePeople,imgPeople,namePeople,emailRoute,emailPeople}) => {
    return (
        <div className="cardPeople">
            <h3 className="card__title">{rolePeople}</h3>
            <img className="card__img" src={imgPeople} alt={rolePeople}/>
            <p className="card__p">{namePeople}</p>
            <a className="card__link" target="_blanck" href={emailRoute}>{emailPeople}</a>
        </div>
    )
}

export default Card;