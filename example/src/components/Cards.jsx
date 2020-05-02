/*
 * @Author: Joshua Asare
 * @Date: 2020-05-02 13:57:00
 * @Last Modified by: Joshua Asare
 * @Last Modified time: 2020-05-02 17:34:00
 */
import React from 'react';
import { Carousel } from 'react-circular-carousel';
import './css/card.css';
import { cards } from '../data';

const Cards = () => {
  return (
    <div className='card'>
      <div className='card__header'>
        <span>DECK OF CARDS</span>
      </div>
      <div className='card__container'>
        <Carousel width={150} height={200} id={0} transition='bounce'>
          {cards.map((card) => {
            return <img src={card.url} alt='' className='full__size' />;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Cards;
