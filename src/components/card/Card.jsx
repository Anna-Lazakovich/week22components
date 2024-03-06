import React from 'react';
import './Card.css';
import CardInfo from '../cardInfo.json'

function Card() {
  //const { name, universe, alterego, occupation, friends, superpowers, url } = props;
  return (
          CardInfo && CardInfo.map (cardInfo => {
            return (
              <div className="card" key={cardInfo.id}>
                <h4 className="card__name">{cardInfo.name}</h4>
                <div className="card__body">
                  <p className="card__universe"><b>Вселенная: </b>{cardInfo.universe}</p>
                  <p className="card__alterego"><b>Альтер эго: </b>{cardInfo.alterego}</p>
                  <p className="card__occupation"><b>Род деятельности: </b>{cardInfo.occupation}</p>
                  <p className="card__friends"><b>Друзья: </b>{cardInfo.friends}</p>
                  <p className="card__superpowers"><b>Суперсилы: </b>{cardInfo.superpowers}</p>
                </div>
                <div className="card__footer">
                  <img className="img" src={cardInfo.url} alt={cardInfo.name}/>
                </div>
              </div>
            )
    }))
}
  
export default Card;