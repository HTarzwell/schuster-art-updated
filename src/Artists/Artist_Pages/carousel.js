import React from 'react';
import { Transition } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import { Route, Link, Switch } from "react-router-dom";

const Carousel = ({item, index}) => {
  return (
    <Transition key={index} mountOnShow={true} unmountOnHide={true} visible={true}>
      <div className="artist-card">
        <img className= "artist-card-image" src={item.workPromo.image}/>
        <div className="artist-card-name">{item.name}</div>
      </div>
    </Transition>
  )
}

export default Carousel
