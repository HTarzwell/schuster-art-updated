import React from 'react';
import { Card, Image, Transition } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { artistsImage } from '../Artists/Artist_Pages/artist_information';
import Carousel from '../Artists/Artist_Pages/carousel';

const Favorites = ({favorites}) => {
  return (
    <div className="artist-page">
      <div className="artist-hero">
        <div className="leftArrow" href='#'>
          <FontAwesomeIcon className="fa-icon" icon={faChevronLeft} size="3x" />
        </div>
        <Image id="hero" src={artistsImage[0].workPromo}/>
        <div className="rightArrow" href='#'>
          <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size="3x" />
        </div>
      </div>
      <div className="artist-carousel">
        <div className="leftArrow" href='#'>
          <FontAwesomeIcon className="fa-icon" icon={faChevronLeft}/>
        </div>
          {artistsImage.map((artist, index) => {
            return (
            <Carousel
              item={artist}
              index={index}
            />
          );
          })}
        <div className="rightArrow" href='#'>
          <FontAwesomeIcon className="fa-icon" icon={faChevronRight}/>
        </div>
      </div>
    </div>
  );
}

export default Favorites
