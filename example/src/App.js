import React, { Fragment } from 'react'

import { Carousel } from 'react-360-carousel'
import { images } from './assets'
import 'react-360-carousel/dist/index.css'
import './index.css'

const templateList = [
  { url: images.team2 },
  { url: images.team3 },
  { url: images.team4 },
  { url: images.team5 },
  { url: images.team6 },
  { url: images.team7 },
  { url: images.team8 },
  { url: images.team9 }
]

const tailorList = [
  { url: images.afri },
  { url: images.shoes },
  { url: images.wed },
  { url: images.suit },
  { url: images.watch }
]
const App = () => {
  return (
    <Fragment>
      <div>
        <Carousel height={20} width={20}>
          {templateList.map((item, i) => {
            const key = `list-1-${i}`
            return (
              <img key={key} className='some__image' alt='' src={item.url} />
            )
          })}
        </Carousel>
      </div>
      <div>
        <Carousel height={30} width={30}>
          {tailorList.map((item, i) => {
            const key = `list-2-${i}`
            return (
              <img key={key} className='some__image' alt='' src={item.url} />
            )
          })}
        </Carousel>
      </div>
    </Fragment>
  )
}

export default App
