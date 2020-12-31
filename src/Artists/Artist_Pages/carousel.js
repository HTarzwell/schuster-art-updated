import React from 'react';
import 'semantic-ui-css/semantic.min.css'

const Carousel = ({item, index}) => {
  return (
      <div key={index} className="artist-card">
        <img className= "artist-card-image" src={item.workPromo.image} alt={item.name}/>
        <div className="artist-card-name">{item.name}</div>
      </div>
  )
}

export default Carousel
