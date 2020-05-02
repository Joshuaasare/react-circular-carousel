/*
 * @Author: Joshua Asare
 * @Date: 2020-05-02 12:22:55
 * @Last Modified by: Joshua Asare
 * @Last Modified time: 2020-05-02 17:00:48
 */
import React from 'react';
import './css/landing.css';

const Landing = () => {
  return (
    <div className='row'>
      <div className='landing__text'>
        <span className='landing__text--main'>
          react-circular-carousel v1.0.0
        </span>

        <span className='landing__text--sub'>
          A pure mininized responsive carousel for react.
        </span>
      </div>
    </div>
  );
};

export default Landing;
