import React from 'react';
import './CardList.css';
import Card from '../card/Card';
import cardInfo from '../cardInfo.json'

function CardList() {
  return (
    <div className='cards'>
      {
        cardInfo && cardInfo.map(cardInfo => {
          return (<Card />)
        })
      }          
    </div>
  );
}

export default CardList;