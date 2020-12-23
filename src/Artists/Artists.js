import React, {useState, useEffect} from 'react';
import Carousel from './Artist_Pages/carousel';
import { Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Artists = (artist) => {

  const [selectedArtist, setArtist] = useState();

  useEffect(() => {
    console.log('artist is ', artist.artist.location.artistSelected)
    setArtist(artist.artist.location.artistSelected)
  }, [artist]);

  return (
    <div>
      { selectedArtist ?
      (<div className="artist-page">
        <div className="artist-hero">
          <div className="leftArrow" href='#'>
            <FontAwesomeIcon className="fa-icon" icon={faChevronLeft} size="3x" />
          </div>
          <Image id="hero" src={selectedArtist.workPromo}/>
          <div className="rightArrow" href='#'>
            <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size="3x" />
          </div>
        </div>
        <div className="artist-carousel">
          <div className="leftArrow" href='#'>
            <FontAwesomeIcon className="fa-icon" icon={faChevronLeft} size="3x" />
          </div>
          {selectedArtist.works.map((work, index) => {
            return (
              <div className="artist-card" key={index}>
                <img className= "artist-card-image" src={work}/>
              </div>
            );
          })}
          <div className="rightArrow" href='#'>
            <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size="3x" />
          </div>
        </div>
      </div>) : null
      }
    </div>
  );
}

export default Artists;
