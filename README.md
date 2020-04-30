# react-circular-carousel

> react-cicular-carousel

[![NPM](https://img.shields.io/npm/v/react-circular-carousel.svg)](https://www.npmjs.com/package/react-circular-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-circular-carousel
```

## Usage

```jsx
import React, { Component } from 'react'

import { Carousel } from 'react-circular-carousel'
import 'react-circular-carousel/dist/index.css'

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
