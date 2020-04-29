# react-360-carousel

> react-360-carousel

[![NPM](https://img.shields.io/npm/v/react-360-carousel.svg)](https://www.npmjs.com/package/react-360-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-360-carousel
```

## Usage

```jsx
import React, { Component } from 'react'

import { Carousel } from 'react-360-carousel'
import 'react-360-carousel/dist/index.css'

class Example extends Component {
  render() {
    return (
      <Carousel height={25} width={25} id={0}>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </Carousel>
    )
  }
}
```

## License

MIT © [Joshuaasare](https://github.com/Joshuaasare)
