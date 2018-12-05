import React from 'react'
import Slider from './Slider/Slider'

class Carousel extends React.Component {
  render() {
    return (
      <div className="carousel">
        <h1>This is the image carousel!</h1>
        <Slider />
      </div>
    )
  }
}

export default Carousel
