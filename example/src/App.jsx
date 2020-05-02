import React, { Fragment } from 'react';
import 'react-circular-carousel/dist/index.css';
import './css/app.css';
import { Landing, Cards } from './components';

const App = () => {
  return (
    <Fragment>
      <section className='section__landing'>
        <Landing />
      </section>

      <section className='section__cards'>
        <Cards />
      </section>
    </Fragment>
  );
};

export default App;
