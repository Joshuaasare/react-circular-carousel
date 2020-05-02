import React, { Fragment } from 'react';

import { Carousel } from 'react-circular-carousel';
import { images } from './assets';
import 'react-circular-carousel/dist/index.css';
import './index.css';

const templateList = [
  { url: images.team2 },
  { url: images.team3 },
  { url: images.team4 },
  { url: images.team5 },
  { url: images.team6 },
  { url: images.team7 },
  { url: images.team8 },
  { url: images.team9 }
];

const tailorList = [
  { url: images.afri },
  { url: images.shoes },
  { url: images.wed },
  { url: images.suit },
  { url: images.afri },
  { url: images.shoes },
  { url: images.wed },
  { url: images.suit },
  { url: images.watch },
  { url: images.afri },
  { url: images.shoes },
  { url: images.wed },
  { url: images.suit },
  { url: images.watch },
  { url: images.afri },
  { url: images.shoes },
  { url: images.wed },
  { url: images.suit },
  { url: images.watch },
  { url: images.afri },
  { url: images.shoes },
  { url: images.wed },
  { url: images.suit },
  { url: images.watch },
  { url: images.afri },
  { url: images.shoes },
  { url: images.wed },
  { url: images.suit },
  { url: images.watch },
  { url: images.watch },
  { url: images.afri },
  { url: images.shoes },
  { url: images.wed },
  { url: images.suit },
  { url: images.afri },
  { url: images.shoes },
  { url: images.wed },
  { url: images.suit },
  { url: images.watch },
  { url: images.afri },
  { url: images.shoes },
  { url: images.wed },
  { url: images.suit },
  { url: images.watch },
  { url: images.afri },
  { url: images.shoes },
  { url: images.wed },
  { url: images.suit },
  { url: images.watch },
  { url: images.afri },
  { url: images.shoes },
  { url: images.wed },
  { url: images.suit },
  { url: images.watch },
  { url: images.afri },
  { url: images.shoes },
  { url: images.wed },
  { url: images.suit },
  { url: images.watch },
  { url: images.watch }
];
const App = () => {
  return (
    <Fragment>
      <Carousel height={30} width={30} id={4}>
        {templateList.map((item, i) => {
          const key = `list-1-${i}`;
          return (
            <img key={key} className='some__image' alt='' src={item.url} />
          );
        })}
      </Carousel>
      <Carousel height={20} width={20} id={0}>
        {templateList.map((item, i) => {
          const key = `list-1-${i}`;
          return (
            <img key={key} className='some__image' alt='' src={item.url} />
          );
        })}
      </Carousel>
      <Carousel height={15} width={15} id={1}>
        {templateList.map((item, i) => {
          const key = `list-1-${i}`;
          return (
            <img key={key} className='some__image' alt='' src={item.url} />
          );
        })}
      </Carousel>
      <Carousel height={10} width={10} id={2}>
        {tailorList.map((item, i) => {
          const key = `list-2-${i}`;
          return (
            <img key={key} className='some__image' alt='' src={item.url} />
          );
        })}
      </Carousel>
      <Carousel height={5} width={5} id={3}>
        {tailorList.map((item, i) => {
          const key = `list-2-${i}`;
          return (
            <img key={key} className='some__image' alt='' src={item.url} />
          );
        })}
      </Carousel>
    </Fragment>
  );
};

export default App;
