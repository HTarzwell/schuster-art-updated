import React from 'react'
import Slide from './Slide/Slide'
import RightArrow from './Arrows/RightArrow'
import LeftArrow from './Arrows/LeftArrow'


class Slider extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {}
      }
      
      goToPrevSlide = () => {
        
      }
      
      goToNextSlide = () => {
        
      }

  render() {
    return (
      <div className="slider">
        <h2>This is the slider component</h2>
        <Slide />

        <LeftArrow 
            goToPrevSlide={this.goToPrevSlide}
        />
        <RightArrow 
            goToPrevSlide={this.goToPrevSlide}
        />
      </div>
    )
  }
}

export default Slider