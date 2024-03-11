import React from 'react';
import './Card.css';

function Card (item) {
  //const { name, universe, alterego, occupation, friends, superpowers, url } = props;
  return (
  <div className="card" key={item.id}>
    <h4 className="card__name">{item.name}</h4>
    <div className="card__body">
      <p className="card__universe"><b>Вселенная: </b>{item.universe}</p>
      <p className="card__alterego"><b>Альтер эго: </b>{item.alterego}</p>
      <p className="card__occupation"><b>Род деятельности: </b>{item.occupation}</p>
      <p className="card__friends"><b>Друзья: </b>{item.friends}</p>
      <p className="card__superpowers"><b>Суперсилы: </b>{item.superpowers}</p>
    </div>
    <div className="card__footer">
      <img className="img" src={item.url} alt={item.name}/>
    </div>
  </div>
)
}
  
export default Card;