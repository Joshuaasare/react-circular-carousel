/*
 * @Author: Joshua Asare
 * @Date: 2020-05-02 13:57:00
 * @Last Modified by: Joshua Asare
 * @Last Modified time: 2020-05-02 14:50:06
 */
import React from 'react';
import { Carousel } from 'react-circular-carousel';
import './css/card.css';
import { cards } from '../data';

const Cards = () => {
  return (
    <div className='card'>
      <div className='card__container'>
        <Carousel width={150} height={200}>
          {cards.map((card) => {
            return <img src={card.url} alt='' className='card__item' />;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Cards;
