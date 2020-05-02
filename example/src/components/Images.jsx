/*
 * @Author: Joshua Asare
 * @Date: 2020-05-02 17:06:24
 * @Last Modified by: Joshua Asare
 * @Last Modified time: 2020-05-02 17:45:03
 */
import React from 'react';
import './css/images.css';
import { Carousel } from 'react-circular-carousel';
import { templateList } from '../data';

const Images = () => {
  return (
    <div className='images'>
      <div className='header'>
        <span>2. PICTURES</span>
      </div>
      <Carousel width={250} height={250} id={1}>
        {templateList.map((image) => {
          return (
            <img className='full__size images__image' alt='' src={image.url} />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Images;
